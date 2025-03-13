import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StickyFrame = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
  flex-shrink: 0;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
`;
const Buffer = styled.div`
  height: 200%;
  flex-shrink: 0;
`;
const SVGFrame = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  top: 80px;
  left: 90px;
`;
const InnerFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  flex: 1;
  position: relative;
`;
const TextRightFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  text-align: justify;
  max-width: 700px;
  position: relative;
`;
const TitleFrame = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: stretch;
`;

const RBGFrame = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

const Blur = styled.div`
  width: 100svw;
  height: 100svh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.01);
  backdrop-filter: blur(70px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

// type OffsetValue =
//   | "start"
//   | "end"
//   | "center"
//   | `${number} ${number}`
//   | `${number} center`
//   | `${number} start`
//   | `${number} end`
//   | `${number} ${number}px`
//   | `${number} ${number}vw`
//   | `${number} ${number}vh`
//   | `${number} ${number}%`;

interface Props {
  scrollRef: MutableRefObject<HTMLDivElement | null>;
}

function MyApproach({ scrollRef }: Props) {
  const paragraph =
    "The media landscape is changing. Countless voices are vying for attention. Cutting through to your target audience means engaging their attention and making a narative connection. I aim to convey meaning and express your unique identity through a cohesive design strategy, engage users with interactive digital artworks, and tell your story with creativity. __break__ As a solo freelancer I am able to offer a more personal approach, there’s no middle men or micro-managers here. And because it’s just me I can offer my experience and flexibility at more competitive rates.";
  // Split by spaces and newlines
  const words = paragraph.split(" ");
  const ref = useRef(null);
  // const [offset, setOffset] = useState<OffsetValue[]>(["0 1.5", "1 1.2"]);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
    target: ref,
    layoutEffect: false,
    offset: ["0 1.5", "1 1.2"],
  });
  const sprungY = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });
  // useEffect(() => {
  //   const handleResize = () => {
  //     // Update the offset values based on window size
  //     const newOffset: OffsetValue[] = [
  //       `0 ${window.innerWidth < 1760 ? 0.85 : 0.85}`,
  //       `1 ${window.innerWidth < 768 ? 0.88 : 0.83}`,
  //     ];
  //     setOffset(newOffset);
  //   };

  //   // Add event listener for window resize
  //   window.addEventListener("resize", handleResize);

  //   // Call handleResize once to set initial values
  //   handleResize();

  //   // Cleanup event listener on unmount
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  return (
    <>
      <StickyFrame id="My Approach">
        <InnerFrame>
          <RGB scrollRef={scrollRef} />
          {/* <SVGFrame>
            <svg
              width="300"
              height="300"
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="150" cy="150" r="149.5" />
              <path
                className="approachSVG"
                d="M300 41.1765C264 41.1765 252 35.2941 252 0C252 35.2941 246 52.9412 210 52.9412C246 52.9412 264 58.8235 264 94.1176C264 58.8235 264 41.1765 300 41.1765Z"
              />
              <path
                className="approachSVG"
                d="M42 300C42 264.706 35.9994 258.824 0 258.824C36 258.824 36 247.059 36 211.767V211.765C36 247.059 42 252.941 84 252.941C42 252.941 42 264.706 42 300Z"
              />
            </svg>
          </SVGFrame> */}

          <TitleFrame>
            <h3>&#123; My approach &#125;</h3>
          </TitleFrame>

          <TextRightFrame id="approach-p">
            <h3
              style={{
                fontWeight: 700,
                alignSelf: "stretch",
              }}
            >
              Every business needs an online presence.
            </h3>
            <p className="gradient-text-p">
              {words.map((word, i) => {
                if (word === "__break__") {
                  // Render a line break for newline characters
                  return <span style={{ width: "100%", height: 26 }} key={i} />;
                } else {
                  // Render a word for non-newline tokens
                  const start = i / words.length;
                  const end = start + 1 / words.length;
                  return (
                    <Word key={i} range={[start, end]} progress={sprungY}>
                      {word}
                    </Word>
                  );
                }
              })}
            </p>
          </TextRightFrame>
        </InnerFrame>
      </StickyFrame>
      <Buffer ref={ref}></Buffer>
    </>
  );
}

const Word = ({
  children,
  range,
  progress,
}: {
  children: string;
  range: number[];
  progress: MotionValue;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="gradient-text-span">
      <span className="gradient-text-shadow">{children}</span>
      <motion.span style={{ opacity, whiteSpace: "pre-line" }}>
        {children}
      </motion.span>
    </span>
  );
};

const RGB = ({ scrollRef }: Props) => {
  const ref = useRef(null);
  // const [offset, setOffset] = useState<OffsetValue[]>(["0 1.5", "1 1.2"]);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
    target: ref,
    layoutEffect: false,
    offset: ["0 1.5", "1 1.2"],
  });
  const sprungY = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });
  const opacity = useTransform(sprungY, [0, 1], [0, 0.5]);
  return (
    <RBGFrame ref={ref}>
      <Blur />
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="309"
        height="326"
        viewBox="0 0 309 326"
        fill="none"
        className="rbg"
        style={{ opacity }}
      >
        <path
          d="M89.4994 215.5C75.4485 183.183 -14.4995 123.5 2.50042 88C16.72 58.3061 100.5 90.4078 99.5 57.5C97.1792 -18.8844 321.075 -17.7042 307.5 57.5C303.684 78.6416 251.921 119.588 247 140.5C236.619 184.617 283.5 195.678 283.5 241C283.5 278.5 269.5 293.5 225.5 293.5C181.5 293.5 129.784 341.031 89.5 319.5C60.5 304 109.5 261.5 89.4994 215.5Z"
          fill="#4D00FF"
        />
      </motion.svg>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="287"
        height="263"
        viewBox="0 0 287 263"
        fill="none"
        className="rbg"
        style={{ opacity }}
      >
        <path
          d="M49.5008 212.5C22.4087 189.965 -0.0837881 161.239 0.000234646 126C0.0787345 93.0771 56.5006 91.9077 55.5008 58.9999C53.18 -17.3845 193.075 -20.2042 179.5 55C175.684 76.1416 230.922 66.0878 226.001 86.9999C215.619 131.117 307.097 147.434 282.5 185.5C276.726 194.436 212.543 195.158 204 201.5C167.324 228.725 165.508 258.568 120 262.5C89.6103 265.126 72.9519 232.006 49.5008 212.5Z"
          fill="#00FF00"
        />
      </motion.svg>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="218"
        height="237"
        viewBox="0 0 218 237"
        fill="none"
        className="rbg"
        style={{ opacity }}
      >
        <path
          d="M7.00031 222.5C-20.0917 199.965 51.4163 179.239 51.5003 144C51.5788 111.077 14.0001 101.908 13.0003 69C10.6795 -7.38435 221.076 -27.7041 207.5 47.5C203.684 68.6416 188.421 76.0879 183.5 97C173.119 141.117 236.597 171.434 212 209.5C206.226 218.436 202.043 223.158 193.5 229.5C156.824 256.725 126.507 193.568 81.0003 197.5C50.6101 200.126 30.4514 242.007 7.00031 222.5Z"
          fill="#FF0000"
        />
      </motion.svg>
    </RBGFrame>
  );
};

export default MyApproach;
