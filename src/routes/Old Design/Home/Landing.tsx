import styled from "styled-components";
import { motion } from "motion/react";
import textSplitter from "../../../tools/LineSplitter";
import { useEffect, useRef, useState } from "react";

const Landing = styled.section`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;
  flex-shrink: 0;
  padding: 40px;
  box-sizing: border-box;
`;
const LandingInner = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  padding: 40px;
  box-sizing: border-box;
`;
const SayHi = styled(motion.button)`
  display: flex;
  padding: 10px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: none;
  background: none;
  cursor: pointer;
  position: fixed;
  right: 40px;
  bottom: 40px;
  background-color: #fffaf4;
  mix-blend-mode: difference;
  z-index: 2;
`;
const landingVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
function LandingPage() {
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [lines, setLines] = useState<string[]>([]);
  const hiddenRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleResize = () => {
      const tagLineElement = document.getElementById("tag-line");
      if (tagLineElement) {
        setContainerWidth(tagLineElement.clientWidth - 80);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (containerWidth && hiddenRef.current) {
      const newLines = textSplitter({
        text: "I use the power of story, design & the latest technologies to transform your concept into a website that will turn heads.",
        containerWidth,
        hiddenRef,
      });
      setLines(newLines);
    }
  }, [containerWidth]);

  return (
    <Landing id="S-Double-J">
      <motion.h1
        className="decorative"
        variants={landingVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 2.6 }}
        viewport={{ once: true }}
      >
        s-double-j
      </motion.h1>
      <LandingInner id="tag-line">
        <motion.h2
          className="justify"
          variants={landingVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 2.8 }}
          viewport={{ once: true }}
        >
          <span
            ref={hiddenRef}
            style={{
              visibility: "hidden",
              whiteSpace: "nowrap",
              position: "absolute",
            }}
          ></span>
          {lines.map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </motion.h2>
      </LandingInner>
      <SayHi
        variants={landingVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 3 }}
        viewport={{ once: true }}
      >
        <p style={{ color: "#252323" }}>Say hi</p>
      </SayHi>
    </Landing>
  );
}

export default LandingPage;
