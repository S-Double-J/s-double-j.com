import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import React, { useRef } from "react";

const ScrollDiv = styled.div`
  width: 100%;
  height: calc((100svh - 75px) * 5);
  flex-shrink: 0;
  display: flex;
  align-items: start;
  justify-content: start;
  position: relative;
  flex-direction: column;
`;
const Frame = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
  height: calc(100svh - 75px);
  flex-shrink: 0;
  background-color: var(--bg);
  transition: background var(--color-transition) ease-in-out;
  overflow: hidden;
`;
const Service = styled(motion.div)`
  display: flex;
  width: 350px;
  height: 550px;
  padding: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  background-color: var(--bg);
  transform-style: preserve-3d;
  transform: translateZ(35px);
  transition: background var(--color-transition) ease-in-out;
`;
const ServiceBg = styled(motion.div)`
  background-color: var(--fg);
  transform-style: preserve-3d;
  padding: 20px;
  transition: background var(--color-transition) ease-in-out;
  transition: all 2s ease-out;
`;
const InnerTop = styled.div`
  display: flex;
  padding: 10px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
  border-top: 1px solid;
  border-top-color: var(--fg);
  transition: border var(--color-transition) ease-in-out;
  transform-style: preserve-3d;
`;
const TopBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
  transform-style: preserve-3d;
`;
const InnerMid = styled.div`
  display: flex;
  padding: 10px 0px;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
  border-top: 1px solid;
  border-top-color: var(--fg);
  transition: border var(--color-transition) ease-in-out;
  transform-style: preserve-3d;
`;
const InnerBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
  transform-style: preserve-3d;
`;
const Circle = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  transform: rotate(-45deg) translateZ(55px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  overflow: hidden;
`;
const CircleHalf = styled.div`
  width: 20px;
  height: 10px;
  flex-shrink: 0;
`;

const Overlay = styled.div`
  display: flex;
  width: 100%;
  height: calc(100svh - 75px);
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  position: absolute;
  padding: 20px;
  box-sizing: border-box;
  pointer-events: none;
`;
const OverlayLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const OverlayText = styled.p`
  color: var(--brutal-red);
  font-size: calc((100vh - 115px) / 5);
  font-weight: 900;
  mix-blend-mode: exclusion;
  margin-top: calc((-100vh + 115px) / 12);
  margin-bottom: calc((-100vh + 115px) / 14);
`;
const ProgressIcon = styled(motion.svg)`
position: absolute;
top: 40px;
right: 40px;
stroke: white;

`;
const ProgressIconBg = styled(motion.circle)``;
const ProgressIconIndication = styled(motion.circle)`
stroke-dashoffset: 0;
stroke-width: 5`;
interface Props {
  containerRef: React.RefObject<HTMLDivElement>;
}
function ServHome({ containerRef }: Props) {
  const positiveDeg = "4deg";
  const negativeDeg = "-4deg";

  const bigZ = "translateZ(100px)";
  const smallZ = "translateZ(55px)";

  const x1 = useMotionValue(0);
  const y1 = useMotionValue(0);

  const mouseXSpring1 = useSpring(x1);
  const mouseYSpring1 = useSpring(y1);

  const rotateX1 = useTransform(
    mouseYSpring1,
    [-0.5, 0.5],
    [positiveDeg, negativeDeg]
  );
  const rotateY1 = useTransform(
    mouseXSpring1,
    [-0.5, 0.5],
    [negativeDeg, positiveDeg]
  );

  const handleMouseMove1 = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPercent = mouseX / width - 0.5;
    const yPercent = mouseY / height - 0.5;

    x1.set(xPercent);
    y1.set(yPercent);
  };

  const handleMouseLeave1 = () => {
    x1.set(0);
    y1.set(0);
  };

  const x2 = useMotionValue(0);
  const y2 = useMotionValue(0);

  const mouseXSpring2 = useSpring(x2);
  const mouseYSpring2 = useSpring(y2);

  const rotateX2 = useTransform(
    mouseYSpring2,
    [-0.5, 0.5],
    [positiveDeg, negativeDeg]
  );
  const rotateY2 = useTransform(
    mouseXSpring2,
    [-0.5, 0.5],
    [negativeDeg, positiveDeg]
  );

  const handleMouseMove2 = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPercent = mouseX / width - 0.5;
    const yPercent = mouseY / height - 0.5;

    x2.set(xPercent);
    y2.set(yPercent);
  };

  const handleMouseLeave2 = () => {
    x2.set(0);
    y2.set(0);
  };

  const x3 = useMotionValue(0);
  const y3 = useMotionValue(0);

  const mouseXSpring3 = useSpring(x3);
  const mouseYSpring3 = useSpring(y3);

  const rotateX3 = useTransform(
    mouseYSpring3,
    [-0.5, 0.5],
    [positiveDeg, negativeDeg]
  );
  const rotateY3 = useTransform(
    mouseXSpring3,
    [-0.5, 0.5],
    [negativeDeg, positiveDeg]
  );

  const handleMouseMove3 = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPercent = mouseX / width - 0.5;
    const yPercent = mouseY / height - 0.5;

    x3.set(xPercent);
    y3.set(yPercent);
  };

  const handleMouseLeave3 = () => {
    x3.set(0);
    y3.set(0);
  };
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: targetRef,
  });
  const SprungY = useSpring(scrollYProgress);

  const translateX1 = useTransform(SprungY, [0.1, 0.2], ["-100vw", "0vw"]);
  const translateX2 = useTransform(SprungY, [0.2, 0.3], ["-100vw", "0vw"]);
  const translateX3 = useTransform(SprungY, [0.3, 0.4], ["-100vw", "0vw"]);

  return (
    <ScrollDiv ref={targetRef}>
      <Frame id="My Services">
        <ProgressIcon width="75" height="75" viewBox="0 0 100 100">
          <ProgressIconBg
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="bg"
          />
          <ProgressIconIndication
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            style={{
              pathLength: scrollYProgress,
            }}
          />
        </ProgressIcon>
        <ServiceBg
          onMouseMove={handleMouseMove1}
          onMouseLeave={handleMouseLeave1}
          style={{
            rotateX: rotateX1,
            rotateY: rotateY1,
            translateX: translateX3,
          }}
        >
          <Service>
            <InnerTop>
              <h2
                className="light"
                style={{
                  fontSize: 140,
                  fontWeight: 700,
                  lineHeight: "105px",
                  transform: bigZ,
                }}
              >
                CW
              </h2>
              <TopBottom>
                <p className="uppercase light" style={{ transform: smallZ }}>
                  commercial website
                </p>
              </TopBottom>
            </InnerTop>
            <InnerMid>
              <p className="light justify" style={{ transform: smallZ }}>
                Sometimes you don’t need a website with all the techy trimmings
                and tiny designy details. Sometimes you just need to get online
                with a website that fulfils your business’s unique needs. Let's
                find those tangible results you’re looking for.
              </p>
            </InnerMid>
            <InnerBottom>
              <p className="light justify" style={{ transform: smallZ }}>
                01
              </p>
              <Circle>
                <CircleHalf
                  style={{
                    backgroundColor: "#434141",
                  }}
                />
                <CircleHalf
                  style={{
                    backgroundColor: "#D4CABB",
                  }}
                />
              </Circle>
            </InnerBottom>
          </Service>
        </ServiceBg>
        <ServiceBg
          onMouseMove={handleMouseMove2}
          onMouseLeave={handleMouseLeave2}
          style={{
            rotateX: rotateX2,
            rotateY: rotateY2,
            translateX: translateX2,
          }}
        >
          <Service>
            <InnerTop>
              <h2
                className="light"
                style={{
                  fontSize: 140,
                  fontWeight: 700,
                  lineHeight: "105px",
                  transform: bigZ,
                }}
              >
                CP
              </h2>
              <TopBottom>
                <p className="uppercase light" style={{ transform: smallZ }}>
                  creative project
                </p>
              </TopBottom>
            </InnerTop>
            <InnerMid>
              <p className="light justify" style={{ transform: smallZ }}>
                Do you need a state of the art website? Sweet. Creating
                interactive and interesting digital experiences is exactly what
                I love to do. Together we’ll find the overlap between
                aesthetics, cutting-edge tech, and creative thinking to make
                your website turn heads.
              </p>
            </InnerMid>
            <InnerBottom>
              <p className="light justify" style={{ transform: smallZ }}>
                02
              </p>
              <Circle>
                <CircleHalf
                  style={{
                    backgroundColor: "#434141",
                  }}
                />
                <CircleHalf
                  style={{
                    backgroundColor: "#D4CABB",
                  }}
                />
              </Circle>
            </InnerBottom>
          </Service>
        </ServiceBg>
        <ServiceBg
          onMouseMove={handleMouseMove3}
          onMouseLeave={handleMouseLeave3}
          style={{
            rotateX: rotateX3,
            rotateY: rotateY3,
            translateX: translateX1,
          }}
        >
          <Service>
            <InnerTop>
              <h2
                className="light"
                style={{
                  fontSize: 140,
                  fontWeight: 700,
                  lineHeight: "105px",
                  transform: bigZ,
                }}
              >
                CC
              </h2>
              <TopBottom>
                <p className="uppercase light" style={{ transform: smallZ }}>
                  content consultation
                </p>
              </TopBottom>
            </InnerTop>
            <InnerMid>
              <p className="light justify" style={{ transform: smallZ }}>
                So you’re making your website yourself? You’re the type of
                person who likes to get their hands dirty. But there’s a lot
                going on when making a website, and maybe you don’t know where
                to start. I’ll help you get on your feet and find your voice.
              </p>
            </InnerMid>
            <InnerBottom>
              <p className="light justify" style={{ transform: smallZ }}>
                01
              </p>
              <Circle>
                <CircleHalf
                  style={{
                    backgroundColor: "#434141",
                  }}
                />
                <CircleHalf
                  style={{
                    backgroundColor: "#D4CABB",
                  }}
                />
              </Circle>
            </InnerBottom>
          </Service>
        </ServiceBg>
        <Overlay>
          <OverlayLine>
            {["W", "H", "A", "T", "z"].map((l, i) => {
              if (l === "z") {
                return (
                  <OverlayText style={{ opacity: 0 }} key={i}>
                    {l}
                  </OverlayText>
                );
              } else {
                return <OverlayText key={i}>{l}</OverlayText>;
              }
            })}
          </OverlayLine>
          <OverlayLine>
            {["C", "O", "U", "L", "D"].map((l, i) => {
              if (l === "z") {
                return (
                  <OverlayText style={{ opacity: 0 }} key={i}>
                    {l}
                  </OverlayText>
                );
              } else {
                return <OverlayText key={i}>{l}</OverlayText>;
              }
            })}
          </OverlayLine>
          <OverlayLine>
            {["I", "z", "D", "O", "z"].map((l, i) => {
              if (l === "z") {
                return (
                  <OverlayText style={{ opacity: 0 }} key={i}>
                    {l}
                  </OverlayText>
                );
              } else {
                return <OverlayText key={i}>{l}</OverlayText>;
              }
            })}
          </OverlayLine>
          <OverlayLine>
            {["F", "O", "R", "z", "z"].map((l, i) => {
              if (l === "z") {
                return (
                  <OverlayText style={{ opacity: 0 }} key={i}>
                    {l}
                  </OverlayText>
                );
              } else {
                return <OverlayText key={i}>{l}</OverlayText>;
              }
            })}
          </OverlayLine>
          <OverlayLine>
            {["Y", "O", "U", "?", "z"].map((l, i) => {
              if (l === "z") {
                return (
                  <OverlayText style={{ opacity: 0 }} key={i}>
                    {l}
                  </OverlayText>
                );
              } else {
                return <OverlayText key={i}>{l}</OverlayText>;
              }
            })}
          </OverlayLine>
        </Overlay>
      </Frame>
    </ScrollDiv>
  );
}

export default ServHome;
