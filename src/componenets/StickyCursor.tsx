import styled from "styled-components";
import { motion, useMotionValue, useSpring } from "motion/react";
import { RefObject, useCallback, useEffect, useRef, useState } from "react";

const Cursor = styled(motion.div)`
  width: 10px;
  height: 20px;
  background-color: var(--fg-mb);
  mix-blend-mode: difference;
  position: fixed;
  border-radius: 999px;
  z-index: 99999;
  pointer-events: none;
`;

interface Props {
  stickyElements: {
    [key: string]: RefObject<HTMLAnchorElement>;
  };
}

function StickyCursor({ stickyElements }: Props) {
  const [hoveredElement, setHoveredElement] = useState<{
    ref: RefObject<HTMLAnchorElement>;
    key: string;
  } | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
 

  const cursorSize =
    hoveredElement && hoveredElement.ref.current
      ? hoveredElement.ref.current.getBoundingClientRect().width + 20
      : 20;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };


  // Store the hovered element in a ref to avoid stale closures
  const hoveredElementRef = useRef(hoveredElement);
  useEffect(() => {
    hoveredElementRef.current = hoveredElement;
  }, [hoveredElement]);

  const manageMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    const currentHovered = hoveredElementRef.current; // Use ref instead of state
    

    if (currentHovered?.ref.current) {
      const rect = currentHovered.ref.current.getBoundingClientRect();
      const { left, top, width, height } = rect;
      const center = { x: left + width / 2, y: top + height / 2 };
      const cursorSize = width + 40;
      console.log(center, cursorSize)

      mouse.x.set(center.x - (cursorSize / 2) + 10);
      mouse.y.set(center.y - (cursorSize / 2) + 10);
    } else {
      const cursorSize = 20;
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  }, []); // No dependencies needed now

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);
    return () => window.removeEventListener('mousemove', manageMouseMove);
  }, [manageMouseMove]);

  useEffect(() => {
    const elements = Object.entries(stickyElements);

    const mouseOverHandlers: Record<string, () => void> = {};
    const mouseLeaveHandlers: Record<string, () => void> = {};

    elements.forEach(([key, ref]) => {
      if (ref.current) {
        mouseOverHandlers[key] = () => {
          setHoveredElement({ ref, key });
        };
        mouseLeaveHandlers[key] = () => setHoveredElement(null);

        ref.current.addEventListener("mouseover", mouseOverHandlers[key]);
        ref.current.addEventListener("mouseleave", mouseLeaveHandlers[key]);
      } else {
      }
    });

    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);

      elements.forEach(([key, ref]) => {
        if (ref.current) {
          ref.current.removeEventListener("mouseover", mouseOverHandlers[key]);
          ref.current.removeEventListener(
            "mouseleave",
            mouseLeaveHandlers[key]
          );
        }
      });
    };
  }, [stickyElements]);



  return (
    <Cursor
      ref={cursorRef}
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}
      animate={{ height: cursorSize, width: cursorSize }}
    />
  );
}

export default StickyCursor;

