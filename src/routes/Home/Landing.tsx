import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import styled from "styled-components";

const Grid = styled.div`
  position: fixed;
  flex-shrink: 0;
  top: 75;
  left: 0;
  display: grid;
  width: 100%;
  height: calc(100svh - 75px);
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:
    "TopLeft TopLeft TopRight TopRight TopRight TopRight TopRight TopRight TopRight TopRight TopRight TopRight"
    "TopLeft TopLeft TopRight TopRight TopRight TopRight TopRight TopRight TopRight TopRight TopRight TopRight"
    "TopLeft TopLeft TopRight TopRight TopRight TopRight TopRight TopRight TopRight TopRight TopRight TopRight"
    "TopLeft TopLeft TopRight TopRight TopRight TopRight TopRight TopRight TopRight TopRight TopRight TopRight"
    "BotLeft BotLeft BotRight BotRight BotRight BotRight BotRight BotRight BotRight BotRight BotRight BotRight"
    "BotLeft BotLeft BotRight BotRight BotRight BotRight BotRight BotRight BotRight BotRight BotRight BotRight";
  z-index: 20;
  pointer-events: none;
`;
const Blackout = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(50px);
`;
const TopLeft = styled(motion.div)`
  grid-area: TopLeft;
  border-bottom-right-radius: 40px;
  border-right: 0.5px solid var(--fg);
  box-sizing: border-box;
  background-color: var(--bg);
  z-index: 2;
  border-color: var(--fg);
  transition: border var(--color-transition) ease-in-out;
  transition: background-color var(--color-transition) ease-in-out;
`;
const TopRight = styled(motion.div)`
  grid-area: TopRight;
  border-bottom-left-radius: 40px;
  border-bottom: 0.5px solid var(--fg);
  box-sizing: border-box;
  background-color: var(--bg);
  position: relative;
  z-index: 2;
  transition: border var(--color-transition) ease-in-out;
  transition: background-color var(--color-transition) ease-in-out;
`;
const BotLeft = styled(motion.div)`
  grid-area: BotLeft;
  border-top-right-radius: 40px;
  border-top: 0.5px solid var(--fg);
  box-sizing: border-box;
  background-color: var(--bg);
  z-index: 2;
  transition: border var(--color-transition) ease-in-out;
  transition: background-color var(--color-transition) ease-in-out;
`;
const BotRight = styled(motion.div)`
  grid-area: BotRight;
  border-top-left-radius: 40px;
  border-left: 0.5px solid var(--fg);
  box-sizing: border-box;
  background-color: var(--bg);
  display: flex;
  padding: 40px;
  box-sizing: border-box;
  justify-content: flex-end;
  z-index: 2;
  transition: border var(--color-transition) ease-in-out;
  transition: background-color var(--color-transition) ease-in-out;
`;
const TextContainer = styled.div`
  display: flex;
  max-width: 900px;
  height: min-content;
`;
const BigCircle = styled(motion.div)`
  position: absolute;
  top: 40px;
  right: 40px;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: var(--brutal-mb-light);
  mix-blend-mode: difference;
`;
const HalfCircle = styled(motion.div)`
  position: absolute;
  top: 140px;
  right: 40px;
  width: 200px;
  height: 10px;
  border-bottom-right-radius: 200px;
  border-bottom-left-radius: 200px;
  background-color: var(--brutal-mb-light);
  mix-blend-mode: difference;
`;
const SmallCircle = styled(motion.div)`
  position: absolute;
  top: 130px;
  right: 40px;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: var(--brutal-mb-light);
  mix-blend-mode: difference;
`;

interface Props {
  containerRef: React.RefObject<HTMLDivElement>;
  targetRef: React.RefObject<HTMLDivElement>;
}
function Landing({ containerRef, targetRef }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: targetRef,
    offset: ["start start", "end end"],
    layoutEffect: false,
  });
  const positive1 = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);
  const negative1 = useTransform(scrollYProgress, [0, 0.5], ["0%", "-100%"]);
  const positive2 = useTransform(scrollYProgress, [0.02, 0.5], ["0%", "100%"]);
  const positive3 = useTransform(scrollYProgress, [0.06, 0.5], ["0%", "100%"]);
  const negative3 = useTransform(scrollYProgress, [0.06, 0.5], ["0%", "-100%"]);
  const negative4 = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "-100%"]);
  const blackOutOpacity = useTransform(scrollYProgress, [0.15, 0.3], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.25], [1, 0]);
  return (
    <Grid ref={ref}>
      <Blackout style={{ opacity: blackOutOpacity }} />
      <TopLeft style={{ opacity, x: negative4, y: negative4 }}></TopLeft>
      <TopRight style={{ opacity, x: positive1, y: negative1 }}>
        <h1 className="page-title">s-double-j</h1>
        <BigCircle
          animate={{
            x: ["0vw", "-60vw", "0vw"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            delay: 0.5,
          }}
        />
        <HalfCircle
          animate={{
            x: ["0vw", "-60vw", "0vw"],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            delay: 3.5,
            rotate: {
              duration: 8,
              repeat: Infinity,
              times: [0, 0.5, 1],
              delay: 3.5,
              ease: "linear",
            },
          }}
        />
        <SmallCircle
          animate={{
            x: ["0vw", "-70vw", "0vw"],
            scale: ["100%", "50%", "100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            delay: 5.5,
          }}
        />
      </TopRight>
      <BotLeft style={{ opacity, x: negative3, y: positive3 }}></BotLeft>
      <BotRight style={{ opacity, x: positive2, y: positive2 }}>
        <TextContainer>
          <h3 className="justify">
            I use the power of story, design & the latest technologies to
            transform your concept into a website that will turn heads.
          </h3>
        </TextContainer>
      </BotRight>
    </Grid>
  );
}

export default Landing;
