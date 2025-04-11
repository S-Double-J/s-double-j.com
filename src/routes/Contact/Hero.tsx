import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import useMultiStepForm from "../../componenets/contact form/useMultiStepForm";
import Name from "../../componenets/contact form/form steps/Name";
import { NewOrExisting } from "../../componenets/contact form/form steps/NewOrExisting";
import { ProjectType } from "../../componenets/contact form/form steps/ProjectType";
import { Email } from "../../componenets/contact form/form steps/Email";
import { Requires } from "../../componenets/contact form/form steps/Requires";
import { Deadline } from "../../componenets/contact form/form steps/Deadline";
import { PS } from "../../componenets/contact form/form steps/PS";

const Grid = styled(motion.div)`
  position: relative;
  flex-shrink: 0;
  display: grid;
  width: 100%;
  height: calc(100svh - 75px);
  background-color: var(--bg);
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:
    "TopLeft TopLeft TopRight TopRight TopRight TopRight TopRight TopRight TopRight TopRight TopRight TopRight"
    "TopLeft TopLeft TopRight TopRight TopRight TopRight TopRight TopRight TopRight TopRight TopRight TopRight"
    "TopLeft TopLeft TopRight TopRight TopRight TopRight TopRight TopRight TopRight TopRight TopRight TopRight"
    "TopLeft TopLeft TopRight TopRight TopRight TopRight TopRight TopRight TopRight TopRight TopRight TopRight"
    "BotLeft BotLeft BotRight BotRight BotRight BotRight BotRight BotRight BotRight BotRight BotRight BotRight"
    "BotLeft BotLeft BotRight BotRight BotRight BotRight BotRight BotRight BotRight BotRight BotRight BotRight";
`;

const TopLeft = styled.div`
  grid-area: TopLeft;
  background-color: var(--bg);
  transition: background-color var(--color-transition) ease-in-out;
`;
const TopRight = styled.div`
  grid-area: TopRight;
  display: flex;
  flex-direction: row;
  padding: 40px;
  align-content: flex-start;
  justify-content: end;
  flex-wrap: wrap;
  position: relative;
  box-sizing: border-box;
  background-color: var(--bg);
  transition: background-color var(--color-transition) ease-in-out;
  & > h1 {
    mix-blend-mode: normal;
    color: var(--fg);
  }
`;
const BotLeft = styled.div`
  grid-area: BotLeft;
  background-color: var(--bg);
  transition: background-color var(--color-transition) ease-in-out;
`;
const BotRight = styled.div`
  grid-area: BotRight;
  display: flex;
  padding: 40px;
  box-sizing: border-box;
  justify-content: flex-end;
  background-color: var(--bg);
  transition: background-color var(--color-transition) ease-in-out;
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 900px;
  height: min-content;
  flex: 1 0 0;
`;
const Eye = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-45deg);
  border-radius: 0px 500px;
  background-color: var(--absurd-light);
  width: 300px;
  height: 300px;
  position: absolute;
  right: -10px;
  top: -10px;
  overflow: hidden;
`;
const Circle = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: var(--brutal-dark);
`;
const FormDiv = styled.div`
  position: absolute;
  top: 25%;
  left: 0;
  /* transform: translate(-50%, -50%); */
  width: max-content;
  max-width: 400px;
  padding: 20px;
  z-index: 2;
  display: flex;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

function Hero() {
  const pupilRef = useRef<HTMLDivElement>(null);

  const pupil = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothPupil = {
    x: useSpring(pupil.x, smoothOptions),
    y: useSpring(pupil.y, smoothOptions),
  };

  const x = useTransform(smoothPupil.x, [-1000, 0, 1000], [-100, 0, 100]);
  const y = useTransform(smoothPupil.y, [-1000, 0, 1000], [-100, 0, 100]);

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;

    if (!pupilRef.current) return;

    const { top, left, width, height } =
      pupilRef.current.getBoundingClientRect();
    const center = { x: left + width / 2, y: top + height / 2 };

    // Get mouse position relative to the eye's center
    const mouseX = clientX - center.x;
    const mouseY = clientY - center.y;

    // Compensate for parent rotation (45deg counter-clockwise)
    const angle = Math.PI / 4; // 45deg in radians
    const rotatedX = mouseX * Math.cos(angle) - mouseY * Math.sin(angle);
    const rotatedY = mouseX * Math.sin(angle) + mouseY * Math.cos(angle);

    // Apply the adjusted values
    pupil.x.set(rotatedX);
    pupil.y.set(rotatedY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px)`;

  // const [data, setData]=useState(INITIAL_DATA)

  const { steps, next, } = useMultiStepForm([
    <Name />,
    <NewOrExisting />,
    <ProjectType />,
    <Requires />,
    <Deadline />,
    <Email />,
    <PS />,
  ]);

  return (
    <Grid>
      <FormDiv>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            next();
          }}
        >
          {steps}
        </Form>
      </FormDiv>
      <TopLeft></TopLeft>
      <TopRight id="top-right-serv-hero">
        <h1 className="page-title">contact</h1>
        <Eye>
          <Circle style={{ transform }} ref={pupilRef} />
        </Eye>
      </TopRight>
      <BotLeft></BotLeft>
      <BotRight>
        <TextContainer>
          <h3 className="justify">What's on your mind?</h3>
        </TextContainer>
      </BotRight>
    </Grid>
  );
}

export default Hero;
