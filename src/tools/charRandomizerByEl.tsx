interface Props {
  element: HTMLElement;
  complete: boolean;
  handleComplete: (bool: boolean) => void;
}

const charRandomizerByEl = ({ complete, handleComplete, element }: Props) => {
  if (complete === true) {
    handleComplete(false);
    if (!element || !element.dataset.value) {
      console.error("Element or dataset.value is missing.");
      return;
    }

    const letters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!/?-@#£$%&`;
    let interval: number | undefined;
    let intervalDuration = 100;
    let iteration = -3;
    let target = element;

    if (
      target.tagName !== "P" &&
      target.tagName !== "H1" &&
      target.tagName !== "H2" &&
      target.tagName !== "H3" &&
      target.tagName !== "SPAN"
    ) {
      target = target.querySelector("p") as HTMLElement;
    }

    if (target.innerText.length < 15 && target.innerText.length > 5) {
      intervalDuration = 70;
      iteration = -2;
    }

    if (target.innerText.length > 15) {
      intervalDuration = 30;
    }

    clearInterval(interval);

    interval = window.setInterval(() => {
      if (target && target.dataset.value) {
        target.innerText = target.innerText
          .split("")
          .map((_, index) => {
            if (iteration > index) {
              return target.dataset.value![index];
            }
            if (iteration > index - 2 && iteration < index) {
              return letters[Math.floor(Math.random() * letters.length)];
            }
            return "\u00A0";
          })
          .join("");

        if (iteration >= target.dataset.value.length) {
          clearInterval(interval);
          handleComplete(true);
        }

        iteration += Math.random();
      }
    }, intervalDuration);
  } else console.log("charRand failed because complete = ", complete);
};

export default charRandomizerByEl;
