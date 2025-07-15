import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import styled from "styled-components";

const Grid = styled.div`
  position: sticky;
  top: 75px;
  left: 0;
  flex-shrink: 0;
  width: 100%;
  height: calc(100svh - 75px);
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
  @media screen and (max-width:769px){
    justify-content: space-between;
    padding: 40px 20px;
  }
`;

const TextBox = styled.div`
  display: flex;
  height: max-content;
  max-width: 700px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
  box-sizing: border-box;
  gap: 40px;
  transition: all var(--color-transition) ease-in-out;
  position: relative;
  @media screen and (max-width: 600px) {
    padding: 19px;
  }
  & > p {
    text-align: justify;
    @media screen and (min-aspect-ratio: 1/1) and (max-width: 1100px) {
      font-size: 12px;
    }
  }
`;

const FocusBox = styled.div`
  grid-area: focus;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;
  flex: 1 0 0;
  align-self: stretch;
  max-height: 500px;
  margin-bottom: -100px;
  & > h2 {
    top: 10%;
    @media screen and (max-aspect-ratio: 1/1) {
      top: 0px;
      @media screen and (max-height: 800px) {
        font-size: 20px;
      }
    }
  }
`;
const Blur = styled(motion.div)`
  position: absolute;
  height: 50%;
  width: 110%;
  background: rgba(195, 187, 182, 0.01);
  backdrop-filter: blur(6px);
  z-index: 1;
  left: -5%;
`;
const FocusText = styled.span`
  z-index: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -52%);
  & > p {
    font-size: calc(100vw / 6);
    font-weight: 700;
    @media screen and (max-aspect-ratio: 1/1) {
      font-size: 25vw;
    }
  }
`;

interface Props {
  targetRef: React.RefObject<HTMLDivElement>;
}
function Focus({ targetRef }: Props) {
  function isTouchDevice(): boolean {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      (navigator as any).msMaxTouchPoints > 0
    );
  }
  const { scrollYProgress } = useScroll({
    target: targetRef,
    layoutEffect: false,
  });

  const { scrollYProgress: gradientScrollYProgress } = useScroll({
    target: targetRef,
    layoutEffect: false,
    offset: isTouchDevice() ? ["0.7 1.5", "1 1.2"] : ["0.5 1.5", "1 1.2"],
  });
  const height = useTransform(scrollYProgress, [0.1, 1], ["50%", "30%"]);
  const paragraph =
    "Everyone has a story—my focus is telling yours. __break__ Storytelling is humanity’s universal language. It’s not just about a pitch or a product—it’s the why behind what you do. That’s what resonates. That’s what people remember. __break__ For businesses and creatives, a powerful story isn’t just communication—it’s legacy. Let’s give yours room to live, breathe, and leave its mark. __break__ Together, we’ll make sure your story isn’t just seen. It’s felt. And unforgettable.";
  const words = paragraph.split(" ");

  return (
    <Grid>
      <FocusBox>
        <h2
          style={{
            fontFamily: "Xanh Mono",
            fontStyle: "italic",
            zIndex: 2,
          }}
        >
          MY
        </h2>
        <FocusText>
          <Blur style={{ height, top: "5%" }}></Blur>
          <p>FOCUS</p>
          <Blur style={{ height, bottom: 0 }}></Blur>
        </FocusText>
      </FocusBox>
      <TextBox>
        <p className="gradient-text-p">
          {words.map((word, i) => {
            if (word === "__break__") {
              // Render a line break for newline characters
              return <span style={{ width: "100%", height: 16 }} key={i} />;
            }
            if (word === "why") {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <i>
                  <Word
                    i={i}
                    range={[start, end]}
                    progress={gradientScrollYProgress}
                  >
                    {word}
                  </Word>
                </i>
              );
            } else {
              // Render a word for non-newline tokens
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word
                  i={i}
                  range={[start, end]}
                  progress={gradientScrollYProgress}
                >
                  {word}
                </Word>
              );
            }
          })}
        </p>
      </TextBox>
    </Grid>
  );
}

export default Focus;

const Word = ({
  children,
  range,
  progress,
  i
}: {
  i: number;
  children: string;
  range: number[];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="gradient-text-span" key={i+1}>
      <span className="gradient-text-shadow" key={i+1*2}>{children}</span>
      <motion.span style={{ opacity }} key={i+1*3}>{children}</motion.span>
    </span>
  );
};
