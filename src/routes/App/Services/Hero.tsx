import { useEffect, useState } from "react";
import styled from "styled-components";

const Grid = styled.div`
  position: sticky;
  flex-shrink: 0;
  top: 0;
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
`;

const TopLeft = styled.div`
  grid-area: TopLeft;
  background-color: var(--bg);
  transition: background-color var(--color-transition) ease-in-out;
`;
const TopRight = styled.div`
  grid-area: TopRight;
  display: flex;
  flex-direction: row-reverse;
  padding: 40px;
  align-content: flex-start;
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
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: var(--bh-red);
`;
function Hero() {
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

  return (
    <Grid>
      <TopLeft></TopLeft>
      <TopRight id="top-right-serv-hero">
        <h1 className="page-title">services</h1>
        {arr.map((_, i) => {
          if (i === 0) {
            return <Circle style={{ backgroundColor: "var(--brutal-dark" }} />;
          }
          return <Circle />;
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

export default Hero;
