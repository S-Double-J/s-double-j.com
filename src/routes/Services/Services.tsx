import Hero from "./Hero";
import styled from "styled-components";
import { motion } from "motion/react";
import CoverText from "./CoverText";
import Table from "./Table";
import Footer from "../../componenets/Footer";
import { useRef } from "react";

const Frame = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 200px;
`;
const ScrollDiv = styled.div`
  width: 100%;
  height: calc((100lvh - 75px) * 3);
  flex-shrink: 0;
  display: flex;
  align-items: start;
  justify-content: start;
  position: relative;
  flex-direction: column;
  @media (hover: none) {
    height: calc((100dvh - 75px) * 1.5);
  }
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
      document.documentElement.style.setProperty(
        "--fg-mb",
        "var(--bh-mb-red)"
      );
    }
    if (value === "bauhaus") {
      document.documentElement.style.setProperty("--bg", "var(--bh-light)");
      document.documentElement.style.setProperty("--fg", "var(--brutal-dark)");
      document.documentElement.style.setProperty("--fg-mb", "var(--bh-light)");
    }
  };

  const target = useRef(null);
  return (
    <Frame >
      <ColorChangeDiv  onViewportEnter={() => updateCSSVariable("bauhaus")}
        onViewportLeave={() => updateCSSVariable("footer")} >
      <ScrollDiv ref={target} >
        <Hero target={target} />
        <CoverText target={target} />
      </ScrollDiv>
      </ColorChangeDiv>
      <Table />
      <ColorChangeDiv
        onViewportEnter={() => updateCSSVariable("footer")}
        onViewportLeave={() => updateCSSVariable("bauhaus")}
      >
        <Footer />
      </ColorChangeDiv>
    </Frame>
  );
}

export default Services;
