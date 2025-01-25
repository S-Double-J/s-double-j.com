import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import charRandomizerByEl from "../../tools/charRandomizerByEl";
import { motion } from "motion/react";
import textSplitter from "../../tools/LineSplitter";
import { useOutletContext } from "react-router-dom";
import charRandNoState from "../../tools/charRandNoState";

const Frame = styled.section`
  display: flex;
  width: 100%;
  min-height: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  flex-wrap: wrap;
  padding: 40px;
  box-sizing: border-box;
`;
const Service = styled(motion.div)`
  display: flex;
  width: 350px;
  height: 350px;
  padding: 40px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
  border: 1px solid light-dark(var(--light-fg), var(--dark-fg));
  overflow: hidden;
`;
const TextDiv = styled.div`
  display: flex;
  gap: 0px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  text-align: justify;
`;
interface ContextType {
  complete: boolean;
  handleComplete: (bool: boolean) => void;
}

function HomeServices() {
  const CWInitial =
    "Sometimes you don’t need a website with all the techy trimmings and tiny designy details. Sometimes you just need to get online with a website that fulfils your business’s unique needs.";
  // const CWInitialArr = [
  //   "Sometimes you don’t need a",
  //   "website with all the techy",
  //   "trimmings and tiny designy",
  //   "details. Sometimes you just",
  //   "need to get online with a",
  //   "website that fulfils your",
  //   "business’s unique needs.",
  // ];
  // const TestArr1 = ["test"];
  // const TestArr2 = ["also a test"];
  const CWHover =
    "Whether you’re a small business, a startup, or an independent service provider, whether you need marketing, a product or company website, a portfolio, an e-store, or just a simple landing page, I’m here to help you find your perfect home on the net. We’ll work together through the process and find the tangible results you’re looking for.";
  // const CWHoverArr = [
  //   "Whether you’re a small",
  //   "business, a startup, or an",
  //   "independent service provider,",
  //   "whether you need marketing, a",
  //   "product or company website, a",
  //   "portfolio, an e-store, or just",
  //   "a simple landing page, I’m here",
  //   "to help you find your perfect",
  //   "home on the net. We’ll work",
  //   "together through the process",
  //   "and find the tangible results",
  //   "you’re looking for.",
  // ];
  // const CDEInitial =
  //   "Do you need a state of the art website? Sweet. Creating visually stunning digital experiences that break the mould and exceed expectations is why I do what I do.";
  const CDEInitialArr = [
    "Do you need a state of the art",
    "website? Sweet. Creating",
    "visually stunning digital",
    "experiences that break the",
    "mould and exceed expectations",
    "is why I do what I do.",
  ];
  // const CDEHover =
  //   "Are you a creative searching for a portfolio that says “I’m the one”? Are you looking for the perfect online space to showcase yourself or your business? Together we’ll find the overlap between aesthetics, cutting-edge tech, and creative thinking to make your website stand out from the crowd";
  const CDEHoverArr = [
    "Are you a creative searching",
    "for a portfolio that says “I’m",
    "the one”? Are you looking for",
    "the perfect online space to",
    "showcase yourself or your",
    "business? Together we’ll find",
    "the overlap between aesthetics,",
    "cutting-edge tech, and creative",
    "thinking to make your website",
    "stand out from the crowd.",
  ];
  // const CCInitial =
  //   "So you’re making your website yourself. You’re the type of person who likes to get their hands dirty. Big up.";
  const CCInitialArr = [
    "So you’re making your website",
    "yourself. You’re the type of",
    "person who likes to get their",
    "hands dirty. Big up.",
  ];
  // const CCHover =
  //   "But there’s a lot going on when making a website, and maybe you don’t know where to start. We’ve all been there. I’ll help you get on your feet and find your voice. We’ll work together to set you up for success so you can forge your own masterpiece.";
  const CCHoverArr = [
    "But there’s a lot going on when",
    "making a website, and maybe you",
    "don’t know where to start.",
    "We’ve all been there. I’ll help",
    "you get on your feet and find",
    "your voice. We’ll work together",
    "to set you up for success so",
    "you can forge your own",
    "masterpiece.",
  ];
  const { complete, handleComplete } = useOutletContext<ContextType>();
  const [CDEText, setCDEText] = useState(CDEInitialArr);
  const [CCText, setCCText] = useState(CCInitialArr);
  const [CWText, setCWText] = useState(CWInitial);
  const [CWLines, setCWLines] = useState<string[]>([]);
  // const [CDELines, setCDELines] = useState<string[]>([]);
  const hiddenRef = useRef<HTMLDivElement>(null);
  const containerWidth = 350;

  function handleCDEHoverStart() {
    setCDEText(CDEHoverArr);
  }
  function handleCCHoverStart() {
    setCCText(CCHoverArr);
  }
  function handleCWHoverStart() {
    setCWText(CWHover);
  }
  function handleCDEHoverEnd() {
    setCDEText(CDEInitialArr);
  }
  function handleCCHoverEnd() {
    setCCText(CCInitialArr);
  }
  function handleCWHoverEnd() {
    setCWText(CWInitial);
  }

  useEffect(() => {
    for (let i = 0; i < CWLines.length; i++) {
      const element = document.getElementById(`CWText-${i}`);
      if (element) {
        try {
          charRandomizerByEl({ element, complete, handleComplete });
        } catch (error) {
          console.error(
            `Error applying charRandomizerByEl to element with id CWText-${i}:`,
            error
          );
        }
      } else {
        console.error(`Element with id CWText-${i} not found.`);
      }
    }
  }, [CWLines]);

  useEffect(() => {
    CDEText.forEach((_, i) => {
      const element = document.getElementById(`CDEText-${i}`);
      if (element) {
        try {
          charRandomizerByEl({ element, complete, handleComplete });
        } catch (error) {
          console.error(
            `Error applying charRandomizerByEl to element with id CDEText-${i}:`,
            error
          );
        }
      } else {
        console.error(`Element with id CDEText-${i} not found.`);
      }
    });
  }, [CDEText]);

  useEffect(() => {
    CCText.forEach((_, i) => {
      const element = document.getElementById(`CCText-${i}`);
      if (element) {
        try {
          charRandNoState(element);
        } catch (error) {
          console.error(
            `Error applying charRandomizerByEl to element with id CCText-${i}:`,
            error
          );
        }
      } else {
        console.error(`Element with id CCText-${i} not found.`);
      }
    });
  }, [CCText]);

  useEffect(() => {
    if (containerWidth && hiddenRef.current) {
      const newLines = textSplitter({
        text: CWText,
        containerWidth,
        hiddenRef,
      });
      setCWLines(newLines);
    }
  }, [CWText]);

  return (
    <Frame>
      <Service onHoverStart={handleCWHoverStart} onHoverEnd={handleCWHoverEnd}>
        <h3 className="uppercase">commercial website</h3>
        <TextDiv>
          <p>
            <span
              ref={hiddenRef}
              style={{
                visibility: "hidden",
                whiteSpace: "nowrap",
                position: "absolute",
              }}
            ></span>
            {CWLines.map((text, i) => (
              <motion.span
                key={`CWTextKey-${i}`}
                id={`CWText-${i}`}
                data-value={text}
              >
                {text
                  .split("")
                  .map(() => "\u00A0")
                  .join("")}
              </motion.span>
            ))}
          </p>
        </TextDiv>
      </Service>
      <Service
        onHoverStart={handleCDEHoverStart}
        onHoverEnd={handleCDEHoverEnd}
      >
        <h3 className="uppercase">creative digital experience</h3>
        <TextDiv>
          {CDEText.map((text, i) => (
            <p key={`CDEText-${i}`} id={`CDEText-${i}`} data-value={text}>
              {text
                .split("")
                .map(() => "\u00A0")
                .join("")}
            </p>
          ))}
        </TextDiv>
      </Service>
      <Service onHoverStart={handleCCHoverStart} onHoverEnd={handleCCHoverEnd}>
        <h3 className="uppercase">content consultation</h3>
        <TextDiv>
          {CCText.map((text, i) => (
            <p key={`CCText-${i}`} id={`CCText-${i}`} data-value={text}>
            {text
              .split("")
              .map(() => "\u00A0")
              .join("")}
          </p>
        ))}
        </TextDiv>
      </Service>
    </Frame>
  );
}

export default HomeServices;
