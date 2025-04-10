import { motion } from "motion/react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  background-color: var(--bg);
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:
    "l l l . . . . . . . r r"
    "l l l . . . . . . . r r"
    ". . . . . c c . . . . ."
    "b b b b b b b b b b b b"
    "b b b b b b b b b b b b"
    "b b b b b b b b b b b b";
  width: 100%;
  height: calc(100svh - 75px);
  flex-shrink: 0;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
 
`;

const Tagline = styled.div`
  grid-area: l;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Banner = styled.div`
  grid-area: b;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: end;
  justify-content: end;
`;
const BannerScroller = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;
const BannerHolder = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  width: max-content;
  mix-blend-mode: difference;
`;
const BannerSizeSet = styled.h1`
  font-size: 19vw;
  margin-bottom: -4vw;
  margin-top: -4vw;
  opacity: 0;
`;
const BannerText = styled.h1`
  font-size: 19vw;
  margin-bottom: -4vw;
  margin-top: -4vw;
  margin-right: 8.5vw;
  color: var(--fg-mb);
  mix-blend-mode: difference;
  font-style: italic;
  transition: color var(--color-transition) ease-in-out;
`;

const CircleFrame = styled(motion.div)`
  grid-area: c;
  position: relative;
`;
const BigCircle = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background-color: var(--fg-mb);
  mix-blend-mode: difference;
  border-radius: 100%;
  transition: background-color var(--color-transition) ease-in-out;
`;
const MedCircle = styled(motion.div)`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background-color: var(--fg-mb);
  mix-blend-mode: difference;
  border-radius: 100%;
  transition: background-color var(--color-transition) ease-in-out;
`;
const SmallCircle = styled(motion.div)`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  background-color: var(--fg-mb);
  mix-blend-mode: difference;
  border-radius: 100%;
  transition: background-color var(--color-transition) ease-in-out;
`;
function Footer() {
  return (
    <Grid>
      <Tagline>
        <p className="fg">
          Helping people find their own little slice of the net.
        </p>
      </Tagline>
      <CircleFrame>
        <BigCircle
          style={{ x: "-50%", y: "-50%" }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <MedCircle
            style={{ x: "-50%", y: "-50%" }}
            animate={{
              rotate: [0, -360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <SmallCircle />
          </MedCircle>
        </BigCircle>
      </CircleFrame>
      <Banner>
        <p className="fg">hi@s-double-j.com</p>
        <p className="small fg">©S-Double-J 2024</p>
        <BannerScroller>
          <BannerSizeSet>s-double-j</BannerSizeSet>
          <BannerHolder
            animate={{ x: "-50%" }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <BannerText className="fg">s-double-j</BannerText>
            <BannerText className="fg">s-double-j</BannerText>
          </BannerHolder>
        </BannerScroller>
      </Banner>
    </Grid>
  );
}

export default Footer;
