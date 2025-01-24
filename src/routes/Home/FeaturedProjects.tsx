import styled from "styled-components";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { MutableRefObject, useRef, useEffect, useState } from "react";
import charRandomizerByEl from "../../tools/charRandomizerByEl";

interface Props {
  scrollRef: MutableRefObject<HTMLDivElement | null>;
}
function FeaturedProjects({ scrollRef }: Props) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
    target: targetRef,
  });
  const sprungX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });
  const translateX = useTransform(
    sprungX,
    [0.05, 0.4, 0.7, 1],
    ["0%", "-5%", "-45%", "-100%"]
  );
  const [title, setTitle] = useState("Nicki Wilkins");
  const [prevTitle, setPrevTitle] = useState("Nicki Wilkins");
  useEffect(() => {
    charRandomizerByEl(document.getElementById("project-title")!);
  }, []);
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const floor = Math.floor(value * 10);
      if (floor === 7 && title === "Nicki Wilkins") {
        setTitle("Jo and Rick");
        setPrevTitle("Nicki Wilkins");
        charRandomizerByEl(document.getElementById("project-title")!);
      }
      if (floor < 7 && title === "Jo and Rick") {
        setTitle("Nicki Wilkins");
        setPrevTitle("Jo and Rick");
        charRandomizerByEl(document.getElementById("project-title")!);
      }
      console.log(scrollYProgress);
    });
    return () => unsubscribe();
  }, [scrollYProgress, title]);

  return (
    <StickyScrollFrame ref={targetRef} id="Featured Projects">
      <ProjectsWideFrame>
        <ProjectTitle>
          <motion.h3
            data-value={title}
            data-prevalue={prevTitle}
            id="project-title"
          >
            {title
              .split("")
              .map(() => "\u00A0")
              .join("")}
          </motion.h3>
        </ProjectTitle>
        <IndividualProject></IndividualProject>
        <IndividualProject
          style={{ translateX, borderColor: "red" }}
        ></IndividualProject>
      </ProjectsWideFrame>
    </StickyScrollFrame>
  );
}

export default FeaturedProjects;

const StickyScrollFrame = styled.section`
  width: 100%;
  height: 400%;
  position: relative;
  flex-shrink: 0;
`;
const ProjectsWideFrame = styled(motion.div)`
  width: 200%;
  height: 25%;
  box-sizing: border-box;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
  display: flex;
`;
const IndividualProject = styled(motion.div)`
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  border: 2px dashed blue;
`;
const ProjectTitle = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50px;
`;
