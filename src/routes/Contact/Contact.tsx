import styled from "styled-components";
import { motion } from "motion/react";
import Footer from "../../componenets/Footer";
import Hero from "./Hero";

const Frame = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
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
      document.documentElement.style.setProperty(
        "--sh-visibility",
        "block"
      );
    }
    if (value === "absurd") {
      document.documentElement.style.setProperty("--fg", "var(--absurd-light)");
      document.documentElement.style.setProperty("--bg", "var(--absurd-red)");
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
      document.documentElement.style.setProperty(
        "--sh-visibility",
        "none"
      );
    }
  };

  return (
    <Frame>
      <ColorChangeDiv
        onViewportEnter={() => updateCSSVariable("absurd")}
        onViewportLeave={() => updateCSSVariable("footer")}
      >
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
