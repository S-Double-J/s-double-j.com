import { MotionValue } from "motion/react";
import { motion, useTransform } from "motion/react";
import styled from "styled-components";
import { SiTicktick } from "react-icons/si";
import { ImCross } from "react-icons/im";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { IoTimeSharp } from "react-icons/io5";
import SayHi from "../../componenets/SayHi";
import React, { useState } from "react";
import Slider from "./Slider";

const Grid = styled(motion.div)`
  height: calc(100svh - 235px);
  max-height: 800px;
  width: 100%;
  max-width: 1400px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 40px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:
    "header header header header header header header header header art art art"
    "text text text text text text text text text art art art"
    "text text text text text text text text text art art art"
    "text text text text text text text text text art art art"
    "text text text text text text text text text art art art"
    "text text text text text text text text text art art art";
  overflow: hidden;
  position: relative;
  top: -10%;
  pointer-events: all;
  z-index: 201;
  gap: 10px;
  @media screen and (max-aspect-ratio: 1/1),
    screen and (max-height: 600px),
    screen and (min-aspect-ratio: 1/2) and (max-width: 800px),
    screen and (max-width: 1200px) and (max-height: 900px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-template-areas:
      "header"
      "button"
      "text"
      "text"
      "text"
      "text"
      "text"
      "text";
    @media screen and (max-width: 500px) {
      padding: 10px;
    }
  }
  @media screen and (max-height: 800px), screen and (max-width: 500px) {
    height: calc(100svh - 155px);
  }
`;
const Mask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  @media screen and (max-aspect-ratio: 1/1),
    screen and (max-height: 600px),
    screen and (min-aspect-ratio: 1/2) and (max-width: 800px) {
    opacity: 0.89;
  }
`;
const Header = styled.h2`
  grid-area: header;
  font-size: 64px;
  text-transform: uppercase;
  line-height: 54px;
  z-index: 1;
  width: min-content;
  margin-left: 10px;
  margin-top: 10px;
  @media screen and (max-width: 600px) and (max-height: 900px) {
    font-size: 42px;
    line-height: 34px;
  }
`;

const ArtFrame = styled.div`
  grid-area: art;
  display: flex;
  justify-content: end;
  position: relative;
  @media screen and (max-aspect-ratio: 1/1),
    screen and (max-height: 600px),
    screen and (min-aspect-ratio: 1/2) and (max-width: 800px),
    screen and (max-width: 1200px) and (max-height: 900px) {
    position: absolute;
    top: 20px;
    right: 5px;
    width: 100%;
    height: 90%;
  }
`;
const Art = styled.img`
  height: 100%;
`;
const Text = styled.div`
  grid-area: text;
  display: flex;
  height: 100%;
  transition: 0.4s ease;
  padding: 10px;
  box-sizing: border-box;
  @media screen and (max-aspect-ratio: 1/1) and (max-width: 800px),
    screen and (max-width: 1200px) and (max-height: 900px) {
    width: 200%;
    gap: 30px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
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
  width: 50%;
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
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

function Card({
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
  progress,
  range,
  targetScale,
}: Props) {
  const scale = useTransform(progress, range, [1, targetScale]);
  type TabPosition = {
  left: number;
  width: number;
  desc: boolean
};
  const [tabPosition, setTabPosition] = useState<TabPosition>({
    left: 0,
    width: 0,
    desc: false
  });

  return (
    <Grid
      id={id}
      style={{
        backgroundColor: gridBgColor,
        top: `calc(-5% + ${i * 50}px)`,
        scale,
      }}
    >
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
    </Grid>
  );
}

export default Card;
