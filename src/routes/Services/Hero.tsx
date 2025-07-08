import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Grid = styled(motion.div)`
  position: sticky;
  flex-shrink: 0;
  top: 75px;
  left: 0;
  display: grid;
  width: 100%;
  height: calc(100lvh - 75px);
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
  padding: 40px;
  display: flex;
  justify-content: end;

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
  align-items: flex-end;
  background-color: var(--bg);
  transition: background-color var(--color-transition) ease-in-out;
`;
const TextContainer = styled.div`
  display: flex;
  max-width: 900px;
  height: min-content;
`;
const CircleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: end;
  flex-wrap: wrap;
  position: relative;
  @media screen and (max-aspect-ratio: 1/1) {
    max-width: 210px;
  }
`;
const Circle = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: var(--bh-red);
  @media screen and (max-width: 900px) {
    width: 100px;
    height: 100px;
  }
`;

interface Props {
  target: React.RefObject<HTMLDivElement>;
}
function Hero({ target }: Props) {
  const [arr, setArr] = useState<string[]>([]);

  const [columnLayout, setColumnLayout] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const shouldUseColumnLayout = window.innerWidth < window.innerHeight;
      setColumnLayout(shouldUseColumnLayout);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      let artWidthVal = columnLayout
        ? Math.floor(
            ((document
              .getElementById("top-right-serv-hero")
              ?.getBoundingClientRect().height! -
              80) *
              2) /
              100
          )
        : Math.floor(
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
  }, [columnLayout]);

  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start start", "end end"],
    layoutEffect: false,
  });

  const opacity = useTransform(scrollYProgress, [0.15, 0.35], [1, 0]);

  return (
    <Grid style={{ opacity }}>
      <TopLeft></TopLeft>
      <TopRight id="top-right-serv-hero">
        <h1 className="page-title">services</h1>
        <CircleContainer>
          {arr.map((_, i) => {
            const highlight = columnLayout ? 1 : arr.length / 2 - 1;
            const target = columnLayout
              ? ["0%", "100%"]
              : i < arr.length / 2
              ? ["0%", "-100%"]
              : ["0%", "100%"];
            if (i === highlight) {
              return (
                <Circle
                  key={i}
                  id="serv-circle"
                  style={{ backgroundColor: "var(--brutal-dark" }}
                />
              );
            }
            return (
              <C
                i={i}
                key={i}
                progress={scrollYProgress}
                target={target}
                largestIndex={arr.length}
                columnLayout={columnLayout}
              />
            );
          })}
        </CircleContainer>
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

const getDynamicRange = (
  i: number,
  largestIndex: number,
  columnLayout: boolean
) => {
  if (columnLayout) {
    const totalSteps = Math.floor(largestIndex / 2);
    const stepSize = 0.3 / (totalSteps - 1);
    const pairIndex = Math.floor((largestIndex - 1 - i) / 2);
    const start = stepSize * pairIndex;
    return [start, start + 0.5];
  }
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
  columnLayout: boolean;
}
const C = ({
  i,
  progress,
  target,
  largestIndex,
  columnLayout,
}: circleProps) => {
  const range = getDynamicRange(i, largestIndex, columnLayout);
  const y = useTransform(progress, range, target);

  return <Circle key={i} style={{ y }} />;
};

export default Hero;
