import styled from "styled-components";

const Frame = styled.div`
  width: 100%;
  height: calc(100svh - 75px);
  display: flex;
  gap: auto;
  flex-direction: column;
  padding: 8px;
  box-sizing: border-box;
`;
const Header = styled.h1`
  text-align: justify;
  color: var(--brutal-dark);
`;
const Big = styled.span`
  font-family: "Roboto Flex", sans-serif;
  font-optical-sizing: auto;
  font-weight: 1000;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -2px;
  font-variation-settings: "slnt" 0, "wdth" 100, "GRAD" 0, "XOPQ" 96, "XTRA" 468,
    "YOPQ" 79, "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712;
`;
const Impact = styled.span`
  font-family: "Climate Crisis", sans-serif;
  font-optical-sizing: auto;
  font-weight: 1000;
  font-style: normal;
  font-size: 64px;
  line-height: 48px;
  font-variation-settings: "YEAR" 1979;
  color: #c11616;
`;
const Websites = styled.span`
  font-family: "Coral Pixels", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 64px;
  line-height: 48px;
`;
const For = styled.span`
  font-family: "Baskervville", serif;
  font-optical-sizing: auto;
  font-style: normal;
`;
const Small = styled.span`
  font-family: "Roboto Flex", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -2px;
  font-variation-settings: "slnt" 0, "wdth" 100, "GRAD" 0, "XOPQ" 96, "XTRA" 468,
    "YOPQ" 79, "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712;
  color: #c11616;
`;
const Businesses = styled.span`
  font-family: "Xanh Mono", monospace;
  font-weight: 400;
  font-style: italic;
  line-height: 48px;
  font-size: 48px;
  color: #c11616;
`;
export default function Landing() {
  return (
    <Frame>
      <Header>
        <Big>BIG</Big> <Impact> IMPACT</Impact> <Websites> WEBSITES</Websites>
        <For> FOR</For>
        <Small> SMALL</Small> <Businesses> BUSINESSES</Businesses>
      </Header>
    </Frame>
  );
}
