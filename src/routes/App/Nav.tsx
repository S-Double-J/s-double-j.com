import styled from "styled-components";

const Frame = styled.div`
  height: 75px;
  width: 100%;
  flex-shrink: 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1;
  grid-template-areas: "logo logo but but but but but but but but but but";
  position: sticky;
  top: 0;
  left: 0;
  box-sizing: border-box;
  border-bottom: 1px solid var(--fg);
   transition: border var(--color-transition) ease-in-out;
  z-index: 100;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  grid-area: but;
  box-sizing: border-box;
`;
const Button = styled.button`
  text-decoration: none;
  padding-bottom: 0;
  background: none;
  border: none;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  cursor: pointer;
  & p {
    cursor: pointer;
    margin-bottom: -3px;
  }
`;

const LogoContainer = styled.div`
  border-right: 1px solid var(--fg);
   transition: border var(--color-transition) ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: logo;
  width: 100%;
  box-sizing: border-box;
`;

function Nav() {
  return (
    <Frame>
      <LogoContainer>
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M3 53L3.00002 3H53V53L3 53Z" fill="#C4BBB6" />
          <path
            d="M30.5 10.5H10.5L10.5 20.5H30.5L30.5 30.5H10.5M38 10.5V38H10.5M10.5 45.5H45.5V10.5M3.00002 3L3 53L53 53V3H3.00002Z"
            stroke="#322F2E"
            stroke-width="5"
            stroke-linecap="square"
          />
        </svg>
      </LogoContainer>
      <ButtonContainer>
        <Button>
          <p>Home</p>
        </Button>
        <Button>
          <p>Services</p>
        </Button>
        <Button>
          <p>Index</p>
        </Button>
        <Button>
          <p>Contact</p>
        </Button>
      </ButtonContainer>
    </Frame>
  );
}

export default Nav;
