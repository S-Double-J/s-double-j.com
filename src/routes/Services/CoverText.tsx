import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Grid = styled.div`
  position: sticky;
  top: 75px;
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
    ". . . . art art art art art art art art"
    ". . . . art art art art art art art art"
    "Text Text Text Text art art art art art art art art"
    "Text Text Text Text art art art art art art art art"
    "Text Text Text Text art art art art art art art art"
    "Text Text Text Text art art art art art art art art";
  @media screen and (max-aspect-ratio: 1/1) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
  }
`;

const TextBox = styled(motion.div)`
  align-self: end;
  grid-area: Text;
  display: flex;
  height: max-content;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
  border-radius: 40px 40px 40px 0px;
  border: 1px solid var(--bh-red);
  padding: 39px;
  background: var(--bh-red);
  box-sizing: border-box;
  gap: 40px;
  position: relative;
  flex-shrink: 0;
  & > p {
    color: var(--bh-light);
    text-align: justify;
    @media screen and (min-aspect-ratio: 1/1) and (max-width: 1100px) {
      font-size: 12px;
    }
  }
  position: relative;
  @media screen and (max-width: 600px) {
    padding: 19px;
    min-height: fit-content;
  }
`;

const ArtGridArea = styled.div`
  grid-area: art;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ArtContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;
  max-height: calc(50lvh - 95px);

  & > img{
    max-width: 90vw;
    max-height: 90vw;
  }
  @media screen and (min-aspect-ratio: 1/1) {
    & > img {

      width: 50%;
    }
  }
  @media screen and (max-aspect-ratio: 1/1) {
    flex-shrink: 1;
  }
`;
interface Props {
  target: React.RefObject<HTMLDivElement>;
}
function CoverText({ target }: Props) {
  const [columnLayout, setColumnLayout] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const shouldUseColumnLayout = window.innerWidth <= 1270;
      setColumnLayout(shouldUseColumnLayout);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { scrollYProgress } = useScroll({
    target: target,
    layoutEffect: false,
  });

  const { scrollYProgress: gradientScrollYProgress } = useScroll({
    target: target,
    layoutEffect: false,
    offset: ["0.4 1.5", "0.8 0.8"],
  });

  const paragraph = `Every project is unique, with its own set of goals and challenges. That’s why I offer a range of services designed to meet a variety of needs. It all starts with a conversation—we’ll get to know each other, discuss your vision, and uncover your goals and expectations. From there, I’ll take the time to craft a tailored plan that brings your ideas to life. __break__ Explore the services I offer to see how we can collaborate to create something truly special.`;
  const words = paragraph.split(" ");

  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <Grid>
      <ArtGridArea>
        <ArtContainer style={columnLayout ? { rotate: 90} : { opacity }}>
          <motion.img
            src="CoverArt.svg"
            style={{ opacity }}
          />
        </ArtContainer>
      </ArtGridArea>
      <TextBox style={{ opacity }}>
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

export default CoverText;

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
