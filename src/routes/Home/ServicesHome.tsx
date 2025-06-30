import styled from "styled-components";
import {
  motion,
  useAnimate,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const ScrollDiv = styled.div`
  width: 100%;
  height: calc((100lvh - 75px) * 3);
  flex-shrink: 0;
  display: flex;
  align-items: start;
  justify-content: start;
  position: relative;
  flex-direction: column;
  z-index: 1;
`;
const Frame = styled(motion.div)`
  position: sticky;
  top: 75px;
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
  z-index: 1;
  @media screen and (max-width: 1270px) {
    display: flex;
    flex-direction: column;
    height: max-content;
  }
`;
const Container = styled.div`
  height: calc(100svh - 75px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 75px;
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
  @media screen and (max-width: 1570px) {
    width: 250px;
    height: 350px;
  }
  @media screen and (max-width: 1270px) {
    width: 450px;
    height: 450px;
  }
  @media screen and (max-width: 700px) {
    width: 250px;
    height: 350px;
    padding: 20px;
  }
`;
const ServiceBg = styled(motion.div)`
  background-color: var(--fg);
  transform-style: preserve-3d;
  padding: 20px;
  transition: background var(--color-transition) ease-in-out;
  cursor: pointer;
  opacity: 0;
  & > div,
  h1,
  h2,
  h3,
  p {
    cursor: pointer;
  }
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
const TopTop = styled.div`
width: 100%;
  display: flex;
  gap: 20px;
  justify-content: space-between;
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
  @media screen and (max-width: 1570px) {
    & > p {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 1270px) {
    & > p {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 700px) {
    & > p {
      font-size: 12px;
    }
  }
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
  @media screen and (max-width: 1570px) {
    & > p {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 1270px) {
    & > p {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 700px) {
    & > p {
      font-size: 12px;
    }
  }
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
const OverlayContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  mix-blend-mode: exclusion;
  pointer-events: none;
`;
const Overlay = styled.div`
  display: flex;
  width: 100%;
  height: calc(100svh - 75px);
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  position: sticky;
  top: 75px;
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
  @media screen and (max-aspect-ratio: 1/1) {
    font-size: 20vw;
    margin-top: 0;
    margin-bottom: 0;
  }
`;
const ProgressIcon = styled(motion.svg)`
  position: absolute;
  top: 5px;
  right: 0px;
  stroke: var(--fg);
  mix-blend-mode: exclusion;
  fill: none;
`;
const ProgressIconBg = styled(motion.circle)`
  stroke-width: 10;
  opacity: 0.2;
`;
const ProgressIconIndication = styled(motion.circle)`
  stroke-dashoffset: 0;
  stroke-width: 10;
`;
const CustomLink = styled(motion(Link))`
  text-decoration: none;
  border: none;
  background-color: none;
  box-shadow: none;
  position: relative;
  @media screen and (max-width: 1270px) {
    top: -10%;
  }
`;

function ServHome() {
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
    console.log("element hovered");
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
  const targetRef = useRef(null);
  const { scrollYProgress } = columnLayout
    ? useScroll({
        target: targetRef,
        layoutEffect: false,
        offset: ["start start", "end start"],
      })
    : useScroll({
        target: targetRef,
        layoutEffect: false,
      });

  const [scope, animate] = useAnimate();

  const isInView = columnLayout
    ? useInView(scope, { once: true, amount: "some" })
    : useInView(scope, { once: true, amount: 0.5 });
  const duration = 2.5;
  const bounce = 0.4;

  useEffect(() => {
    if (isInView) {
      animate(
        "#serviceBg1",
        { y: "0vh", opacity: 1 },
        {
          type: "spring",
          duration: duration * 0.6,
          bounce: bounce + 0.1,
          delay: 0.5,
        }
      );
      animate(
        "#serviceBg2",
        { y: "0vh", opacity: 1 },
        {
          type: "spring",
          duration: duration * 0.8,
          bounce: bounce,
          delay: 0.1,
        }
      );
      animate(
        "#serviceBg3",
        { y: "0vh", opacity: 1 },
        {
          type: "spring",
          duration: duration,
          bounce: bounce,
        }
      );
    }
  }, [isInView]);

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const scale2 = useTransform(scrollYProgress, [0.33, 1], [1, 0.9]);

  return (
    <ScrollDiv ref={targetRef}>
      <Frame id="My Services" ref={scope}>
        <OverlayContainer>
          <ProgressIcon
            width="75"
            height="75"
            viewBox="0 0 100 100"
            style={columnLayout ? { opacity: 0 } : undefined}
          >
            <ProgressIconBg
              cx="50"
              cy="50"
              r="40"
              pathLength="1"
              className="bg"
            />
            <ProgressIconIndication
              cx="50"
              cy="50"
              r="40"
              pathLength="1"
              style={{
                pathLength: scrollYProgress,
              }}
            />
          </ProgressIcon>
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
        </OverlayContainer>
        <Container>
          <CustomLink
            to={{ pathname: "services", hash: "CW" }}
            style={columnLayout ? { scale: scale1 } : undefined}
          >
            <ServiceBg
              id="serviceBg1"
              onMouseMove={handleMouseMove1}
              onMouseLeave={handleMouseLeave1}
              style={
                columnLayout
                  ? {
                      rotateX: rotateX1,
                      rotateY: rotateY1,
                      opacity: 1,
                    }
                  : {
                      rotateX: rotateX1,
                      rotateY: rotateY1,
                      y: "-150vh",
                    }
              }
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Service>
                <InnerTop>
                  <TopTop>
                    <h2
                      className="services-home-h2"
                      style={{
                        fontWeight: 700,
                        lineHeight: "105px",
                        transform: bigZ,
                      }}
                    >
                      CW
                    </h2>
                    <p
                      className="services-home small"
                      style={{ transform: smallZ }}
                    >
                      Prices starting at
                      <b>
                        <i> £1500</i>
                      </b>
                      . <br /> 2-4 weeks estimated timeframe.
                    </p>
                  </TopTop>
                  <TopBottom>
                    <p className="uppercase " style={{ transform: smallZ }}>
                      commercial website
                    </p>
                  </TopBottom>
                </InnerTop>
                <InnerMid>
                  <p className=" justify" style={{ transform: smallZ }}>
                    Sometimes you just need to get online hassle free and within
                    budget. <br />
                    <br />
                    This service starts at a flat fee of £1500 for a five page
                    website + £150 for every extra page thereafter.
                  </p>
                </InnerMid>
                <InnerBottom>
                  <p className=" justify" style={{ transform: smallZ }}>
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
          </CustomLink>
        </Container>
        <Container>
          <CustomLink
            to={{ pathname: "services", hash: "CP" }}
            style={
              columnLayout
                ? { top: `calc(-10% + 75px)`, scale: scale2 }
                : undefined
            }
          >
            <ServiceBg
              id="serviceBg2"
              onMouseMove={handleMouseMove2}
              onMouseLeave={handleMouseLeave2}
              style={
                columnLayout
                  ? {
                      rotateX: rotateX2,
                      rotateY: rotateY2,
                      opacity: 1,
                    }
                  : {
                      rotateX: rotateX2,
                      rotateY: rotateY2,
                      y: "-150vh",
                    }
              }
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Service>
                <InnerTop>
                  <TopTop>
                    <h2
                      className="services-home-h2"
                      style={{
                        fontWeight: 700,
                        lineHeight: "105px",
                        transform: bigZ,
                      }}
                    >
                      CP
                    </h2>
                    <p className="services-home" style={{ transform: smallZ }}>
                      Tailored quotes for every project. <br /> 6 weeks minimum
                      estimated timeframe.
                    </p>
                  </TopTop>
                  <TopBottom>
                    <p className="uppercase " style={{ transform: smallZ }}>
                      creative project
                    </p>
                  </TopBottom>
                </InnerTop>
                <InnerMid>
                  <p className=" justify" style={{ transform: smallZ }}>
                    Do you want a cutting edge website that turns heads? <br />
                    <br />
                    This service uses motion, animation and creativity to
                    express exactly what makes you / your business unique.
                  </p>
                </InnerMid>
                <InnerBottom>
                  <p className=" justify" style={{ transform: smallZ }}>
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
          </CustomLink>
        </Container>
        <Container>
          <CustomLink
            to={{ pathname: "services", hash: "CC" }}
            style={columnLayout ? { top: `calc(-10% + 150px)` } : undefined}
          >
            <ServiceBg
              id="serviceBg3"
              onMouseMove={handleMouseMove3}
              onMouseLeave={handleMouseLeave3}
              style={
                columnLayout
                  ? {
                      rotateX: rotateX3,
                      rotateY: rotateY3,
                      opacity: 1,
                    }
                  : {
                      rotateX: rotateX3,
                      rotateY: rotateY3,
                      y: "-150vh",
                    }
              }
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Service>
                <InnerTop>
                  <TopTop>
                    <h2
                      className="services-home-h2"
                      style={{
                        fontWeight: 700,
                        lineHeight: "105px",
                        transform: bigZ,
                      }}
                    >
                      WM
                    </h2>
                    <p className="services-home" style={{ transform: smallZ }}>
                     <b><i> £99</i></b> per month. <br /> Lifetime updates and support.
                    </p>
                  </TopTop>
                  <TopBottom>
                    <p className="uppercase " style={{ transform: smallZ }}>
                      website managment
                    </p>
                  </TopBottom>
                </InnerTop>
                <InnerMid>
                  <p className=" justify" style={{ transform: smallZ }}>
                    This service is made to give you peace of mind. <br />
                    <br />
                    You’ll have access to all my experience for the lifetime of
                    your website so you can focus on the important stuff, like
                    running your business.
                  </p>
                </InnerMid>
                <InnerBottom>
                  <p className=" justify" style={{ transform: smallZ }}>
                    03
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
          </CustomLink>
        </Container>
      </Frame>
    </ScrollDiv>
  );
}

export default ServHome;
