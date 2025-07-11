import "../../styles/App.css";
import "../../styles/textStyles.scss";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Nav from "../../componenets/Nav";
import StickyCursor from "../../componenets/StickyCursor";
import { useRef } from "react";
import SayHi from "../../componenets/SayHi";
import emailjs from "@emailjs/browser";
import ScrollToHashElement from "../../componenets/ScrollIntoView";

function App() {

  emailjs.init({ publicKey: "TvubRJoGGsFpnHNBQ" });
  const stickyElementRefs = {
    home: useRef<HTMLAnchorElement>(null),
    services: useRef<HTMLAnchorElement>(null),
    contact: useRef<HTMLAnchorElement>(null),
    sayHi: useRef<HTMLButtonElement>(null),
    sayHiCenter: useRef<HTMLButtonElement>(null),
    sayHiCard1: useRef<HTMLButtonElement>(null),
    sayHiCard2: useRef<HTMLButtonElement>(null),
    sayHiCard3: useRef<HTMLButtonElement>(null),
  };

  return (
    <>
      <StickyCursor stickyElements={stickyElementRefs} />
      <SayHi center={false} card={false} ref={stickyElementRefs.sayHi} />
      <SayHi key="centered" center={true} card={false} ref={stickyElementRefs.sayHiCenter} />
      <Nav
        refs={{
          home: stickyElementRefs.home,
          services: stickyElementRefs.services,
          contact: stickyElementRefs.contact,
        }}
      />
      <ScrollToHashElement />
      <Outlet
        context={{
          sayHi: stickyElementRefs.sayHi,
          sayHiCenter: stickyElementRefs.sayHiCenter,
          sayHiCard1: stickyElementRefs.sayHiCard1,
          sayHiCard2: stickyElementRefs.sayHiCard2,
          sayHiCard3: stickyElementRefs.sayHiCard3,
        }}
      />
      <ScrollRestoration getKey={(location) => location.pathname} />
    </>
  );
}

export default App;
