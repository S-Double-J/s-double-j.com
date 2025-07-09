import styled from "styled-components";
import Landing from "./Landing";
import Focus from "./Focus";
import ServHome from "./ServicesHome";
import Footer from "../../componenets/Footer";
import { useRef } from "react";
import { motion } from "motion/react";


const Frame = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 200px;
`;

const ScrollDiv = styled.div`
  width: 100%;
  height: calc((100dvh - 75px) * 5);
  flex-shrink: 0;
  display: flex;
  align-items: start;
  justify-content: start;
  position: relative;
  flex-direction: column;
  @media (hover: none) {
    height: calc((100dvh - 75px) * 3);
  }
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
  return (
    <Frame
    >
      <ColorChangeDiv
        onViewportEnter={() => updateCSSVariable("light")}
        onViewportLeave={() => updateCSSVariable("dark")}
      >
        <ScrollDiv id="focus-scroll-div" ref={targetRef}>
          <Landing targetRef={targetRef}></Landing>
          <Focus targetRef={targetRef}></Focus>
        </ScrollDiv>
      </ColorChangeDiv>
      <ColorChangeDiv
        onViewportEnter={() => updateCSSVariable("dark")}
        onViewportLeave={() => updateCSSVariable("light")}
      >
        <ServHome></ServHome>
        <Footer></Footer>
      </ColorChangeDiv>
    </Frame>
  );
}

export default Home;
