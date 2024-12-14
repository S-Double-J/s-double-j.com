import styled from "styled-components";

const Landing = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;
`;
const LandingInner = styled.div`
  width: 100%;
  max-width: 900px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
  position: absolute;
  bottom: 40px;
  right: 0px;
`;
const SayHi = styled.button`
  display: flex;
  padding: 10px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 1px solid light-dark(var(--light-fg), var(--dark-fg));
  background: none;
  cursor: pointer;
  position: fixed;
  right: 40px;
  bottom: 40px;
`;

function LandingPage() {
  return (
    <Landing>
      <h1 className="decorative">s-double-j</h1>
      <LandingInner>
        <h2 className="justify">
          I use the power of story, design & the latest technologies to
          transform your concept into a website that will turn heads.
        </h2>
      </LandingInner>
      <SayHi>
        <p>Say hi</p>
      </SayHi>
    </Landing>
  );
}

export default LandingPage;