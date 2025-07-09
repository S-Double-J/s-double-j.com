import styled from "styled-components";
import { Link } from "react-router-dom";
import { forwardRef, RefObject } from "react";

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
  background-color: var(--bg);
  transition: all var(--color-transition) ease-in-out;
  z-index: 999;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-area: but;
  box-sizing: border-box;
  & > div {
    display: flex;
    align-items: end;
    justify-content: space-between;
    flex: 1 0 0;
    max-width: 900px;
  }
`;
const Button = styled.button`
  text-decoration: none;
  padding-bottom: 0;
  background: none;
  border: none;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
  & > Link {
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

interface NavProps {
  refs: {
    [key: string]: RefObject<HTMLAnchorElement>;
  };
}

const Nav = forwardRef<HTMLAnchorElement, NavProps>(function Nav({ refs }) {
  return (
    <Frame>
      <LogoContainer>
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M3 53L3.00002 3H53V53L3 53Z" fill="var(--bg)" />
          <path
            d="M30.5 10.5H10.5L10.5 20.5H30.5L30.5 30.5H10.5M38 10.5V38H10.5M10.5 45.5H45.5V10.5M3.00002 3L3 53L53 53V3H3.00002Z"
            stroke="var(--fg)"
            strokeWidth="5"
            strokeLinecap="square"
          />
        </svg>
      </LogoContainer>
      <ButtonContainer>
        <div>
          <Button>
            <Link ref={refs.home} className="link" to="/">
              Home
            </Link>
          </Button>
          <Button>
            <Link ref={refs.services} className="link" to="/services">
              Services
            </Link>
          </Button>
          <Button>
            <Link ref={refs.contact} className="link" to="/contact">
              Contact
            </Link>
          </Button>
        </div>
      </ButtonContainer>
    </Frame>
  );
});

export default Nav;
