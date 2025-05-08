import styled from "styled-components";
import Card from "./Card";
import cardData from "./CardData";
import { useEffect, useRef, useState } from "react";
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
  top: 75px;
`;
const ArtText = styled.h2`
  position: absolute;
  top: 0;
  right: 0;
  color: var(--bh-light);
  text-align: right;
  font-weight: 900;
  line-height: 34px;
  @media screen and (max-aspect-ratio: 1/1) and (max-width: 500px) {
    font-size: 28px;
    line-height: 26px;
    top: 20px;
    right: 20px;
  }
`;

function Table() {

    const [columnLayout, setColumnLayout] = useState<boolean>(false);
  
    useEffect(() => {
      const handleResize = () => {
        const shouldUseColumnLayout = window.innerWidth <= 1270;
        setColumnLayout(shouldUseColumnLayout);
      };
  
      handleResize();
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });

  return (
    <Scroll ref={target}>
      {cardData.map((card, i) => {
        const targetScale = 1 - (cardData.length - i) * 0.05;
        if (card.id === "CW") {
          return (
            <Container key={i} id="CW">
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
                range={[i * 0.33, 1]}
                targetScale={targetScale}
              >
                <ArtText
                  style={columnLayout ? {
                    color: card.textColor,
                    mixBlendMode: 'difference'
                  } : {
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
            <Container key={i} id="CP">
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
                range={[i * 0.33, 1]}
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
            <Container key={i} id="CC">
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
                range={[0, 0]}
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
