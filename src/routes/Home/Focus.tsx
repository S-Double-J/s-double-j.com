import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import styled from "styled-components";

const Grid = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  flex-shrink: 0;
  display: grid;
  width: 100%;
  height: calc(100svh - 75px);
  padding: 20px;
  box-sizing: border-box;
  grid-template-columns: repeat(12, minmax(0, 1fr)); /* Constrain columns */
  grid-template-rows: repeat(6, minmax(0, 1fr)); /* Constrain rows */
  grid-template-areas:
    ". . . . focus focus focus focus focus focus focus focus"
    ". . . . focus focus focus focus focus focus focus focus"
    "Text Text Text Text focus focus focus focus focus focus focus focus"
    "Text Text Text Text focus focus focus focus focus focus focus focus"
    "Text Text Text Text focus focus focus focus focus focus focus focus"
    "Text Text Text Text focus focus focus focus focus focus focus focus";
`;

const TextBox = styled.div`
  align-self: end;
  grid-area: Text;
  display: flex;
  height: max-content;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
  border-radius: 40px 40px 40px 0px;
  border: 40px solid var(--fg);
  background: var(--fg);
  box-sizing: border-box;
  gap: 40px;
  transition: all var(--color-transition) ease-in-out;
  position: relative;
  & > p {
    color: var(--bg);
    text-align: justify;
  }
`;

const FocusBox = styled.div`
  grid-area: focus;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Blur = styled(motion.div)`
  flex: 1 0 0;
  align-self: stretch;
  background: rgba(195, 187, 182, 0.01);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: start;
  justify-content: center;
  z-index: 1;
`;
const FocusText = styled.p`
  font-size: calc(100vw / 6);
  font-weight: 700;
  z-index: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -52%);
`;

interface Props {
  containerRef: React.RefObject<HTMLDivElement>;
  targetRef: React.RefObject<HTMLDivElement>;
}
function Focus({ containerRef, targetRef }: Props) {
  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: targetRef,
    layoutEffect: false
  });

    const { scrollYProgress: gradientScrollYProgress } = useScroll({
      container: containerRef,
      target: targetRef,
      layoutEffect: false,
      offset: ["0.35 1.5", "1 1.2"],
    });
  const scaleY = useTransform(scrollYProgress, [0.1, 1], ["100%", "70%"]);
  const paragraph = `Every business has a story, my focus is telling yours. __break__ The digital landscape is evolving fast, and standing out in a sea of voices requires more than just visibility—it demands meaningful connection. Story is humanity's universal language and I believe it is the best way for creatives and businesses to leave the lasting impression they deserve. __break__ As a solo freelancer, I offer a personal touch that larger agencies can’t match, so let’s create something extraordinary together. Your story deserves to be seen, felt, and remembered.`;
  const words = paragraph.split(" ");

  return (
    <Grid>
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
                <Word key={i} range={[start, end]} progress={gradientScrollYProgress}>
                  {word}
                </Word>
              );
            }
          })}
        </p>
      </TextBox>
      <FocusBox>
        <h2
          style={{
            fontFamily: "Xanh Mono",
            fontStyle: "italic",
            position: "absolute",
            top: 40,
            zIndex: 2,
          }}
        >
          MY
        </h2>
        <Blur style={{ scaleY }}></Blur>
        <FocusText>FOCUS</FocusText>
        <Blur style={{ scaleY }}></Blur>
      </FocusBox>
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
      <motion.span style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
};