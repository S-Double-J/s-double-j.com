import styled from "styled-components";
import { motion, spring, useAnimate } from "motion/react";
import React, { useState, useRef, useEffect } from "react";
import ThemeButton from "./ThemeButton";
import charRandomizer from "../../tools/CharRandomiserMouseEvent";
import charRandomizerByEl from "../../tools/charRandomizerByEl";
interface Props {
  children: React.ReactNode;
  complete: boolean;
  handleComplete: (bool: boolean) => void;
}
function Nav({ children, complete, handleComplete }: Props) {
  const objRefs = useRef<(HTMLElement | null)[]>([]);
  const contentRefs = useRef<(HTMLElement | null)[]>([]);
  const navRefs = useRef<(HTMLElement | null)[]>([]);
  const standInArtRef = useRef(null);
  const topRefs = useRef<(HTMLElement | null)[]>([]);
  const [sectionIds, setSectionIds] = useState<string[]>([]);
  const [scope, animate] = useAnimate();
  let pathname = window.location.pathname.slice(1);

  if (pathname === "") {
    pathname = "home";
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const ids = Array.from(sections).map((section) => section.id);
    setSectionIds(ids);
  }, []);
  useEffect(() => {
    const artStandIn = document.getElementById("standInArt");
    const startAnimation = async () => {
      for (let i = 0; i < objRefs.current.length; i++) {
        const ref = objRefs.current[i];
        if (ref && typeof ref === "object") {
          await animate(ref, { opacity: 1 }, { delay: 0.02 });
          charRandomizerByEl({ element: ref, complete, handleComplete });
        }
      }
      for (let i = 0; i < contentRefs.current.length; i++) {
        const ref = contentRefs.current[i];
        if (ref && typeof ref === "object") {
          await animate(ref, { opacity: 1 }, { delay: 0.4 });
          charRandomizerByEl({ element: ref, complete, handleComplete });
        }
      }
      for (let i = 0; i < navRefs.current.length; i++) {
        const ref = navRefs.current[i];
        if (ref && typeof ref === "object") {
          animate(
            ref,
            { transform: "translateX(0%)" },
            { duration: 0.65, type: spring, bounce: 0.15, delay: i * 0.2 }
          );
          charRandomizerByEl({ element: ref, complete, handleComplete });
        }
      }
      await animate(
        scope.current,
        { transform: "translateY(0%)" },
        { duration: 0.65, type: spring, bounce: 0.15, delay: 0.5 }
      );
      animate(
        ".animPath",
        { pathLength: [0, 1], strokeLinecap: "square" },
        { duration: 3 }
      );
      await animate(
        artStandIn,
        { transform: "translateX(0%)" },
        { duration: 0.65 }
      );
      for (let i = 0; i < topRefs.current.length; i++) {
        const ref = topRefs.current[i];
        if (ref && typeof ref === "object") {
          await animate(
            ref,
            { opacity: 1 },
            { duration: 0.01, delay: i * 0.01 }
          );
          charRandomizerByEl({ element: ref, complete, handleComplete });
        }
      }
    };
    startAnimation();
  }, [
    animate,
    scope,
    charRandomizerByEl,
    objRefs,
    contentRefs,
    navRefs,
    topRefs,
  ]);

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
        {[
          "dev = {",
          "\u00A0 name: “S-Double-J”,",
          "\u00A0 role: “Freelance designer and developer",
          "\u00A0 specialisation(s): [",
          "\u00A0 \u00A0 “Interactive digital experience ”,",
          "\u00A0 \u00A0 “Content consultation”,",
          "\u00A0 ],",
          "\u00A0 location: “United Kingdom”,",
          "\u00A0 other fields of interests: [",
          "\u00A0 \u00A0 “Acting”,",
          "\u00A0 \u00A0 “Art”,",
          "\u00A0 \u00A0 “Physics”,",
          "\u00A0 \u00A0 “Philosophy”,",
          "\u00A0 \u00A0 “History”,",
          "\u00A0 ],",
          "\u00A0 favourite film: “Spirited Away”,",
          "\u00A0 favourite series: “Mindhunter (R.I.P)”,",
          "\u00A0 favourite book: “Sapiens”,",
          "\u00A0 favourite food: “Pizza”,",
          "}",
        ].map((item, index) => (
          <motion.p
            key={index}
            className="small"
            data-value={item}
            ref={(el) => (objRefs.current[objRefs.current.length] = el)}
          >
            {item
              .split("")
              .map(() => "\u00A0")
              .join("")}
          </motion.p>
        ))}
        <ContentsOuter>
          <ContentsInner>
            <CILeft>
              <motion.p
                className="small"
                variants={contentsVariants}
                initial="hidden"
                whileInView="inView"
                viewport={{ margin: "100px", once: true }}
                transition={{
                  duration: 0.55,
                  type: spring,
                  bounce: 0.15,
                  delay: 2.5,
                }}
              >
                &#123;
              </motion.p>
            </CILeft>
            <CIMiddle>
              {sectionIds.map((id, index) => (
                <motion.p
                  key={index}
                  className="small"
                  data-value={id}
                  ref={(el) =>
                    (contentRefs.current[contentRefs.current.length] = el)
                  }
                >
                  {id
                    .split("")
                    .map(() => "\u00A0")
                    .join("")}
                </motion.p>
              ))}
            </CIMiddle>
            <CIRight>
              <motion.p
                className="small"
                variants={contentsVariants}
                initial="hidden"
                whileInView="inView"
                viewport={{ margin: "50px", once: true }}
                transition={{
                  duration: 0.55,
                  type: spring,
                  bounce: 0.15,
                  delay: 2.5,
                }}
              >
                &#125;
              </motion.p>
            </CIRight>
          </ContentsInner>
        </ContentsOuter>
        <NavButtonPanel>
          <motion.p
            className="small"
            variants={navPVariants}
            initial="hidden"
            whileInView="visible"
          >
            nav = &#123;
          </motion.p>
          {["home", "services", "about", "contact"].map((item, index) => (
            <NavButton
              key={index}
              onHoverStart={() => handleHoverStart(item)}
              onHoverEnd={() => handleHoverEnd(item)}
              onClick={(event) => charRandomizer(event)}
              ref={(el) => (navRefs.current[navRefs.current.length] = el)}
              variants={buttonVariants}
              initial="hidden"
            >
              <NavSpan
                variants={spanVariants}
                animate={hovered[item] ? "hovered" : "notHovered"}
                transition={{ duration: 0.65, type: spring, bounce: 0.15 }}
              />
              <NavButtonText className="pointer" data-value={item}>
                {item}
              </NavButtonText>
            </NavButton>
          ))}
          <motion.p
            className="small"
            variants={navPVariants}
            initial="hidden"
            whileInView="visible"
          >
            &#125;
          </motion.p>
        </NavButtonPanel>
      </LeftPanel>
      <RightPanel>
        <TopPanel>
          <motion.svg
          className="logo"
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            ref={scope}
          >
            <motion.path
              d="M30.5 10.5H10.5L10.5 20.5H30.5L30.5 30.5H10.5M38 10.5V38H10.5M10.5 45.5H45.5V10.5M3.00002 3L3 53L53 53V3H3.00002Z"
              stroke="#EAE3DA"
              strokeWidth="4"
              className="animPath"
              variants={svgVariants}
              initial="hidden"
            />
          </motion.svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {["you", "are", "currently", "viewing:"].map((item, index) => (
              <motion.p
                key={index}
                className="small"
                style={{ lineHeight: "13px", margin: 0 }}
                ref={(el) => (topRefs.current[topRefs.current.length] = el)}
                data-value={item}
              >
                {item
                  .split("")
                  .map(() => "\u00A0")
                  .join("")}
              </motion.p>
            ))}
          </div>
          <motion.h1
            style={{ lineHeight: "50px", margin: 0 }}
            ref={(el) => (topRefs.current[topRefs.current.length] = el)}
            data-value={pathname}
          >
            {pathname
              .split("")
              .map(() => "\u00A0")
              .join("")}
          </motion.h1>
          <StandInArtContainer>
            <StandInArt
              id="standInArt"
              variants={buttonVariants}
              initial="hidden"
              ref={standInArtRef}
            />
          </StandInArtContainer>
          <ThemeButton />
        </TopPanel>
        <OutletBorder
          variants={outletVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 2 }}
        >
          {children}
        </OutletBorder>
      </RightPanel>
    </>
  );
}

export default Nav;

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
const StandInArtContainer = styled.div`
  align-self: stretch;
  flex: 1 0 0;
  overflow: hidden;
`;
const StandInArt = styled(motion.div)`
  width: 100%;
  height: 100%;
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
  background-color: light-dark(var(--light-bg), var(--dark-bg));
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
const NavButtonText = styled(motion.p)`
  color: #eae3da;
  font-size: 20px;
  letter-spacing: 5px;
  mix-blend-mode: difference;
  z-index: 2;
  margin: 0;
`;
const OutletBorder = styled(motion.div)`
  height: calc(100svh - 80px);
  width: 100%;
  overflow: auto;
  border: 1px solid light-dark(var(--light-fg), var(--dark-fg));
  background: light-dark(var(--light-bg), var(--dark-bg));
  z-index: 1;
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
  height: 50%;
  padding: 10px;
  justify-content: center;
  align-items: flex-end;
`;
const CILeft = styled.div`
  display: flex;
  height: 50%;
  flex-direction: column;
  align-items: flex-end;
  flex: 1 0 0;
`;
const CIMiddle = styled.div`
  display: flex;
  height: 50%;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;
const CIRight = styled.div`
  display: flex;
  height: 50%;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
`;
const contentsVariants = {
  hidden: {
    opacity: 0,
  },
  inView: {
    opacity: 1,
  },
};
const outletVariants = {
  hidden: {
    borderColor: "light-dark(var(--light-bg), var(--dark-bg))",
  },
  visible: {
    borderColor: "light-dark(var(--light-fg), var(--dark-fg))",
  },
};
const spanVariants = {
  notHovered: {
    transform: "translateX(0%)",
  },
  hovered: {
    transform: "translateX(-110%)",
  },
};
const buttonVariants = {
  hidden: {
    transform: "translateX(-110%)",
  },
  inView: {
    transform: "translateX(0%)",
  },
};
const navPVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, delay: 2 },
  },
};
const svgVariants = {
  hidden: {
    pathLength: 0,
  },
  reveal: {
    pathLength: 1,
  },
};
