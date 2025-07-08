import { motion } from "motion/react";
import styled from "styled-components";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
} from "react";

const SliderButtonContainer = styled.div`
  z-index: 1;
  grid-area: button;
  gap: 10px;
  align-items: center;
  justify-content: center;
  display: none;
  border: 1px solid var(--fg);
  width: max-content;
  height: max-content;
  padding: 5px 10px;
  border-radius: 999px;
  background: var(--bg);
  @media screen and (max-aspect-ratio: 1/1),
    screen and (max-height: 600px),
    screen and (min-aspect-ratio: 1/2) and (max-width: 800px),
    screen and (max-width: 1200px) and (max-height: 900px) {
    display: flex;
  }
`;
const SliderButton = styled.button`
  text-decoration: none;
  padding: 4px 8px;
  background: none;
  border-style: none;
  position: relative;
  mix-blend-mode: difference;
  z-index: 1;
  & > p {
    mix-blend-mode: difference;
    color: var(--fg-mb);
    text-transform: uppercase;
  }
`;
const ButtonCursor = styled(motion.div)`
  position: absolute;
  height: 25px;
  z-index: 0;
  border-radius: 999px;
  background-color: var(--brutal-dark);
`;  
type TabPosition = {
  left: number;
  width: number;
  desc: boolean
};
function Slider({tabPosition, setTabPosition}: {tabPosition: React.ComponentState, setTabPosition: Dispatch<SetStateAction<TabPosition>>}) {
  const ref1 = useRef<HTMLButtonElement>(null);
  const ref2 = useRef<HTMLButtonElement>(null);

useEffect(()=>{
    if (ref1.current){
       
    const { width } = ref1.current.getBoundingClientRect();
    const left = ref1.current.offsetLeft;
    const desc = false

    setTabPosition({ width, left, desc });
    }
}, [])
  return (
    <SliderButtonContainer>
      <Tab setTabPosition={setTabPosition} desc={false} refrence={ref1}>
        <p>Details at a glance</p>
      </Tab>
      <Tab setTabPosition={setTabPosition} desc={true} refrence={ref2}>
        <p>Full description</p>
      </Tab>

      <Highlight tabPosition={tabPosition} />
    </SliderButtonContainer>
  );
}

function Tab({
  children,
  setTabPosition,
  desc,
  refrence,
}: {
  children: ReactNode;
  setTabPosition: Dispatch<SetStateAction<TabPosition>>;
  desc: boolean;
  refrence: React.RefObject<HTMLButtonElement>;
}) {
  const handleInteraction = () => {
    if (!refrence.current) return;

    const { width } = refrence.current.getBoundingClientRect();
    const left = refrence.current.offsetLeft;

    setTabPosition({ width, left, desc });

  };
  return (
    <SliderButton ref={refrence} onClick={handleInteraction}>
      {children}
    </SliderButton>
  );
}

function Highlight({ tabPosition }: { tabPosition: TabPosition }) {
  return <ButtonCursor animate={tabPosition} />;
}

export default Slider ;