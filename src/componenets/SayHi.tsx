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
  transition: background-color var(--color-transition) ease-in-out;
  & > p {
    font-weight: 900;
    border: transparent;
  }
`;

interface Props {
  center: string;
}

function SayHi({ center }: Props) {
  if (center === "true") {
    return (
      <Button
        style={{
          bottom: "50%",
          right: "50%",
          transform: "translate(50%, 50%)",
          backgroundColor: "var(--absurd-light)",
          mixBlendMode: "normal",
          position: "absolute",
        }}
      >
        <p className="large" style={{ color: "var(--brutal-dark)" }}>
          Say hi
        </p>
      </Button>
    );
  }
  return (
    <Button>
      <p className="large mix-blend-diff">Say hi</p>
    </Button>
  );
}

export default SayHi;
