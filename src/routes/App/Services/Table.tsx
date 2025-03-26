import { useEffect, useRef } from "react";
import styled from "styled-components";

const Grid = styled.div`
  height: 100%;
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
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
`;
const Header = styled.h2`
  grid-area: header;
  font-size: 96px;
  text-transform: uppercase;
  margin-top: -40px;
`;
const ArtFrame = styled.div`
  grid-area: art;
  display: flex;

`;
const Art = styled.img`
  height: 100%;
`
const Description = styled.div`
  grid-area: desc;
  display: flex;
  flex-direction: column;
  justify-content: end;
  & > div {
    display: flex;
    flex-direction: column;
    text-align: justify;
    max-width: 500px
  }
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
  }
`;

function Table() {
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

  return (
    <>
      <Grid>
        <Header>commercial website</Header>
        <ArtFrame>
          <Art src={"src/assets/CW.svg"} />
        </ArtFrame>
        <Details>
          <div ref={detailsRef}>
            <p>Primary Objectives and Features</p>
            <ul>
              <li>Functionality</li>
              <li>Quicker production time</li>
              <li>Scalability</li>
              <li>Simplicity</li>
              <li>Samller price tag</li>
              <li>Front-end and Back-end focus</li>
              <li>UI/UX</li>
              <li>code or no-code</li>
            </ul>
          </div>
        </Details>
        <Description>
          <div ref={descRef}>
            <p>
              This service is ideal for those looking to get online quickly and
              simply, or for those working on a tighter budget. Maybe you want
              to see if your business idea will go the distance before you
              invest in a more state of the art website. Maybe you just want a
              simple landing page for your portfolio. Maybe you want a website
              that will scale as your business grows. If any of those statements
              are true, this is likely the service for you.
            </p>
          </div>
        </Description>
      </Grid>
    </>
  );
}

export default Table;
