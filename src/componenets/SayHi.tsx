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
  background-color: var(--brutal-mb-light);
  mix-blend-mode: difference;
  z-index: 20;
  & > p {
    cursor: pointer;
    color: var(--brutal-mb-light);
    mix-blend-mode: difference;
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