import styled from "styled-components";
import { motion, useMotionValue, useSpring } from "motion/react";
import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const Cursor = styled(motion.div)`
  background-color: var(--fg-mb);
  mix-blend-mode: difference;
  position: fixed;
  border-radius: 999px;
  z-index: 99999;
  pointer-events: none;
  @media (hover: none) {
    display: none;
  }
`;

interface Props {
  stickyElements: {
    [key: string]: RefObject<HTMLAnchorElement> | RefObject<HTMLButtonElement>;
  };
}

function StickyCursor({ stickyElements }: Props) {
  const [hoveredElement, setHoveredElement] = useState<{
    ref: RefObject<HTMLAnchorElement> | RefObject<HTMLButtonElement>;
    key: string;
  } | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  // Store the hovered element in a ref to avoid stale closures
  const hoveredElementRef = useRef(hoveredElement);
  useEffect(() => {
    hoveredElementRef.current = hoveredElement;
  }, [hoveredElement]);

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

  const manageMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    const currentHovered = hoveredElementRef.current; // Use ref instead of state

    if (currentHovered?.ref.current) {
      const rect = currentHovered.ref.current.getBoundingClientRect();
      const { left, top, width, height } = rect;
      const center = { x: left + width / 2, y: top + height / 2 };
      const cursorSize = width + 20;

      mouse.x.set(center.x - cursorSize / 2);
      mouse.y.set(center.y - cursorSize / 2);
    } else {
      const cursorSize = 20;
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  }, []);
  const location = useLocation();
  useEffect(() => {
    const elements = Object.entries(stickyElements);

    const mouseOverHandlers: Record<string, () => void> = {};
    const mouseLeaveHandlers: Record<string, () => void> = {};

    elements.forEach(([key, ref]) => {
      console.log("key; ", key, "ref: ", ref);
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
  }, [stickyElements, location.key]);

  return (
    <Cursor
      className="cursor"
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
