import Hero from "./Hero";
import styled from "styled-components";
import { motion } from "motion/react";
import CoverText from "./CoverText";
import Table from "./Table";
import Footer from "../../componenets/Footer";
import { useRef } from "react";
import NewHero from "./NewHero";

const Frame = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const ScrollDiv = styled.div`
  width: 100%;
  height: calc((100lvh - 75px) * 5);
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
  position: relative;
`;

function Services() {
  const updateCSSVariable = (value: string) => {
    if (value === "footer") {
      document.documentElement.style.setProperty("--fg", "var(--bh-red)");
      document.documentElement.style.setProperty("--bg", "var(--bh-light");
      document.documentElement.style.setProperty("--fg-mb", "var(--bh-mb-red)");
    }
    if (value === "bauhaus") {
      document.documentElement.style.setProperty("--bg", "var(--bh-light)");
      document.documentElement.style.setProperty("--fg", "var(--brutal-dark)");
      document.documentElement.style.setProperty(
        "--fg-mb",
        "var(--bh-mb-light)"
      );
    }
  };

  const target = useRef(null);
  return (
    <Frame onViewportEnter={() => updateCSSVariable("bauhaus")}>
      <NewHero />

      {/* <ScrollDiv ref={target}>
          <CoverText target={target} />
        </ScrollDiv> */}
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
