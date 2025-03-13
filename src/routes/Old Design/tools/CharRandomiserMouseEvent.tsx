// Define a string containing all possible characters for randomization
const letters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!/?-@#£$%&`;

// Define a function that randomizes characters in a target element when a mouse event occurs
const charRandomizer = (event: React.MouseEvent<HTMLElement>) => {
  // Declare variables for the interval ID and iteration count
  let interval: number | undefined;
  let iteration = -1;
  // Get the target element from the event
  let target = event.target as HTMLElement;

  // If the target is not a paragraph element, find the first paragraph element within the target
  if (target.tagName !== "P") {
    target = target.querySelector("p") as HTMLElement;
  }
  // Clear any existing interval to avoid multiple intervals running simultaneously
  clearInterval(interval);

  // Set up a new interval to run every 50 milliseconds
  interval = window.setInterval(() => {
    // Check if the target element and its data-value attribute exist
    if (target && target.dataset.value) {
      // Update the inner text of the target element with randomized characters
      target.innerText = target.innerText
        .split("") // Split the current text into an array of characters
        .map((l, index) => {
          console.log(l); // Log the current character to the console for debugging
          // If the current index is less than the iteration count, use the original character
          if (index < iteration) {
            return target.dataset.value![index];
          }
          // Otherwise, replace the character with a random character from the letters string
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join(""); // Join the array of characters back into a string

      // If the iteration count exceeds the length of the original text, clear the interval
      if (iteration >= target.dataset.value.length) {
        clearInterval(interval);
      }

      // Increment the iteration count by 1/3 to slow down the randomization effect
      iteration += 1 / 3;
    }
  }, 50); // Interval duration in milliseconds
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
