import { animate } from "motion";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: none;
  background: none;
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: var(--fg-mb);
  mix-blend-mode: difference;
  z-index: 200;
  cursor: pointer;
  transition: background-color var(--color-transition) ease-in-out;
  transition: opacity 0.3s ease-in-out;
  opacity: var(--sh-opacity);
  display: var(--sh-visibility);
  & > p {
    pointer-events: none;
    color: var(--fg-mb);
    mix-blend-mode: difference;
    font-style: italic;
  }
`;

const CenterButton = styled.button`
  display: flex;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: none;
  background: none;
  position: absolute;
  left: 50vw;
  top: 50vh;
  transform: translate(-50%, -50%);
  background-color: var(--fg-mb);
  mix-blend-mode: difference;
  z-index: 20;
  cursor: pointer;
  transition: background-color var(--color-transition) ease-in-out;
  transition: opacity 0.3s ease-in-out;
  opacity: var(--sh-cen-opacity);
  visibility: var(--sh-cen-visibility);
  & > p {
    pointer-events: none;
    color: var(--fg-mb);
    mix-blend-mode: difference;
    font-style: italic;
  }
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  border: none;
  background-color: none;
  box-shadow: none;
`;

interface Props {
  center: boolean;
  card: boolean;
  bgColor?: string;
}

const SayHi = forwardRef<HTMLButtonElement, Props>(({ center, card, bgColor }, ref) => {
  const handleClick = () => {
    const title = document.getElementById("contact");
    const header = document.getElementById("header");
    const button = document.getElementById("center-button");
    const form = document.getElementById("form");
    if (title) animate(title, { visibility: "hidden" }, { delay: 0.4 });
    if (header) animate(header, { visibility: "hidden" }, { delay: 0.4 });
    if (button) animate(button, { visibility: "hidden" }, { delay: 0.4 });
    if (form)
      animate(
        form,
        { opacity: 1 },
        { delay: 0.3, duration: 0.4, ease: "easeIn" }
      );
    if (title)
      animate(title, { opacity: 0 }, { duration: 0.4, ease: "easeInOut" });
    if (header)
      animate(header, { opacity: 0 }, { duration: 0.4, ease: "easeInOut" });
    if (button)
      animate(button, { opacity: 0 }, { duration: 0.4, ease: "easeInOut" });
  };
  if (center === true) {
    return (
      <CenterButton onClick={handleClick} ref={ref} id="center-button">
        <p className="large">free quote</p>
      </CenterButton>
    );
  } else if (card === true) {
    return (
      <CustomLink
        id="SayHi-Button"
        to={{ pathname: "/contact", hash: "form-grid" }}
      >
        <Button ref={ref} style={{ position: "unset", padding: "8px 24px", backgroundColor: bgColor }}>
           <p>free quote</p>
        </Button>
      </CustomLink>
    );
  } else {
    return (
      <CustomLink
        id="SayHi-Button"
        to={{ pathname: "contact", hash: "form-grid" }}
      >
        <Button ref={ref}>
          <p className="large">free quote</p>
        </Button>
      </CustomLink>
    );
  }
});
SayHi.displayName = "SayHi";
export default SayHi;
