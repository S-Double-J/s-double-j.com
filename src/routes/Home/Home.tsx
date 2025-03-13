import styled from "styled-components";
import Landing from "./Landing";
import Focus from "./Focus";
import ServHome from "./ServicesHome";
import Footer from "./Footer";
import { useRef } from "react";
import { motion } from "motion/react";

const Frame = styled.div`
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
const SayHi = styled.button`
  display: flex;
  padding: 10px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: none;
  background: none;
  cursor: pointer;
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: var(--brutal-mb-light);
  mix-blend-mode: difference;
  z-index: 20;
  & > p {
    cursor: pointer;
  }
`;
const ScrollDiv = styled.div`
  width: 100%;
  height: calc((100svh - 75px) * 5);
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
    }
    if (value === "light") {
      document.documentElement.style.setProperty("--bg", "var(--brutal-light)");
      document.documentElement.style.setProperty("--fg", "var(--brutal-dark)");
    }
  };

  const targetRef = useRef(null);
  const containerRef = useRef(null);
  return (
    <Frame ref={containerRef} id="containerRef">
      <SayHi>
        <p
          className="large mix-blend-diff"
          style={{ color: "var(--brutal-mb-light)" }}
        >
          Say hi
        </p>
      </SayHi>
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
