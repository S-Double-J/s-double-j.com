import { animate } from "motion";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  padding: 10px 40px;
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
  z-index: 20;
  cursor: pointer;
  transition: background-color var(--color-transition) ease-in-out;
  transition: opacity 0.3s ease-in-out;
  opacity: var(--sh-opacity);
  display: var(--sh-visibility);
  & > p {
    font-weight: 900;
    pointer-events: none;
  }
`;

const CenterButton = styled.button`
  display: flex;
  padding: 10px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: none;
  background: none;
  position: absolute;
  left: 50svw;
  top: 50svh;
  background-color: var(--fg-mb);
  mix-blend-mode: difference;
  z-index: 20;
  cursor: pointer;
  transition: background-color var(--color-transition) ease-in-out;
  transition: opacity 0.3s ease-in-out;
  opacity: var(--sh-cen-opacity);
  visibility: var(--sh-cen-visibility);
  & > p {
    font-weight: 900;
    pointer-events: none;
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
}

const SayHi = forwardRef<HTMLButtonElement, Props>(({ center }, ref) => {
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
        <p className="large mix-blend-diff">Say hi</p>
      </CenterButton>
    );
  } else {
    console.log('normal say hi should be rendered')
    return (
      <CustomLink
        id="SayHi-Button"
        to={{ pathname: "contact", hash: "form-grid" }}
      >
        <Button ref={ref}>
          <p className="large mix-blend-diff">Say hi</p>
        </Button>
      </CustomLink>
    );
  }
});
SayHi.displayName = "SayHi";
export default SayHi;
