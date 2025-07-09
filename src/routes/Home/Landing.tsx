import { motion, useScroll, useTransform } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

const Grid = styled.div`
  flex-shrink: 0;
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
  z-index: 1;
  pointer-events: none;
  background: var(--bg);
  mix-blend-mode: difference;
  overflow: hidden;
`;
const AnimationContainer = styled.div`
  position: absolute;
  height: 200px;
  width: 100%;
  top: 50px;
  z-index: 3;
  mix-blend-mode: difference;
  @media screen and (max-width: 900px) {
    rotate: -90deg;
    transform-origin: calc(100% - 190px) 50%;
  }
`;
const BigCircle = styled(motion.div)`
  position: absolute;
  top: 0px;
  right: 40px;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: var(--brutal-mb-light);
  mix-blend-mode: difference;
  @media screen and (max-width: 769px) {
    width: 100px;
    height: 100px;
    top: 140px;
  }
`;
const HalfCircle = styled(motion.div)`
  position: absolute;
  top: 100px;
  right: 40px;
  width: 200px;
  height: 10px;
  border-bottom-right-radius: 200px;
  border-bottom-left-radius: 200px;
  background-color: var(--brutal-mb-light);
  mix-blend-mode: difference;
  @media screen and (max-width: 769px) {
    width: 100px;
    height: 5px;
    top: 190px;
  }
`;
const SmallCircle = styled(motion.div)`
  position: absolute;
  top: 100px;
  right: 40px;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: var(--brutal-mb-light);
  mix-blend-mode: difference;
  @media screen and (max-width: 769px) {
    width: 10px;
    height: 10px;
    top: 190px;
  }
`;

const Blackout = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: calc(100svh - 75px);
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(20px);
  z-index: 1;
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
  mix-blend-mode: difference;
  @media screen and (max-width: 768px){
      border-bottom-right-radius: 20px;
  }`;
const TopRight = styled(motion.div)`
  grid-area: TopRight;
  border-bottom-left-radius: 40px;
  border-bottom: 0.5px solid var(--fg);
  box-sizing: border-box;
  background-color: var(--bg);
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px;
  z-index: 3;
  transition: border var(--color-transition) ease-in-out;
  transition: background-color var(--color-transition) ease-in-out;
  mix-blend-mode: difference;
  @media screen and (max-width: 768px){
  border-bottom-left-radius: 20px;
  }`;
const BotLeft = styled(motion.div)`
  grid-area: BotLeft;
  border-top-right-radius: 40px;
  border-top: 0.5px solid var(--fg);
  border-right: 0.5px solid var(--fg);
  border-bottom: 0.5px solid var(--fg);
  box-sizing: border-box;
  background-color: var(--bg);
  z-index: 2;
  transition: border var(--color-transition) ease-in-out;
  transition: background-color var(--color-transition) ease-in-out;
  mix-blend-mode: difference;
  @media screen and (max-width: 768px){
  border-top-right-radius: 20px;
  }`;
const BotRight = styled(motion.div)`
  grid-area: BotRight;
  border-top-left-radius: 40px;
  border-bottom: 0.5px solid var(--fg);
  box-sizing: border-box;
  background-color: var(--bg);
  display: flex;
  padding: 40px;
  box-sizing: border-box;
  justify-content: flex-end;
  z-index: 2;
  transition: border var(--color-transition) ease-in-out;
  transition: background-color var(--color-transition) ease-in-out;
  mix-blend-mode: difference;
  @media screen and (max-height: 500px) {
    padding: 20px;
  }
  @media screen and (max-width: 768px){
  border-top-left-radius: 20px;
  }`;
const TextContainer = styled.div`
  display: flex;
  max-width: 900px;
  height: min-content;
`;

interface Props {
  targetRef: React.RefObject<HTMLDivElement>;
}
function Landing({ targetRef }: Props) {
  const isMobileView = useMediaQuery("(max-width: 900px)");

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
    layoutEffect: false,
  });

  const blackOutOpacity = useTransform(scrollYProgress, [0.2, 0.3], [1, 0]);
  return (
    <>
      <Blackout style={{ opacity: blackOutOpacity }} />
      <Grid ref={ref}>
        <TopLeft></TopLeft>
        <TopRight>
          <h1 className="page-title">s-double-j</h1>
          <div style={{display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap"}}>
            <p className="page-subtitle">Manchester based</p>
            <p className="page-subtitle-brackets">( web designer )</p>
          </div>

          <AnimationContainer>
            <BigCircle
              animate={{
                x: isMobileView
                  ? ["0vh", "-60vh", "0vh"]
                  : ["0vw", "-60vw", "0vw"],
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
                x: isMobileView
                  ? ["0vh", "-60vh", "0vh"]
                  : ["0vw", "-60vw", "0vw"],
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
                x: isMobileView
                  ? ["0vh", "-70vh", "0vh"]
                  : ["0vw", "-70vw", "0vw"],
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
          </AnimationContainer>
        </TopRight>
        <BotLeft></BotLeft>
        <BotRight>
          <TextContainer>
            <h3 className="justify">
              I use the power of story, design & the latest technologies to
              transform your concept into a website that will turn heads.
            </h3>
          </TextContainer>
        </BotRight>
      </Grid>
    </>
  );
}

export default Landing;
