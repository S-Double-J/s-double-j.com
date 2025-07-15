import { useState } from "react";
import styled from "styled-components";
import Slider from "./Slider";
import { SiTicktick } from "react-icons/si";
import { ImCross } from "react-icons/im";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { IoTimeSharp } from "react-icons/io5";
import SayHi from "../../componenets/SayHi";
import cardData from "./CardData";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 201;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  min-height: 50px;
  width: 100%;
  overflow: hidden;
  gap: 30px;
  padding: 10px;
  box-sizing: border-box;
`;

const Mask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0.89;
`;
const Header = styled.h2`
  font-size: 32px;
  text-transform: uppercase;
  line-height: 24px;
  z-index: 1;
  width: min-content;
  margin-left: 10px;
  margin-top: 10px;
`;

const ArtFrame = styled.div`
  display: flex;
  justify-content: end;
  position: absolute;
  top: 20px;
  right: 5px;
  width: 100%;
  height: 90%;
`;
const Art = styled.img``;
const Text = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1;
  grid-template-areas: "details desc";
  height: 100%;
  transition: 0.4s ease;
  padding: 10px;
  box-sizing: border-box;
  width: 200%;
  gap: 40px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: justify;
  z-index: 1;
  gap: 12px;
  pointer-events: all;
  overflow-y: auto;
  & > :first-child {
    margin-top: auto !important;
    text-align: left;
  }
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  z-index: 1;
  pointer-events: all;
  & > :first-child {
    margin-top: auto !important;
  }
`;
const Tick = styled(SiTicktick)`
  color: var(--tick-green);
  height: 10px;
  width: 10px;
  background-color: white;
  padding: 2px;
  border-radius: 999px;
  margin-top: 3px;
  margin-bottom: -3px;
`;
const Cross = styled(ImCross)`
  color: var(--cross-red);
  height: 10px;
  width: 10px;
  background-color: white;
  padding: 2px;
  border-radius: 999px;
  margin-top: 3px;
  margin-bottom: -3px;
`;
const Price = styled(RiMoneyPoundCircleFill)`
  width: 20px;
  height: 20px;
`;
const Time = styled(IoTimeSharp)`
  width: 20px;
  height: 20px;
`;
const InterestedSpan = styled.span`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
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
interface Props {
  id: string;
  title: string;
  price: string;
  estimate: string;
  bPoints1: string[];
  bPoints2: string[];
  bPoints3: string[];
  tagLine: string;
  desc: string[];
  artSrc: string;
  children: React.ReactNode;
  gridBgColor: string;
  textColor: string;
  i: number;
}
function Item({
  id,
  title,
  price,
  estimate,
  bPoints1,
  bPoints2,
  bPoints3,
  tagLine,
  desc,
  artSrc,
  children,
  gridBgColor,
  textColor,
  i,
}: Props) {
  type TabPosition = {
    left: number;
    width: number;
    desc: boolean;
  };
  const [tabPosition, setTabPosition] = useState<TabPosition>({
    left: 0,
    width: 0,
    desc: false,
  });

  return (
    <Section id={id} style={{ backgroundColor: gridBgColor }}>
      <Mask style={{ backgroundColor: gridBgColor }} />
      <Header style={{ color: textColor }}>{title}</Header>
      <ArtFrame>
        {children}
        <Art alt="graphic" src={artSrc} />
      </ArtFrame>
      <Slider tabPosition={tabPosition} setTabPosition={setTabPosition} />
      <Text
        style={
          tabPosition.desc
            ? { transform: "translateX(-50%)", zIndex: 1 }
            : { zIndex: 1 }
        }
      >
        <Details>
          <div style={{ paddingBottom: 12 }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                paddingLeft: 6,
              }}
            >
              <Price style={{ fill: textColor }} />
              <p style={{ color: textColor, zIndex: 1 }}>
                <b>{price}</b>
              </p>
            </span>
          </div>
          <div style={{ paddingBottom: 12 }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                paddingLeft: 6,
              }}
            >
              <Time style={{ fill: textColor }} />
              <p style={{ color: textColor, zIndex: 1 }}>
                <b>{estimate}</b>
                <i> (estimated)</i>
              </p>
            </span>
          </div>
          <div style={{ paddingBottom: 12 }}>
            <p style={{ color: textColor, paddingBottom: 12 }}>
              <b>What's included:</b>
            </p>

            {bPoints1.map((t, i) => {
              let bold = "";
              let notBold = "";
              let words = t.split(" ");
              let splitIndex = 0;
              words.map((w, i) => {
                if (w === "–") {
                  splitIndex = i;
                }
              });
              bold = words.slice(0, splitIndex).join(" ");
              notBold = words.slice(splitIndex).join(" ");
              return (
                <p key={i} style={{ color: textColor, paddingLeft: 12 }}>
                  <span>
                    <Tick /> <b>{bold}</b> {notBold}
                  </span>
                </p>
              );
            })}
          </div>
          <div>
            <p style={{ color: textColor, paddingBottom: 12 }}>
              <b>Not part of the package:</b>
            </p>

            {bPoints2.map((t, i) => {
              let bold = "";
              let notBold = "";
              let words = t.split(" ");
              let splitIndex = 0;
              words.map((w, i) => {
                if (w === "–") {
                  splitIndex = i;
                }
              });
              bold = words.slice(0, splitIndex).join(" ");
              notBold = words.slice(splitIndex).join(" ");
              return (
                <p key={i} style={{ color: textColor, paddingLeft: 12 }}>
                  <span>
                    <Cross /> <b>{bold}</b> {notBold}
                  </span>
                </p>
              );
            })}
          </div>
          <div>
            <p style={{ color: textColor, paddingTop: 12 }}>
              <b>Perfect for:</b>
            </p>
            <ul key={i} style={{ color: textColor, paddingLeft: 28 }}>
              {bPoints3.map((t, i) => {
                return (
                  <li style={{ color: textColor, zIndex: 1 }} key={i}>
                    {t}
                  </li>
                );
              })}
            </ul>
          </div>
        </Details>
        <Description>
          <p style={{ color: textColor, zIndex: 1 }} className="large">
            <b>{tagLine}</b>
          </p>
          {desc.map((t, i) => (
            <p key={i} style={{ color: textColor, zIndex: 1 }}>
              {t}
            </p>
          ))}
          <InterestedSpan>
            <p style={{ color: textColor, zIndex: 1 }}>Interested?</p>{" "}
            <SayHi center={false} card={true} />
          </InterestedSpan>
        </Description>
      </Text>
    </Section>
  );
}

function Table() {
  return (
    <Container>
      {cardData.map((card, i) => {
        if (card.id === "CW") {
          return (
            <Item
              key={card.id}
              id={card.id}
              title={card.title}
              price={card.price}
              estimate={card.estimate}
              bPoints1={card.bPoints1}
              bPoints2={card.bPoints2}
              bPoints3={card.bPoints3}
              tagLine={card.tagLine}
              desc={card.desc}
              artSrc={card.artSrc}
              gridBgColor={"var(--brutal-light)"}
              textColor={card.textColor}
              i={i}
            >
              <ArtText
                style={{
                  color: "var(--bh-red)",
                  background: "var(--brutal-light)",
                  padding: 20,
                  top: -20
                }}
              >
                FORM <br />
                FOLLOWS <br />
                FUNCTION
              </ArtText>
            </Item>
          );
        }
        if (card.id === "CP") {
          return (
            <Item
              key={card.id}
              id={card.id}
              title={card.title}
              price={card.price}
              estimate={card.estimate}
              bPoints1={card.bPoints1}
              bPoints2={card.bPoints2}
              bPoints3={card.bPoints3}
              tagLine={card.tagLine}
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
            </Item>
          );
        }
        if (card.id === "CC") {
          return (
            <Item
              key={card.id}
              id={card.id}
              title={card.title}
              price={card.price}
              estimate={card.estimate}
              bPoints1={card.bPoints1}
              bPoints2={card.bPoints2}
              bPoints3={card.bPoints3}
              tagLine={card.tagLine}
              desc={card.desc}
              artSrc={card.artSrc}
              gridBgColor={card.gridBgColor}
              textColor={card.textColor}
              i={i}
            >
              <ArtText />
            </Item>
          );
        }
      })}
    </Container>
  );
}

export default Table;
