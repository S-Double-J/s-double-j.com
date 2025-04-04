import styled from "styled-components";
import Card from "./Card";
import cardData from "./CardData";
import React, { useRef } from "react";
import { useScroll } from "motion/react";

const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;
const Container = styled.div`
  height: calc(100svh - 75px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
`;
const ArtText = styled.h2`
  position: absolute;
  top: 0;
  right: 0;
  color: var(--bh-light);
  text-align: right;
  font-weight: 900;
  line-height: 34px;
`;
interface Props {
  container: React.RefObject<HTMLDivElement>;
}
function Table({ container }: Props) {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target: target,
    container: container,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });

  return (
    <Scroll ref={target}>
      {cardData.map((card, i) => {
        const targetScale = 1 - (cardData.length - i) * 0.05;
        if (card.id === "CW") {
          return (
            <Container key={i}>
              <Card
                key={card.id}
                title={card.title}
                bPoints={card.bPoints}
                desc={card.desc}
                artSrc={card.artSrc}
                gridBgColor={card.gridBgColor}
                textColor={card.textColor}
                i={i}
                progress={scrollYProgress}
                range={[(i * 0.33), 1]}
                targetScale={targetScale}
              >
                <ArtText
                  style={{
                    color: card.textColor,
                    textAlign: "left",
                    left: 0,
                  }}
                >
                  FORM <br />
                  FOLLOWS <br />
                  FUNCTION
                </ArtText>
              </Card>
            </Container>
          );
        }
        if (card.id === "CP") {
          return (
            <Container key={i}>
              <Card
                key={card.id}
                title={card.title}
                bPoints={card.bPoints}
                desc={card.desc}
                artSrc={card.artSrc}
                gridBgColor={card.gridBgColor}
                textColor={card.textColor}
                i={i}
                progress={scrollYProgress}
                range={[(i * 0.33), 1]}
                targetScale={targetScale}
              >
                <ArtText>
                  <s
                    style={{
                      textDecorationColor: "var(--absurd-red)",
                      textDecorationThickness: 8,
                    }}
                  >
                    DONT
                  </s>
                  <br />
                  STAND <br />
                  OUT
                </ArtText>
              </Card>
            </Container>
          );
        }
        if (card.id === "CC") {
          return (
            <Container key={i}>
              <Card
                key={card.id}
                title={card.title}
                bPoints={card.bPoints}
                desc={card.desc}
                artSrc={card.artSrc}
                gridBgColor={card.gridBgColor}
                textColor={card.textColor}
                i={i}
                progress={scrollYProgress}
                range={[0,0]}
                targetScale={1}
              >
                <ArtText />
              </Card>
            </Container>
          );
        }
      })}
    </Scroll>
  );
}

export default Table;
