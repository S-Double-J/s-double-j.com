import styled from "styled-components";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { IoTimeSharp } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";

const ScrollDiv = styled.div`
  width: 100%;
  height: calc((100lvh - 75px));
  flex-shrink: 0;
  display: flex;
  align-items: start;
  justify-content: start;
  position: relative;
  flex-direction: column;
  z-index: 1;
  @media screen and (max-width: 1270px) {
    height: calc((100lvh - 75px) * 3);
  }
`;
const Frame = styled(motion.div)`
  position: sticky;
  top: 75px;
  left: 0;
  display: flex;    flex-direction: column;
    height: max-content;
  padding: 20px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
  flex-shrink: 0;
  background-color: var(--bg);
  transition: background var(--color-transition) ease-in-out;
  z-index: 1;

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
  width: 450px;
  height: 450px;
  padding: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  background-color: var(--bg);
  transition: background var(--color-transition) ease-in-out;
  @media screen and (max-width: 769px) {
    width: 280px;
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
  & > div,
  h1,
  h2,
  h3,
  p {
    cursor: pointer;
  }
  @media screen and (max-width: 769px) {
    padding: 10px;
  }
`;

const InnerTop = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
  border-top: 1px solid;
  border-top-color: var(--fg);
  transition: border var(--color-transition) ease-in-out;
  transform-style: preserve-3d;
`;
const TopLeft = styled.div`
  display: flex;
  transform-style: preserve-3d;
`;
const TopRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
  transform-style: preserve-3d;
  text-align: right;
  padding-top: 10px;
`;
const InnerMid = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  align-items: flex-start;
  gap: 15px;
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
const Span = styled.span`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  box-sizing: border-box;
  transform-style: preserve-3d;
`;
const Price = styled(RiMoneyPoundCircleFill)`
  width: 20px;
  height: 20px;
  fill: var(--fg);
  mix-blend-mode: difference;
`;
const Time = styled(IoTimeSharp)`
  width: 20px;
  height: 20px;
  fill: var(--fg);
  mix-blend-mode: difference;
`;
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  transform-style: preserve-3d;
`;
const Tick = styled(SiTicktick)`
  color: var(--tick-green);
`;
function ServHomeMobile() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    layoutEffect: false,
    offset: ["start start", "end start"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const scale2 = useTransform(scrollYProgress, [0.33, 1], [1, 0.9]);

  return (
    <ScrollDiv ref={targetRef}>
      <Frame id="My Services">
        <OverlayContainer>
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
            style={{ scale: scale1 }}
          >
            <ServiceBg id="serviceBg1">
              <Service>
                <InnerTop>
                  <TopLeft>
                    <h2
                      className="services-home-h2"
                      style={{
                        fontWeight: 700,
                        lineHeight: "105px",
                      }}
                    >
                      CW
                    </h2>
                  </TopLeft>
                  <TopRight>
                    <Icons>
                      <Span>
                        <Price />
                        <p className="services-home ">
                          <b>
                            <i> £1500</i>
                          </b>
                        </p>
                      </Span>
                      <Span>
                        <Time />
                        <p className="services-home ">
                          <b>
                            <i> 2-4 weeks</i>
                          </b>
                        </p>
                      </Span>
                    </Icons>
                    <p className="uppercase ">commercial website</p>
                  </TopRight>
                </InnerTop>
                <InnerMid>
                  <p className="large">
                    <b> Your affordable launchpad.</b>
                  </p>
                  <p className="justify">
                    <Tick /> <b>5-page website</b> – Clean, fast, and
                    mobile-ready (£1500 flat fee)
                    <br />
                    <Tick /> <b>+£150 per extra page</b> – Scale as you grow
                    <br />
                    <Tick /> <b>Your choice of build</b> – Coded (recommended
                    for best results) or no-code
                    <br />
                    <Tick /> <b>Mobile-optimized & SEO-ready</b> – Designed to
                    help you get found
                  </p>
                </InnerMid>
                <InnerBottom>
                  <p className=" justify">01</p>
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
            style={{ top: `calc(-10% + 75px)`, scale: scale2 }}
          >
            <ServiceBg
              id="serviceBg2"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Service>
                <InnerTop>
                  <TopLeft>
                    <h2
                      className="services-home-h2"
                      style={{
                        fontWeight: 700,
                        lineHeight: "105px",
                      }}
                    >
                      CP
                    </h2>
                  </TopLeft>
                  <TopRight>
                    <Icons>
                      <Span>
                        <Price />
                        <p className="services-home small">
                          <b>
                            <i> Tailored quote</i>
                          </b>
                        </p>
                      </Span>
                      <Span>
                        <Time />
                        <p className="services-home small">
                          <b>
                            <i>6+ weeks</i>
                          </b>
                        </p>
                      </Span>
                    </Icons>
                    <p className="uppercase">creative project</p>
                  </TopRight>
                </InnerTop>
                <InnerMid>
                  <p className="large">
                    <b>For brands that want to own the spotlight.</b>
                  </p>
                  <p className="justify small">
                    <Tick /> <b>Fully custom design</b> – 3D animation, motion
                    graphics & interactive storytelling
                    <br />
                    <Tick /> <b>Zero templates</b> – A one-of-a-kind site that
                    mirrors your uniqueness
                    <br />
                    <Tick /> <b>High-performance</b> – Built to impress and
                    convert
                    <br />
                    <Tick /> <b>Collaborative process</b> – From concept to
                    launch, tailored to your vision
                  </p>
                </InnerMid>
                <InnerBottom>
                  <p className=" justify">02</p>
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
            style={{ top: `calc(-10% + 150px)` }}
          >
            <ServiceBg
              id="serviceBg3"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Service>
                <InnerTop>
                  <TopLeft>
                    <h2
                      className="services-home-h2"
                      style={{
                        fontWeight: 700,
                        lineHeight: "105px",
                      }}
                    >
                      WM
                    </h2>
                  </TopLeft>
                  <TopRight>
                    <Icons>
                      <Span>
                        <Price />
                        <p className="services-home small">
                          <b>
                            <i>£99/month</i>
                          </b>
                        </p>
                      </Span>
                      <Span>
                        <Time />
                        <p className="services-home small">
                          <b>
                            <i>2-4 weeks</i>
                          </b>
                        </p>
                      </Span>
                    </Icons>
                    <p className="uppercase ">website managment</p>
                  </TopRight>
                </InnerTop>
                <InnerMid>
                  <p className="large">
                    <b>Your website—always flawless, always covered.</b>
                  </p>
                  <p className="small justify">
                    <Tick /> <b>Free 5-page website</b> (worth £1500) – Just
                    £99/month
                    <br />
                    <Tick /> <b>Unlimited updates & support</b> – No request too
                    small
                    <br />
                    <Tick />
                    <b> Hosting + security included</b> – Zero tech stress
                    <br />
                    <Tick /> <b>6-month minimum, cancel anytime</b>
                  </p>
                </InnerMid>
                <InnerBottom>
                  <p className=" justify">03</p>
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

export default ServHomeMobile;
