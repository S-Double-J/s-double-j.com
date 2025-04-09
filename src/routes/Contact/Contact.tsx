import styled from "styled-components";
import { motion } from "motion/react";
import Footer from "../../componenets/Footer";
import Hero from "./Hero";

const Frame = styled(motion.div)`
  width: 100%;
  height: calc(100svh - 75px);
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  scrollbar-width: none;
  position: relative;
  gap: 200px;
`;

const ColorChangeDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 200px;
`;

function Contact() {
  const updateCSSVariable = (value: string) => {
    if (value === "footer") {
      document.documentElement.style.setProperty("--fg", "var(--absurd-light)");
      document.documentElement.style.setProperty("--bg", "var(--absurd-red");
      document.documentElement.style.setProperty(
        "--fg-mb",
        "var(--absurd-mb-light)"
      );
      document.documentElement.style.setProperty("--sh-opacity", "1");
      document.documentElement.style.setProperty("--sh-cen-opacity", "0");
      document.documentElement.style.setProperty(
        "--sh-cen-visibility",
        "hidden"
      );
    }
    if (value === "absurd") {
      document.documentElement.style.setProperty("--bg", "var(--absurd-red)");
      document.documentElement.style.setProperty("--fg", "var(--absurd-light)");
      document.documentElement.style.setProperty(
        "--fg-mb",
        "var(--absurd-mb-light)"
      );
      document.documentElement.style.setProperty("--sh-opacity", "0");
      document.documentElement.style.setProperty("--sh-cen-opacity", "1");
      document.documentElement.style.setProperty(
        "--sh-cen-visibility",
        "visible"
      );
    }
  };

  return (
    <Frame
      onViewportEnter={() => updateCSSVariable("absurd")}
      onViewportLeave={() => updateCSSVariable("footer")}
    >
      <ColorChangeDiv>
        <Hero />
      </ColorChangeDiv>
      <ColorChangeDiv
        onViewportEnter={() => updateCSSVariable("footer")}
        onViewportLeave={() => updateCSSVariable("absurd")}
      >
        <Footer />
      </ColorChangeDiv>
    </Frame>
  );
}

export default Contact;
