import { forwardRef } from "react";
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

interface Props {
  center: boolean;
}

const SayHi = forwardRef<HTMLButtonElement, Props>(({ center }, ref) => {
  if (center === true) {
    return (
      <Button
        ref={ref}
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
    <Button ref={ref}>
      <p className="large mix-blend-diff">Say hi</p>
    </Button>
  );
});
SayHi.displayName = "SayHi";
export default SayHi;
