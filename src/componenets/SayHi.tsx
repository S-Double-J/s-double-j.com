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
    console.log("button clicked", title, header);
    animate(title, { visibility: "hidden" }, { delay: 0.4 });
    animate(header, { visibility: "hidden" }, { delay: 0.4 });
    animate(button, { visibility: "hidden" }, { delay: 0.4 });
    animate(
      form,
      { opacity: 1 },
      { delay: 0.3, duration: 0.4, ease: "easeIn" }
    );
    animate(title, { opacity: 0 }, { duration: 0.4, ease: "easeInOut" });
    animate(header, { opacity: 0 }, { duration: 0.4, ease: "easeInOut" });
    animate(button, { opacity: 0 }, { duration: 0.4, ease: "easeInOut" });
  };
  if (center === true) {
    return (
      <Button
        onClick={handleClick}
        ref={ref}
        id="center-button"
        style={{
          bottom: "50%",
          right: "50%",
          transform: "translate(50%, 50%)",
          backgroundColor: "var(--absurd-light)",
          mixBlendMode: "normal",
          position: "absolute",
          opacity: "var(--sh-cen-opacity)",
          visibility:
            "var(--sh-cen-visibility)" as React.CSSProperties["visibility"],
        }}
      >
        <p className="large mix-blend-diff">Say hi</p>
      </Button>
    );
  }
  return (
    <CustomLink to='contact'>
      <Button ref={ref}>
        <p className="large mix-blend-diff">Say hi</p>
      </Button>
    </CustomLink>
  );
});
SayHi.displayName = "SayHi";
export default SayHi;
