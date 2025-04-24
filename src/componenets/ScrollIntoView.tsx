import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      console.log("scrolling to: ", hash);
      const element = document.getElementById(hash.substring(1));
      setTimeout(() => {
        if (element) {
          const offset = 75; // Adjust based on your header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [hash]);

  return null;
}
