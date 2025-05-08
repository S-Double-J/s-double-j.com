import { MotionValue } from "motion/react";
import { motion, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import styled from "styled-components";
const Grid = styled(motion.div)`
  height: calc(100svh - 235px);
  width: calc(100% - 20px);
  padding: 40px;
  box-sizing: border-box;
  border-radius: 40px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:
    "header header header header header header header header header art art art"
    ". . . . . . . . . art art art"
    "details details details details . desc desc desc desc art art art"
    "details details details details . desc desc desc desc art art art"
    "details details details details . desc desc desc desc art art art"
    "details details details details . desc desc desc desc art art art";
  overflow: hidden;
  position: relative;
  top: -10%;
  @media screen and (max-aspect-ratio: 1/1) and (max-width: 500px) {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: end;
  }
`;
const Header = styled.h2`
  grid-area: header;
  font-size: 96px;
  text-transform: uppercase;
  margin-top: -20px;
  line-height: 90px;
  z-index: 1;
  width: min-content;
  @media screen and (max-aspect-ratio: 1/1) {
    font-size: 40px;
    line-height: 40px;
    margin-top: -6px;
    position: absolute;
    top: 20px;
  }
`;
const ArtFrame = styled.div`
  grid-area: art;
  display: flex;
  justify-content: end;
  position: relative;
  @media screen and (max-aspect-ratio: 1/1) and (max-width: 500px) {
    position: absolute;
    top: 20px;
    right: 5px;
    width: 100%;
    height: 90%;
    opacity: 0.6;
    @media (max-height: 835px){
      opacity: 0.5;
    }
  }
`;
const Art = styled.img`
  height: 100%;
`;
const Description = styled.div`
  grid-area: desc;
  display: flex;
  flex-direction: column;
  justify-content: end;
  & > div {
    display: flex;
    flex-direction: column;
    text-align: justify;
    max-width: 500px;
    & > p {
      @media screen and (max-width: 500px) {
        font-weight: 700;
      }
    }
  }

  z-index: 1;
`;
const Details = styled.div`
  grid-area: details;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: end;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > p,
    li {
      @media screen and (max-width: 500px) {
        font-weight: 700;
      }
    }
  }
  z-index: 1;
  @media screen and (max-width: 500px) and (max-height: 800px) {
    display: none;
  }
`;

interface Props {
  title: string;
  bPoints: string[];
  desc: string;
  artSrc: string;
  children: React.ReactNode;
  gridBgColor: string;
  textColor: string;
  i: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

function Card({
  title,
  bPoints,
  desc,
  artSrc,
  children,
  gridBgColor,
  textColor,
  i,
  progress,
  range,
  targetScale,
}: Props) {
  const descRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!descRef.current || !detailsRef.current) return;

    const updateHeight = () => {
      if (descRef.current && detailsRef.current) {
        if (descRef.current.offsetHeight > 240) {
          detailsRef.current.style.height = `${descRef.current.offsetHeight}px`;
        }
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(descRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <Grid
      style={{
        backgroundColor: gridBgColor,
        top: `calc(-5% + ${i * 50}px)`,
        scale,
      }}
    >
      <Header style={{ color: textColor }}>{title}</Header>
      <ArtFrame id="CP-art">
        {children}
        <Art src={artSrc} />
      </ArtFrame>
      <Description>
        <div ref={descRef}>
          <p style={{ color: textColor, zIndex: 1 }}>{desc}</p>
        </div>
      </Description>
      <Details>
        <div ref={detailsRef}>
          <p style={{ color: textColor }}>Primary Objectives and Features</p>
          <ul>
            {bPoints.map((t, i) => (
              <li key={i} style={{ color: textColor }}>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Details>
    </Grid>
  );
}

export default Card;
