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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextBox = styled.div`
  display: flex;
  height: max-content;
  max-width: 600px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
  border-radius: 40px 40px 40px 0px;
  padding: 39px;
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
  justify-content: center;
  align-items: center;
  position: relative;
  flex: 1 0 0;
  align-self: stretch;
  max-height: 400px;
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
  const paragraph = `Everyone has a story, my focus is telling yours. __break__ Story is humanities universal language, we carry stories with us in everything we do. It’s not just a pitch or a product, it’s the reason you do what you do. That’s the story that people connect with and I believe it is the best way for businesses and creatives to leave the lasting impression they deserve. __break__ Let’s give your story a place to live and breathe. Let’s create something extraordinary together. Your story deserves to be seen, felt, and remembered.`;
  const words = paragraph.split(" ");

  return (
    <Grid>
      <FocusBox>
        <h2
          style={{
            fontFamily: "Xanh Mono",
            fontStyle: "italic",
            position: "absolute",
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
            } else {
              // Render a word for non-newline tokens
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word
                  key={i}
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
}: {
  children: string;
  range: number[];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="gradient-text-span">
      <span className="gradient-text-shadow">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
