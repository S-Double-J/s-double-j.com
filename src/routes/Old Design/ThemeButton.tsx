import styled from "styled-components";
import { motion } from "motion/react";
import { useState } from "react";

const ColourSchemeButton = styled(motion.button)`
  display: flex;
  height: 100%;
  width: 36px;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  padding: 2px;
  gap: 2px;
  color-scheme: light dark;
  background-color: light-dark(var(--light-fg), var(--dark-fg));
`;
const buttonVariants = {
  hidden: {
    transform: "translateY(120%)",
  },
  visible: {
    transform: "translateY(0%)",
  },
};
const CSBar = styled(motion.span)`
  position: absolute;
  width: calc(50% - 2px);
  height: calc(100% - 4px);
  top: 2px;
  color-scheme: light dark;
  border: none;
  background-color: light-dark(var(--light-bg), var(--dark-bg));
`;
const variants = {
  light: {
    right: "2px",
  },
  dark: {
    right: "18px",
  },
};
const CSButtonText = styled.p`
  font-size: 10px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  margin: 3px 0 0 0;
  letter-spacing: 3px;
  color: light-dark(var(--light-bg), var(--dark-bg));
`;

function ThemeButton() {
  const preferredTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  let initialTheme = "light";
  if (preferredTheme === true) {
    initialTheme = "dark";
  }

  const [theme, setTheme] = useState<boolean>(preferredTheme);

  function SwapTheme(setTheme: React.Dispatch<React.SetStateAction<boolean>>) {
    const root = document.documentElement;
    const lightBG = getComputedStyle(root).getPropertyValue("--light-bg");
    const lightFG = getComputedStyle(root).getPropertyValue("--light-fg");
    const darkBG = getComputedStyle(root).getPropertyValue("--dark-bg");
    const darkFG = getComputedStyle(root).getPropertyValue("--dark-fg");

    root.style.setProperty("--light-bg", lightFG);
    root.style.setProperty("--light-fg", lightBG);
    root.style.setProperty("--dark-bg", darkFG);
    root.style.setProperty("--dark-fg", darkBG);

    setTheme((theme) => !theme);
  }

  return (
    <ColourSchemeButton
      onClick={() => SwapTheme(setTheme)}
      variants={buttonVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ delay: 3 }}
    >
      <CSBar
        variants={variants}
        initial={initialTheme}
        animate={theme ? "dark" : "light"}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
      <CSButtonText>light</CSButtonText>
      <CSButtonText style={{ letterSpacing: "6px", marginTop: "6px" }}>
        dark
      </CSButtonText>
    </ColourSchemeButton>
  );
}

export default ThemeButton;
