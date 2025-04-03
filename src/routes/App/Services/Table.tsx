import styled from "styled-components";
import Card from "./Card";
import cardData from "./CardData";

const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
function Table() {

  return (
    <Scroll>
      {cardData.map((card, i) => {
        if (card.id === "CW") {
          return (
            <Container>
              <Card
                key={card.id}
                title={card.title}
                bPoints={card.bPoints}
                desc={card.desc}
                artSrc={card.artSrc}
                gridBgColor={card.gridBgColor}
                textColor={card.textColor}
                i={i}
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
            <Container>
              <Card
                key={card.id}
                title={card.title}
                bPoints={card.bPoints}
                desc={card.desc}
                artSrc={card.artSrc}
                gridBgColor={card.gridBgColor}
                textColor={card.textColor}
                i={i}
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
            <Container>
              <Card
                key={card.id}
                title={card.title}
                bPoints={card.bPoints}
                desc={card.desc}
                artSrc={card.artSrc}
                gridBgColor={card.gridBgColor}
                textColor={card.textColor}
                i={i}
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
