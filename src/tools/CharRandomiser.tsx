const letters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!/?-@#£$%&`;

const charRandomizer = (event: React.MouseEvent<HTMLElement>) => {
  let interval: number | undefined;
  let iteration = 0;
  let target = event.target as HTMLElement;

  if (target.tagName !== 'P') {
    target = target.querySelector('p') as HTMLElement;
  }
  clearInterval(interval);

  interval = window.setInterval(() => {
    if (target && target.dataset.value) {
      target.innerText = target.innerText
        .split("")
        .map((l, index) => {
          console.log(l)
          if (index < iteration) {
            return target.dataset.value![index];
          }


          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }
  }, 50);
};

export default charRandomizer;


// const letters =
//   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!/?-@#£$%&";

// const charRandomizer = (selector: string) => {
//   useEffect(() => {
//     const elements = document.querySelectorAll(selector);

//     elements.forEach((element) => {
//       if (element) {
//         let interval: number | undefined;

//         element.addEventListener("mouseover", (event) => {
//           let iteration = 0;
//           const target = event.target as HTMLElement;

//           clearInterval(interval);

//           interval = window.setInterval(() => {
//             if (target.dataset.value) {
//               target.innerText = target.innerText
//                 .split("")
//                 .map((letter, index) => {
//                   if (index < iteration) {
//                     return target.dataset.value![index];
//                   }

//                   return letters[Math.floor(Math.random() * 62)];
//                 })
//                 .join("");

//               if (iteration >= target.dataset.value.length) {
//                 clearInterval(interval);
//               }

//               iteration += 1 / 3;
//             }
//           }, 30);
//         });
//       }
//     });
//   }, [selector]);
// };