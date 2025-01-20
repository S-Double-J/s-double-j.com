// Define a string containing all possible characters for randomization
const letters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!/?-@#£$%&`;

// Define a function that randomizes characters in a target element using a React ref
const charRandomizerByEl = (element: HTMLElement) => {
  // Declare variables for the interval ID, interval duration and iteration count
  let interval: number | undefined;
  let intervalDuration = 100;
  let iteration = -3;
  // Get the target element from the argument
  let target = element;

  // If the target is not a paragraph element, find the first paragraph element within the target
  if (target!.tagName !== "P" && target!.tagName !== "H1") {
    target = target!.querySelector("p") as HTMLElement;
  }
  // Depending on the length of the target, speed up the animation
  if (target.innerText.length < 15 && target.innerText.length > 5) {
    intervalDuration = 60;
    iteration = -2;
  }
  if (target.innerText.length > 15) {
    intervalDuration = 10;
  }
  // Clear any existing interval to avoid multiple intervals running simultaneously
  clearInterval(interval);

  interval = window.setInterval(() => {
    // Check if the target element and its data-value attribute exist
    if (target && target.dataset.value) {
      // Update the inner text of the target element with randomized characters
      target.innerText = target.innerText
        .split("") // Split the current text into an array of characters
        .map((l, index) => {
          // If the current index is less than the iteration count, use the original character
          if (iteration > index) {
            return target.dataset.value![index];
          } // If the index is larger than the current itteration but not by more than 2, replace the character with a random character from the letters string
          if (iteration > index - 2 && iteration < index) {
            return letters[Math.floor(Math.random() * letters.length)];
          }
          // Otherwise return a whitespace
          return "\u00A0";
        })
        .join(""); // Join the array of characters back into a string

      // If the iteration count exceeds the length of the original text, clear the interval
      if (iteration >= target.dataset.value.length) {
        clearInterval(interval);
      }

      // Increment the iteration count by 0.1 - 1 to slow down the randomization effect
      iteration += Math.random();
    }
  }, intervalDuration); // Interval duration in milliseconds
};

export default charRandomizerByEl;
