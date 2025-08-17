import styled from "styled-components";
import { motion } from "motion/react";
import Footer from "../../componenets/Footer";
import Table from "./Table";

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
  position: relative;
`;

function Services() {
  const updateCSSVariable = (value: string) => {
    if (value === "footer") {
      document.documentElement.style.setProperty("--fg", "var(--brutal-dark)");
      document.documentElement.style.setProperty("--bg", "var(--brutal-light");
      document.documentElement.style.setProperty("--fg-mb", "var(--brutal-mb-light)");
    }
    if (value === "bauhaus") {
      document.documentElement.style.setProperty("--bg", "var(--brutal-light)");
      document.documentElement.style.setProperty("--fg", "var(--brutal-dark)");
      document.documentElement.style.setProperty(
        "--fg-mb",
        "var(--brutal-mb-light)"
      );
    }
  };
  return (
    <Frame onViewportEnter={() => updateCSSVariable("bauhaus")}> 
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
