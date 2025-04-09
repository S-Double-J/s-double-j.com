import "../../styles/App.css";
import "../../styles/textStyles.scss";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Nav from "../../componenets/Nav";
import styled from "styled-components";
import StickyCursor from "../../componenets/StickyCursor";
import { useRef } from "react";

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
  const stickyElementRefs = {
    home: useRef<HTMLAnchorElement>(null),
    services: useRef<HTMLAnchorElement>(null),
    contact: useRef<HTMLAnchorElement>(null),
  };
  return (
    <Frame id="app-frame">
      <StickyCursor stickyElements={stickyElementRefs} />
      <Nav refs={stickyElementRefs} />
      <Outlet />
      <ScrollRestoration getKey={(location) => location.pathname} />
    </Frame>
  );
}

export default App;
