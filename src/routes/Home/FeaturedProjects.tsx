import styled from "styled-components";
const Frame = styled.div`
    width: 100%;
    height:200%;
    position: relative;
    flex-shrink: 0;
`;

function FeaturedProjects(){
    return <Frame><h1 data-value="Test">Test</h1></Frame>
};

export default FeaturedProjects;