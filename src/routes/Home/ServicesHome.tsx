import styled from "styled-components";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React from "react";

const Frame = styled.section`
  display: flex;
  width: 100%;
  min-height: 100%;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
  flex-wrap: wrap;
  padding: 10px;
  box-sizing: border-box;
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
  color-scheme: light dark;
  background-color: light-dark(var(--light-bg), var(--dark-bg));
  border: 1px solid light-dark(var(--light-bg), var(--dark-bg));
  transform-style: preserve-3d;
  transform: translateZ(35px);
`;
const ServiceBg = styled(motion.div)`
  color-scheme: light dark;
  background-color: light-dark(var(--light-fg), var(--dark-fg));
  transform-style: preserve-3d;
  padding: 20px;
`;
const InnerTop = styled.div`
  display: flex;
  padding: 10px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
  color-scheme: light dark;
  border-top: 1px solid;
  border-top-color: light-dark(var(--light-fg), var(--dark-fg));
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
  color-scheme: light dark;
  border-top: 1px solid;
  border-top-color: light-dark(var(--light-fg), var(--dark-fg));
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
function ServicesHome() {
  const positiveDeg = "7deg";
  const negativeDeg = "-7deg";

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

  return (
    <Frame id="My Services">
      <ServiceBg
        onMouseMove={handleMouseMove1}
        onMouseLeave={handleMouseLeave1}
        style={{ rotateX: rotateX1, rotateY: rotateY1 }}
      >
        <Service>
          <InnerTop>
            <h1
              
              style={{
                fontSize: 140,
                fontWeight: 700,
                lineHeight: "105px",
                transform: bigZ,
              }}
            >
              CW
            </h1>
            <TopBottom>
              <p
                className="uppercase"
                style={{ transform: smallZ }}
              >
                commercial website
              </p>
            </TopBottom>
          </InnerTop>
          <InnerMid>
            <p  style={{ transform: smallZ }}>
              Sometimes you don’t need a website with all the techy trimmings
              and tiny designy details. Sometimes you just need to get online
              with a website that fulfils your business’s unique needs. Let's find those tangible results you’re looking for.
            </p>
          </InnerMid>
          <InnerBottom>
            <p  style={{ transform: smallZ }}>
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
        style={{ rotateX: rotateX2, rotateY: rotateY2 }}
      >
        <Service>
          <InnerTop>
            <h1
              
              style={{
                fontSize: 140,
                fontWeight: 700,
                lineHeight: "105px",
                transform: bigZ,
              }}
            >
              cp
            </h1>
            <TopBottom>
              <p
                className="uppercase"
                style={{ transform: smallZ }}
              >
                creative project
              </p>
            </TopBottom>
          </InnerTop>
          <InnerMid>
            <p  style={{ transform: smallZ }}>
              Do you need a state of the art website? Sweet. Creating
              interactive and interesting digital experiences is exactly what I
              love to do. Together we’ll find the overlap between aesthetics,
              cutting-edge tech, and creative thinking to make your websit turn
              heads.
            </p>
          </InnerMid>
          <InnerBottom>
            <p  style={{ transform: smallZ }}>
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
        style={{ rotateX: rotateX3, rotateY: rotateY3 }}
      >
        <Service>
          <InnerTop>
            <h1
              
              style={{
                fontSize: 140,
                fontWeight: 700,
                lineHeight: "105px",
                transform: bigZ,
              }}
            >
              cc
            </h1>
            <TopBottom>
              <p
                className="uppercase"
                style={{ transform: smallZ }}
              >
                content consultation
              </p>
            </TopBottom>
          </InnerTop>
          <InnerMid>
            <p  style={{ transform: smallZ }}>
              So you’re making your website yourself? You’re the type of person
              who likes to get their hands dirty. But there’s a lot going on
              when making a website, and maybe you don’t know where to start.
              I’ll help you get on your feet and find your voice.
            </p>
          </InnerMid>
          <InnerBottom>
            <p  style={{ transform: smallZ }}>
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
    </Frame>
  );
}

export default ServicesHome;
