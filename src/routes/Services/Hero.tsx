import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Grid = styled(motion.div)`
  position: sticky;
  flex-shrink: 0;
  top: 0;
  left: 0;
  display: grid;
  width: 100%;
  height: calc(100svh - 75px);
  background-color: var(--bg);
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
`;

const TopLeft = styled.div`
  grid-area: TopLeft;
  background-color: var(--bg);
  transition: background-color var(--color-transition) ease-in-out;
`;
const TopRight = styled.div`
  grid-area: TopRight;
  display: flex;
  flex-direction: row;
  padding: 40px;
  align-content: flex-start;
  justify-content: end;
  flex-wrap: wrap;
  position: relative;
  box-sizing: border-box;
  background-color: var(--bg);
  transition: background-color var(--color-transition) ease-in-out;
`;
const BotLeft = styled.div`
  grid-area: BotLeft;
  background-color: var(--bg);
  transition: background-color var(--color-transition) ease-in-out;
`;
const BotRight = styled.div`
  grid-area: BotRight;
  display: flex;
  padding: 40px;
  box-sizing: border-box;
  justify-content: flex-end;
  background-color: var(--bg);
  transition: background-color var(--color-transition) ease-in-out;
`;
const TextContainer = styled.div`
  display: flex;
  max-width: 900px;
  height: min-content;
`;
const Circle = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: var(--bh-red);
`;

interface Props {
  container: React.RefObject<HTMLDivElement>;
  target: React.RefObject<HTMLDivElement>;
}
function Hero({ container, target }: Props) {
  const [arr, setArr] = useState<string[]>([]);

  useEffect(() => {
    const handleResize = () => {
      let artWidthVal = Math.floor(
        ((document
          .getElementById("top-right-serv-hero")
          ?.getBoundingClientRect().width! -
          80) *
          2) /
          200
      );
      if (artWidthVal % 2 !== 0) {
        artWidthVal -= 1;
      }
      setArr(Array(artWidthVal).fill(".")); // Update state
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set the array

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    container: container,
    target: target,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0.25, 0.3], [1, 0]);

  return (
    <Grid style={{ opacity }}>
      <TopLeft></TopLeft>
      <TopRight id="top-right-serv-hero">
        <h1 className="page-title">services</h1>
        {arr.map((_, i) => {
          const target = i < arr.length / 2 ? ["0%", "-100%"] : ["0%", "100%"];
          if (i === arr.length / 2 - 1) {
            return (
              <Circle
                key={i}
                style={{ backgroundColor: "var(--brutal-dark" }}
              />
            );
          }
          return (
            <C
              i={i}
              progress={scrollYProgress}
              target={target}
              largestIndex={arr.length}
            />
          );
        })}
      </TopRight>
      <BotLeft></BotLeft>
      <BotRight>
        <TextContainer>
          <h3 className="justify">
            Every project begins with a conversation. Together we’ll discover
            your goals and expectations, and formulate the best plan for your
            vision.
          </h3>
        </TextContainer>
      </BotRight>
    </Grid>
  );
}

const getDynamicRange = (i: number, largestIndex: number) => {
  const totalSteps = Math.floor(largestIndex / 2);
  const stepSize = 0.5 / totalSteps;
  let start: number = 0;
  if (i < totalSteps) {
    start = stepSize * i;
  }
  if (i >= totalSteps) {
    start = stepSize * (i - totalSteps);
  }
  return [start, start + 0.3];
};

interface circleProps {
  i: number;
  progress: MotionValue;
  target: string[];
  largestIndex: number;
}
const C = ({ i, progress, target, largestIndex }: circleProps) => {
  const range = getDynamicRange(i, largestIndex);
  const y = useTransform(progress, range, target);
  return <Circle key={i} style={{ y }} />;
};

export default Hero;
