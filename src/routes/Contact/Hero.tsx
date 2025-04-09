import { motion } from "motion/react";
import styled from "styled-components";
import SayHi from "../../componenets/SayHi";

const Grid = styled(motion.div)`
  position: relative;
  flex-shrink: 0;
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
  & > h1 {
    mix-blend-mode: normal;
    color: var(--fg)
  }
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
  justify-content: center;
  max-width: 900px;
  height: min-content;
  flex: 1 0 0;
`;
const Eye = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-45deg);
  border-radius: 0px 500px;
  background-color: var(--absurd-light);
  width: 300px;
  height: 300px;
  position: absolute;
  right: -10px;
  top: -10px;
  overflow: hidden;
`;
const Circle = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: var(--brutal-dark);
`;

function Hero() {
  return (
    <Grid>
      <SayHi center="true" />

      <TopLeft></TopLeft>
      <TopRight id="top-right-serv-hero">
        <h1 className="page-title">contact</h1>
        <Eye>
          <Circle />
        </Eye>
      </TopRight>
      <BotLeft></BotLeft>
      <BotRight>
        <TextContainer>
          <h3 className="justify">What's on your mind?</h3>
        </TextContainer>
      </BotRight>
    </Grid>
  );
}

export default Hero;
