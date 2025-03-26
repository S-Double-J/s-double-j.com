import "../../styles/App.css";
import "../../styles/textStyles.scss";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Nav from "./Nav";
import styled from "styled-components";

const Frame = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background: var(--bg);
  transition: background var(--color-transition) ease-in-out;
  position: relative;
`;
function App() {
  return (
    <Frame id="app-frame">
      <Nav />
      <Outlet />
      <ScrollRestoration
        getKey={(location) => {
          return location.pathname;
        }}
      />
    </Frame>
  );
}

export default App;
