import Hero from "./Hero";
import SayHi from "../../../componenets/SayHi";
import styled from "styled-components";
import { motion } from "motion/react";
import CoverText from "./CoverText";
import Table from "./Table";

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

function Services() {
  const updateCSSVariable = () => {
    document.documentElement.style.setProperty("--bg", "var(--bh-light)");
    document.documentElement.style.setProperty("--fg", "var(--brutal-dark)");
  };
  return (
    <Frame onViewportEnter={() => updateCSSVariable()}>
      <SayHi />
      <ScrollDiv>
      <Hero />
      <CoverText />
      </ScrollDiv>
      <Table />
    </Frame>
  );
}

export default Services;
