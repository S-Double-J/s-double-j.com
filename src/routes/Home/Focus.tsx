import { motion, useScroll, useTransform } from "motion/react";
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
  gap: 10px;
  transition: all var(--color-transition) ease-in-out;
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
  });
  const scaleY = useTransform(scrollYProgress, [0.5, 1], ["100%", "55%"]);
  return (
      <Grid>
        <TextBox>
          <p>
            <b>Every business needs an online presence.</b>
          </p>
          <p>
            The digital landscape is evolving fast, and standing out in a sea of
            voices requires more than just visibility—it demands meaningful
            connection. My focus is helping creatives and businesses leave the lasting impression they .
             by
            crafting cohesive design strategies that reflect their unique
            identity, engage users with interactive digital experiences, and
            evoke emotions that leave a lasting impression.
          </p>
          <p>
            As a solo freelancer, I offer a personal touch that larger agencies
            can’t match. Without middlemen or micromanagers, you’ll work
            directly with me—someone who truly understands your vision and is
            committed to bringing it to life. My focus is on delivering
            high-quality results through a hands-on approach, combining creative
            experience with the flexibility to meet your needs at competitive
            rates.
          </p>
          <p>
            Let’s create something extraordinary together. Your story deserves
            to be seen, felt, and remembered.
          </p>
        </TextBox>
        <FocusBox>
            <h2
              style={{
                fontFamily: "Xanh Mono",
                fontStyle: "italic",
                position: "absolute",
                top: 40,
                zIndex: 2
              }}
            >
              MY
            </h2>
          <Blur style={{ scaleY }}>
          </Blur>
          <FocusText>FOCUS</FocusText>
          <Blur style={{ scaleY }}></Blur>
        </FocusBox>
      </Grid>
  );
}

export default Focus;
