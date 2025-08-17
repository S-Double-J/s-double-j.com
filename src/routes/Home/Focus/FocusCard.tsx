import { motion } from "motion/react";
import { useState } from "react";
import styled from "styled-components";

const Card = styled(motion.div)`
  border-bottom: 1px solid var(--fg);
  transition: border var(--color-transition);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 80px;
`;
const Heading = styled(motion.h3)`
  font-size: 24px;
  letter-spacing: 1px;
  transition: var(--color-transition);
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
const Paragraph = styled(motion.div)`
  text-align: justify;
  overflow: hidden;
`;
const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: end;
`;
const OpenButton = styled.button`
  position: absolute;
  top: 55px;
  left: -10px;
  border: none;
  background: none;
  display: flex;
  padding: 10px;
`;
const Line180 = styled(motion.div)`
  height: 1px;
  width: 11px;
  background: var(--fg);
  position: absolute;
  top: 50%;
  left: 50%;

`;
const Line90 = styled(motion.div)`
  height: 1px;
  width: 11px;
  background: var(--fg);
  position: absolute;
  top: 50%;
  left: 50%;

`;
interface Props {
  heading: string;
  paragraph: string;
  i: number;
}

export default function FocusCard({ heading, paragraph, i }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const Pvariants = {
    closed: { height: 0, transition: { duration: 0.25, ease: "easeInOut" } },
    open: {
      height: "min-content",
      transition: { duration: 0.25, ease: "easeInOut" },
    },
  };
  const Cvariants = {
    closed: {
      padding: "8px 40px 0px 40px",
      gap: "0px",
      transition: { duration: 0.25, ease: "easeInOut" },
    },
    open: {
      padding: "8px 40px",
      gap: "16px",
      transition: { duration: 0.25, ease: "easeInOut" },
    },
  };
  const Line180Variants = {
    closed: {
      rotate: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    open: {
      rotate: 180,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };
  const Line90Variants = {
    closed: {
      rotate: 90,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    open: {
      rotate: 360,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card key={i} variants={Cvariants} animate={isOpen ? "open" : "closed"}>
      <OpenButton onClick={handleClick}>
        <Line180  variants={Line180Variants} animate={isOpen ? "open" : "closed"}/>
        <Line90  variants={Line90Variants} animate={isOpen ? "open" : "closed"}/>
      </OpenButton>
      <TopDiv>
        <Heading>{heading}</Heading>
        <p style={{ lineHeight: "20px" }}>{i + 1}</p>
      </TopDiv>
      <Paragraph variants={Pvariants} animate={isOpen ? "open" : "closed"}>
        <p>{paragraph}</p>
      </Paragraph>
    </Card>
  );
}
