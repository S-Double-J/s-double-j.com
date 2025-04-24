import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import styled from "styled-components";
import { FormEvent, useEffect, useRef, useState } from "react";
import useMultiStepForm from "../../componenets/contact form/useMultiStepForm";
import Name from "../../componenets/contact form/form steps/Name";
import { NewOrExisting } from "../../componenets/contact form/form steps/NewOrExisting";
import { ProjectType } from "../../componenets/contact form/form steps/ProjectType";
import { Email } from "../../componenets/contact form/form steps/Email";
import { Requires } from "../../componenets/contact form/form steps/Requires";
import { Deadline } from "../../componenets/contact form/form steps/Deadline";
import { PS } from "../../componenets/contact form/form steps/PS";
import emailjs from "@emailjs/browser";
import { animate } from "motion";

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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 20px;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  opacity: 0;
`;
const Form = styled(motion.form)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
type FormData = {
  name: string;
  newOrExisting: string;
  projectType: string;
  requires: string[];
  deadline: string;
  email: string;
  extraInfo: string;
};
const INITIAL_DATA: FormData = {
  name: "",
  newOrExisting: "",
  projectType: "",
  requires: [],
  deadline: "",
  email: "",
  extraInfo: "",
};

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

  const formRef = useRef<HTMLFormElement>(null);
  const subButtonRef = useRef<HTMLButtonElement>(null);
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { renderedSteps, next, currentStepIndex, isLastStep } =
    useMultiStepForm([
      <Name {...data} updateFields={updateFields} />,
      <NewOrExisting {...data} updateFields={updateFields} />,
      <ProjectType {...data} updateFields={updateFields} />,
      <Requires {...data} updateFields={updateFields} />,
      <Deadline {...data} updateFields={updateFields} />,
      <Email {...data} updateFields={updateFields} />,
      <PS {...data} updateFields={updateFields} />,
    ]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const submitter = (e.nativeEvent as SubmitEvent).submitter;
    const currentStepElement = formRef.current?.children[currentStepIndex];
    const isValidSubmission =
      submitter && currentStepElement?.contains(submitter);

    if (!isLastStep) {
      if (isValidSubmission) {
        return next();
      }
      return;
    } else if (isLastStep) {
      if (submitter !== subButtonRef.current) {
        return next();
      }
      const requiredFields = {
        name: data.name,
        newOrExisting: data.newOrExisting,
        projectType: data.projectType,
        requires: data.requires,
        deadline: data.deadline,
        email: data.email,
      };

      const emptyFields = Object.entries(requiredFields)
        .filter(([_, value]) => {
          if (Array.isArray(value)) return value.length === 0;
          return value.trim() === "";
        })
        .map(([key]) => key);

      if (emptyFields.length > 0) {
        alert(`Please fill out all required fields: ${emptyFields.join(", ")}`);
        return; // Prevent form submission
      }
      emailjs.send("service_73wrahl", "template_9eam2j6", data).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );

      animate(
        document.getElementById("form"),
        { opacity: 0 },
        { duration: 0.4 }
      );
      animate(
        document.getElementById("form"),
        { visibility: "hidden" },
        { delay: 0.4 }
      );
      animate(
        document.getElementById("sent-message"),
        { visibility: "visible", },
        { delay: 0.4, }
      );
      animate(
        document.getElementById("sent-message"),
        { opacity: 1 },
        { delay: 0.4, duration: 0.4 }
      );
      alert(
        "Thank you for your message! I will endeavour to respond within 3 working days"
      );
    }
  };

  return (
    <Grid>
      <FormDiv id="form">
        <Form ref={formRef} onSubmit={handleSubmit} id="form">
          {renderedSteps}
          <button
            ref={subButtonRef}
            className="form-enter-button"
            style={{
              padding: 0,
              display: currentStepIndex === 6 ? "block" : "none",
              cursor: "pointer"
            }}
            type="submit"
          >
            <p style={{  cursor: "pointer"}}>[ Submit message ]</p>
          </button>
        </Form>
      </FormDiv>
      <h3
        id="sent-message"
        style={{
          position: "absolute",
          opacity: 0,
          visibility: "hidden",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 5
        }}
      >
        Message Sent.
      </h3>
      <TopLeft></TopLeft>
      <TopRight id="top-right-serv-hero">
        <h1 id="contact" className="page-title">
          contact
        </h1>
        <Eye>
          <Circle style={{ transform }} ref={pupilRef} />
        </Eye>
      </TopRight>
      <BotLeft></BotLeft>
      <BotRight>
        <TextContainer>
          <h3 id="header" className="justify">
            What's on your mind?
          </h3>
        </TextContainer>
      </BotRight>
    </Grid>
  );
}

export default Hero;
