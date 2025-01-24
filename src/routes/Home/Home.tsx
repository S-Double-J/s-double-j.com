import styled from "styled-components";
import LandingPage from "./Landing";
import MyApproach from "./MyApproach";
import FeaturedProjects from "./FeaturedProjects";
import { useRef } from "react";
import { motion } from "motion/react";

const Frame = styled(motion.div)`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 42px;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
`;

function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <Frame ref={scrollRef}>
        <LandingPage />
        <MyApproach />
        <FeaturedProjects scrollRef={scrollRef} />
      </Frame>
    </>
  );
}

export default Home;
