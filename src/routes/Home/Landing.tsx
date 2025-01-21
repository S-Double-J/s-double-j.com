import styled from "styled-components";
import { motion } from "motion/react";

const Landing = styled.section`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;
  flex-shrink: 0;
  padding: 40px;
  box-sizing: border-box;
`;
const LandingInner = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
  position: absolute;
  bottom: 40px;
  right: 0px;
  padding: 40px;
`;
const SayHi = styled(motion.button)`
  display: flex;
  padding: 10px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: none;
  background: none;
  cursor: pointer;
  position: fixed;
  right: 40px;
  bottom: 40px;
  background-color: #fffaf4;
  mix-blend-mode: difference;
  z-index: 2;
`;
const landingVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
function LandingPage() {
  return (
    <Landing id="S-Double-J">
        <motion.h1
          className="decorative"
          variants={landingVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 2.6 }}
          viewport={{ once: true }}
        >
          s-double-j
        </motion.h1>
        <LandingInner>
          <motion.h2
            className="justify"
            variants={landingVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 2.8 }}
            viewport={{ once: true }}
          >
            I use the power of story, design & the latest technologies to
            transform your concept into a website that will turn heads.
          </motion.h2>
        </LandingInner>
        <SayHi
          variants={landingVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 3}}
          viewport={{ once: true }}
        >
          <p style={{ color: "#252323" }}>Say hi</p>
        </SayHi>
    </Landing>
  );
}

export default LandingPage;
