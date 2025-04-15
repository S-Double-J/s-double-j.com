import "../../styles/App.css";
import "../../styles/textStyles.scss";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Nav from "../../componenets/Nav";
import styled from "styled-components";
import StickyCursor from "../../componenets/StickyCursor";
import { useRef } from "react";
import SayHi from "../../componenets/SayHi";
import emailjs from "@emailjs/browser";

const Frame = styled.div`
  display: flex;
  width: 100%;
  height: 100svh;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background: var(--bg);
  transition: background var(--color-transition) ease-in-out;
  position: relative;
`;
function App() {
  emailjs.init({ publicKey: "TvubRJoGGsFpnHNBQ" });
  const stickyElementRefs = {
    home: useRef<HTMLAnchorElement>(null),
    services: useRef<HTMLAnchorElement>(null),
    contact: useRef<HTMLAnchorElement>(null),
    sayHi: useRef<HTMLButtonElement>(null),
    sayHiCenter: useRef<HTMLButtonElement>(null),
  };
  return (
    <Frame id="app-frame">
      <StickyCursor stickyElements={stickyElementRefs} />
      <SayHi center={false} ref={stickyElementRefs.sayHi} />
      <SayHi key="centered" center={true} ref={stickyElementRefs.sayHiCenter} />
      <Nav
        refs={{
          home: stickyElementRefs.home,
          services: stickyElementRefs.services,
          contact: stickyElementRefs.contact,
        }}
      />
      <Outlet
        context={{
          sayHi: stickyElementRefs.sayHi,
          sayHiCenter: stickyElementRefs.sayHiCenter,
        }}
      />
      <ScrollRestoration getKey={(location) => location.pathname} />
    </Frame>
  );
}

export default App;
