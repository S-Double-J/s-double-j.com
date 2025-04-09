import styled from "styled-components";
import Landing from "./Landing";
import Focus from "./Focus";
import ServHome from "./ServicesHome";
import Footer from "../../componenets/Footer";
import { useRef } from "react";
import { motion } from "motion/react";

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

function Home() {
  const updateCSSVariable = (value: string) => {
    if (value === "dark") {
      document.documentElement.style.setProperty("--fg", "var(--brutal-light)");
      document.documentElement.style.setProperty("--bg", "var(--brutal-dark)");
      document.documentElement.style.setProperty(
        "--fg-mb",
        "var(--brutal-mb-light)"
      );
    }
    if (value === "light") {
      document.documentElement.style.setProperty("--bg", "var(--brutal-light)");
      document.documentElement.style.setProperty("--fg", "var(--brutal-dark)");
      document.documentElement.style.setProperty(
        "--fg-mb",
        "var(--brutal-mb-light)"
      );
    }
  };

  const targetRef = useRef(null);
  const containerRef = useRef(null);
  return (
    <Frame
      ref={containerRef}
      id="containerRef"
    >
      <ColorChangeDiv
        onViewportEnter={() => updateCSSVariable("light")}
        onViewportLeave={() => updateCSSVariable("dark")}
      >
        <ScrollDiv id="focus-scroll-div" ref={targetRef}>
          <Landing containerRef={containerRef} targetRef={targetRef}></Landing>
          <Focus containerRef={containerRef} targetRef={targetRef}></Focus>
        </ScrollDiv>
      </ColorChangeDiv>
      <ColorChangeDiv
        onViewportEnter={() => updateCSSVariable("dark")}
        onViewportLeave={() => updateCSSVariable("light")}
      >
        <ServHome containerRef={containerRef}></ServHome>
        <Footer></Footer>
      </ColorChangeDiv>
    </Frame>
  );
}

export default Home;
