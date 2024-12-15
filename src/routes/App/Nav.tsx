import styled from "styled-components";
import { motion, spring } from "motion/react";
import React, { useState } from "react";
import ThemeButton from "./ThemeButton";
import charRandomizer from "../../tools/CharRandomiser";

const LeftPanel = styled.div`
  display: flex;
  height: 100%;
  width: 325px;
  justify-content: center;
  flex-direction: column;
  padding: 10px 0px 10px 10px;
  box-sizing: border-box;
  flex-shrink: 0;
`;
const RightPanel = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  height: 100svh;
  width: calc(100svw - 325px);
  box-sizing: border-box;
`;
const TopPanel = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 50px;
  align-items: flex-end;
`;
const NavButtonPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 1px;
  flex: 1 0 0;
  align-self: stretch;
`;
const StandInArt = styled.div`
  flex: 1 0 0;
  align-self: stretch;
  color-scheme: light dark;
  background-color: light-dark(var(--light-fg), var(--dark-fg));
`;
const NavButton = styled(motion.button)`
  display: flex;
  height: 40px;
  padding: 0px 5px;
  align-items: center;
  width: 100%;
  position: relative;
  border: none;
  background: none;
  cursor: pointer;
`;
const NavSpan = styled(motion.span)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: light-dark(var(--light-fg), var(--dark-fg));
  z-index: 1;
`;
const spanVariants = {
  notHovered: {
    transform: "translateX(0%)",
  },
  hovered: {
    transform: "translateX(-110%)",
  },
};
const NavButtonText = styled(motion.p)`
  color: #eae3da;
  font-size: 20px;
  letter-spacing: 5px;
  mix-blend-mode: difference;
  z-index: 2;
  margin: 0;
`;
const OutletBorder = styled.div`
  height: calc(100svh - 80px);
  width: 100%;
  overflow: hidden;
  border: 1px solid light-dark(var(--light-fg), var(--dark-fg));
`;
const ContentsOuter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 100%;
  width: 100%;
`;
const ContentsInner = styled.div`
  display: flex;
  width: 264px;
  height: 250px;
  padding: 10px;
  justify-content: center;
  align-items: flex-end;
`;
const CILeft = styled.div`
  display: flex;
  height: 125px;
  flex-direction: column;
  align-items: flex-end;
  flex: 1 0 0;
`;
const CIMiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const CIRight = styled.div`
  display: flex;
  height: 125px;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
`;
interface Props {
  children: React.ReactNode;
}
function Nav({ children }: Props) {
  // const createHandleHoverStartWrapper = (item: string) => {
  //   return (event: MouseEvent) => {
  //     handleHoverStart(item);
  //     charRandomizer(event as unknown as ReactMouseEvent<HTMLElement>);
  //   };
  // };

  const [hovered, setHovered] = useState<{ [key: string]: boolean }>({});

  const handleHoverStart = (key: string) => {
    setHovered((prev) => ({ ...prev, [key]: true }));
   
  };

  const handleHoverEnd = (key: string) => {
    setHovered((prev) => ({ ...prev, [key]: false }));
  };

  return (
    <>
      <LeftPanel>
        <p className="small">
          dev = &#123; <br />
          &nbsp; name: “S-Double-J”,
          <br />
          &nbsp; role: “Freelance designer and developer”,
          <br />
          &nbsp; specialisation(s): [<br />
          &nbsp; &nbsp; “Interactive digital experience ”,
          <br />
          &nbsp; &nbsp; “Content consultation”,
          <br />
          &nbsp; ],
          <br />
          &nbsp; location: “United Kingdom”,
          <br />
          &nbsp; other fields of interests: [<br />
          &nbsp; &nbsp; “Acting”,
          <br />
          &nbsp; &nbsp; “Art”,
          <br />
          &nbsp; &nbsp; “Physics”,
          <br />
          &nbsp; &nbsp; “Philosophy”,
          <br />
          &nbsp; &nbsp; “History”,
          <br />
          &nbsp; ],
          <br />
          &nbsp; favourite film: “Spirited Away”,
          <br />
          &nbsp; favourite series: “Mindhunter (R.I.P)”,
          <br />
          &nbsp; favourite book: “Sapiens”,
          <br />
          &nbsp; favourite food: “Pizza”,
          <br />
          &#125;
        </p>
        <ContentsOuter>
          <ContentsInner>
            <CILeft>
              <p className="small">&#123;</p>
            </CILeft>
            <CIMiddle>
              <p className="small">S-Double-J</p>
              <p className="small">My approach</p>
              <p className="small">Featured projects</p>
              <p className="small">What could I do for you</p>
              <p className="small">Footer</p>
            </CIMiddle>
            <CIRight>
              <p className="small">&#125;</p>
            </CIRight>
          </ContentsInner>
        </ContentsOuter>
        <NavButtonPanel>
          <p className="small">nav = &#123;</p>
          {["home", "services", "about", "contact"].map((item, index) => (
            <NavButton
              key={index}
              onHoverStart={() => handleHoverStart(item)}
              onHoverEnd={() => handleHoverEnd(item)}
              onClick={(event) => charRandomizer(event)}
            >
              <NavSpan
                variants={spanVariants}
                animate={hovered[item] ? "hovered" : "notHovered"}
                transition={{ duration: 0.65, type: spring, bounce: 0.2 }}
              />
              <NavButtonText
                data-value={item}              >
                {item}
              </NavButtonText>
            </NavButton>
          ))}
          <p className="small">&#125;</p>
        </NavButtonPanel>
      </LeftPanel>
      <RightPanel>
        <TopPanel>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
          >
            <path d="M3 53L3.00002 3H53V53L3 53Z" fill="#1A1717" />
            <path
              d="M30.5 10.5H10.5L10.5 20.5H30.5L30.5 30.5H10.5M38 10.5V38H10.5M10.5 45.5H45.5V10.5M3.00002 3L3 53L53 53V3H3.00002Z"
              stroke="#EAE3DA"
              strokeWidth="4"
              strokeLinecap="square"
            />
          </svg>
          <p className="small" style={{ lineHeight: "13px", margin: 0 }}>
            you <br />
            are
            <br />
            currently <br />
            viewing: <br />
          </p>
          <h1 style={{ lineHeight: "50px", margin: 0 }}>home</h1>
          <StandInArt />
          <ThemeButton />
        </TopPanel>
        <OutletBorder>{children}</OutletBorder>
      </RightPanel>
    </>
  );
}

export default Nav;

// &nbsp; proficient languages: [<br />
//   &nbsp; &nbsp; “JavaScript”,
//   <br />
//   &nbsp; &nbsp; “TypeScript”,
//   <br />
//   &nbsp; &nbsp; “Python”,
//   <br />
//   &nbsp; &nbsp; “HTML”,
//   <br />
//   &nbsp; &nbsp; “CSS”,
//   <br />
//   &nbsp; &nbsp; “SQL”
//   <br />
//   &nbsp; ],
//   <br />
//   &nbsp; preferred libraries and frameworks: [<br />
//   &nbsp; &nbsp; “React + TS”,
//   <br />
//   &nbsp; &nbsp; “React-router-dom”,
//   <br />
//   &nbsp; &nbsp; “Framer-motion”,
//   <br />
//   &nbsp; &nbsp; “Styled-components”,
//   <br />
//   &nbsp; ],
//   <br />
