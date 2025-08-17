import { motion, useScroll, useTransform } from "motion/react";
import styled from "styled-components";
import FocusCard from "./FocusCard";
import { data } from "./FocusCardData";

const Grid = styled.div`
  top: 75px;
  left: 0;
  flex-shrink: 0;
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 160px;
  @media screen and (max-width: 769px) {
    padding: 40px 20px;
  }
`;

const FocusBox = styled.div`
  grid-area: focus;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;
  flex: 1 0 0;
  align-self: stretch;
  margin-bottom: -100px;
  & > h2 {
    top: 10%;
    @media screen and (max-aspect-ratio: 1/1) {
      top: 0px;
      @media screen and (max-height: 800px) {
        font-size: 20px;
      }
    }
  }
`;
const Blur = styled(motion.div)`
  position: absolute;
  height: 50%;
  width: 110%;
  background: rgba(195, 187, 182, 0);
  backdrop-filter: blur(6px);
  z-index: 1;
  left: -5%;
`;
const FocusText = styled.span`
  z-index: 0;
  position: relative;
  & > p {
    font-size: calc(100vw / 8);
    font-weight: 700;
    @media screen and (max-aspect-ratio: 1/1) {
      font-size: 25vw;
    }
  }
`;
const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

interface Props {
  targetRef: React.RefObject<HTMLDivElement>;
}
function Focus({ targetRef }: Props) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    layoutEffect: false,
  });

  const height = useTransform(scrollYProgress, [0.1, 0.5], ["45%", "30%"]);

  return (
    <Grid>
      <FocusBox>
        <h2
          style={{
            fontFamily: "Xanh Mono",
            fontStyle: "italic",
            zIndex: 2,
          }}
        >
          MY
        </h2>
        <FocusText>
          <Blur style={{ height, top: "5%" }}></Blur>
          <p>FOCUS</p>
          <Blur style={{ height, bottom: 0 }}></Blur>
        </FocusText>
      </FocusBox>
      <CardBox>
        {data.map((card, i) => (
          <FocusCard
            heading={card.heading}
            paragraph={card.paragraph}
            i={i}
          />
        ))}
      </CardBox>
    </Grid>
  );
}

export default Focus;
