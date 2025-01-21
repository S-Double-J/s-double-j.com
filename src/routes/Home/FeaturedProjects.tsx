import styled from "styled-components";
const Frame = styled.section`
  width: 100%;
  height: 200%;
  position: relative;
  flex-shrink: 0;
`;
const Project = styled.div`
  width: 100%;
  height: 50%;
  background: white;
`;
function FeaturedProjects() {
  return (
    <Frame id="Featured Projects">
      <Project></Project>
    </Frame>
  );
}

export default FeaturedProjects;
