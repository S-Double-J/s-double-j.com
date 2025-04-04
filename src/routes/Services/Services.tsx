import Hero from "./Hero";
import SayHi from "../../componenets/SayHi";
import styled from "styled-components";
import { motion } from "motion/react";
import CoverText from "./CoverText";
import Table from "./Table";
import Footer from "../../componenets/Footer";
import { useRef } from "react";

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
const ScrollDiv = styled.div`
  width: 100%;
  height: calc((100svh - 75px) * 10);
  flex-shrink: 0;
  display: flex;
  align-items: start;
  justify-content: start;
  position: relative;
  flex-direction: column;
`;

const ColorChangeDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 200px;
`;
function Services() {
  const updateCSSVariable = (value: string) => {
    if (value === "footer") {
      document.documentElement.style.setProperty("--fg", "var(--bh-red)");
      document.documentElement.style.setProperty("--bg", "var(--bh-light");
      document.documentElement.style.setProperty("--fg-mb", "var(--bh-mb-red)");
    }
    if (value === "light") {
      document.documentElement.style.setProperty("--bg", "var(--bh-light)");
      document.documentElement.style.setProperty("--fg", "var(--brutal-dark)");
      document.documentElement.style.setProperty(
        "--fg-mb",
        "var(--bh-mb-light)"
      );
    }
  };

  const container = useRef(null);
  const target = useRef(null);
  return (
    <Frame onViewportEnter={() => updateCSSVariable("light")} ref={container}>
      <SayHi />
      <ScrollDiv ref={target}>
        <Hero container={container} target={target} />
        <CoverText container={container} target={target} />
      </ScrollDiv>
      <Table container={container} />
      <ColorChangeDiv
        onViewportEnter={() => updateCSSVariable("footer")}
        onViewportLeave={() => updateCSSVariable("light")}
      >
        <Footer />
      </ColorChangeDiv>
    </Frame>
  );
}

export default Services;
