import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import textSplitter from "../../tools/LineSplitter";

const StickyFrame = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  height: 33%;
  padding: 40px;
  box-sizing: border-box;
  flex-shrink: 0;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
`;
const ScrollFrame = styled.div`
  height: 300%;
  width: 100%;
  position: relative;
  flex-shrink: 0;
`;
const SVGFrame = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  align-self: stretch;
  flex: 1 0 0;
`;
const InnerFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 120px;
  height: 100%;
  flex: 1;
`;
const TextRightFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  text-align: justify;
  max-width: 900px;
`;
const TitleFrame = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

interface Props {
  scrollRef: MutableRefObject<HTMLDivElement | null>;
}

function MyApproach({ scrollRef }: Props) {
  const paragraph1 =
    "The media landscape is changing. Countless voices are vying for attention. Cutting through to your target audience means engaging their attention and making an emotional connection. I aim to convey meaning and express your unique identity through a cohesive design strategy, engage users with interactive digital artworks, and evoke feelings with creative digital experience.";
  const paragraph2 =
    "As a solo freelancer I am able to offer a more personal approach, there’s no middle men or micro-managers here. And because it’s just me I can offer my experience and flexibility at more competitive rates.";

  // const words1 = paragraph1.split(" ");
  const words2 = paragraph2.split(" ");

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
    target: ref,
    layoutEffect: false,
  });
  const sprungX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
console.log("sprungX: ", sprungX)
console.log("scrollY: ", scrollYProgress)

  }, [sprungX, scrollYProgress])
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [lines, setLines] = useState<string[]>([]);
  const hiddenRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleResize = () => {
      const approachPElement = document.getElementById("approach-p");
      if (approachPElement) {
        setContainerWidth(approachPElement.clientWidth);
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
        text: paragraph1,
        containerWidth,
        hiddenRef,
      });
      setLines(newLines);
    }
  }, [containerWidth]);


  // const opacity = useTransform(sprungX, [start, end], [0, 1]);

  return (
    <ScrollFrame ref={ref}>
      <StickyFrame id="My Approach">
        <InnerFrame>
          <TitleFrame>
            <h3>&#123; My approach &#125;</h3>
          </TitleFrame>
          <SVGFrame>
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
          </SVGFrame>
        </InnerFrame>
        <TextRightFrame id="approach-p">
          <p
            style={{
              fontWeight: 700,
              alignSelf: "stretch",
            }}
          >
            Every business needs an online presence.
          </p>
          <p>
            <span
              ref={hiddenRef}
              style={{
                visibility: "hidden",
                whiteSpace: "nowrap",
                position: "absolute",
              }}
            ></span>
            {lines.map((line, i) => {
                const start = i / lines.length;
                const end = start + 1 / lines.length;
              return <Line key={i} range={[start, end]} progress={sprungX}>{line}</Line>
})}
          </p>
          <p className="gradient-text-p justify">
            {words2.map((word, i) => (
              <span className="gradient-text-span justify" key={i}>
                {word}
              </span>
            ))}
          </p>
        </TextRightFrame>
      </StickyFrame>
    </ScrollFrame>
  );
}

const Line = ({ children, range, progress }: { children: string, range: number[], progress: MotionValue }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return <motion.span style={{ opacity }}>{children}</motion.span>;
};

export default MyApproach;
