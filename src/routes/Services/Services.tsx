import styled from "styled-components";
import { motion } from "motion/react";
import Table from "./Table";
import Footer from "../../componenets/Footer";
import NewHero from "./NewHero";

const Frame = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
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

  return (
    <Frame onViewportEnter={() => updateCSSVariable("bauhaus")}>
      <NewHero />
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
