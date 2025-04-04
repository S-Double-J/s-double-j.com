import styled from "styled-components";

const Button = styled.button`
  display: flex;
  padding: 10px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: none;
  background: none;
  cursor: pointer;
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: var(--fg-mb);
  mix-blend-mode: difference;
  z-index: 20;
  transition: background-color var(--color-transition) ease-in-out;
  & > p {
    cursor: pointer;
    color: var(--fg-mb);
    mix-blend-mode: difference;
    font-weight: 900;
    border: transparent;
  }
`;

function SayHi() {
  return (
    <Button>
      <p className="large">Say hi</p>
    </Button>
  );
}

export default SayHi;