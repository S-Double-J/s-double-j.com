import styled from "styled-components";

const Grid = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  flex-shrink: 0;
  display: grid;
  width: 100%;
  height: calc(100svh - 75px);
  padding: 20px;
  box-sizing: border-box;
  grid-template-columns: repeat(12, minmax(0, 1fr)); /* Constrain columns */
  grid-template-rows: repeat(6, minmax(0, 1fr)); /* Constrain rows */
  grid-template-areas:
    ". . . . art art art art art art art art"
    ". . . . art art art art art art art art"
    "Text Text Text Text art art art art art art art art"
    "Text Text Text Text art art art art art art art art"
    "Text Text Text Text art art art art art art art art"
    "Text Text Text Text art art art art art art art art";
    background-color: var(--bg)
`;

const TextBox = styled.div`
  align-self: end;
  grid-area: Text;
  display: flex;
  height: max-content;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
  border-radius: 40px 40px 40px 0px;
  border: 40px solid var(--bh-red);
  background: var(--bh-red);
  box-sizing: border-box;
  gap: 40px;
  position: relative;
  & > p {
    color: var(--bh-light);
    text-align: justify;
  }
`;

const ArtBox = styled.div`
  grid-area: art;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

function CoverText() {
  return (
    <Grid>
      <TextBox>
        <p>
          Every project is unique, with its own set of goals and challenges.
          That’s why I offer a range of services designed to meet a variety of
          needs. It all starts with a conversation—we’ll get to know each other,
          discuss your vision, and uncover your goals and expectations. From
          there, I’ll take the time to craft a tailored plan that brings your
          ideas to life.
        </p>
        <p>
          Explore the services I offer to see how we can collaborate to create
          something truly special.
        </p>
      </TextBox>
      <ArtBox><img src="src/assets/CoverArt.svg" /></ArtBox>
    </Grid>
  );
}

export default CoverText;
