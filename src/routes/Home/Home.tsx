import styled from "styled-components";
import LandingPage from "./Landing";
import MyApproach from "./MyApproach";

const Frame = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 42px;
`;

function Home() {
  return (
    <Frame>
      <LandingPage />
      <MyApproach />
    </Frame>
  );
}

export default Home;
