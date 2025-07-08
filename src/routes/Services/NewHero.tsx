import { useScroll, useTransform, motion } from "motion/react";
import styled from "styled-components";

const Frame = styled(motion.div)`
  width: 100%;
  padding: 50px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: sticky;
  top: 75px;
  background: var(--bg);
`;

function NewHero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.2, 0.3], [1, 0]);

  return (
    <Frame style={{ opacity }}>
      <svg
        width="150"
        height="200"
        viewBox="0 0 150 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="25"
          cy="100"
          r="25"
          transform="rotate(-90 25 100)"
          fill="#9A4034"
        />
        <path
          d="M50 0C105.228 0 150 44.7715 150 100C150 155.228 105.228 200 50 200V0Z"
          fill="#322F2E"
        />
      </svg>

      <motion.h1 className="page-title">services</motion.h1>

      <svg
        width="160"
        height="200"
        viewBox="0 0 160 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="path-2-inside-1_796_512" fill="white">
          <path d="M105 0V0C49.7715 0 5 44.7715 5 100V100C5 155.228 49.7715 200 105 200V200L105 0Z" />
        </mask>
        <path
          d="M105 -5C47.0101 -5 0 42.0101 0 100H10C10 47.5329 52.5329 5 105 5V-5ZM0 100C0 157.99 47.0101 205 105 205L105 195C52.5329 195 10 152.467 10 100H0ZM105 200L105 0L105 200ZM105 -5C47.0101 -5 0 42.0101 0 100C0 157.99 47.0101 205 105 205L105 195C52.5329 195 10 152.467 10 100C10 47.5329 52.5329 5 105 5V-5Z"
          fill="#322F2E"
          mask="url(#path-2-inside-1_796_512)"
        />
        <g clip-path="url(#clip0_796_512)">
          <mask id="path-4-inside-2_796_512" fill="white">
            <path d="M105 180V180C60.8172 180 25 144.183 25 100V100C25 55.8172 60.8172 20 105 20V20L105 180Z" />
          </mask>
          <g clip-path="url(#clip1_796_512)">
            <mask id="path-6-inside-3_796_512" fill="white">
              <path d="M105 160V160C71.8629 160 45 133.137 45 100V100C45 66.8629 71.8629 40 105 40V40L105 160Z" />
            </mask>
            <mask id="path-8-inside-4_796_512" fill="white">
              <path d="M105 140V140C82.9086 140 65 122.091 65 100V100C65 77.9086 82.9086 60 105 60V60L105 140Z" />
            </mask>
            <path
              d="M105 145C80.1472 145 60 124.853 60 100L70 100C70 119.33 85.67 135 105 135L105 145ZM60 100C60 75.1472 80.1472 55 105 55L105 65C85.67 65 70 80.67 70 100L60 100ZM105 60L105 140L105 60ZM105 145C80.1472 145 60 124.853 60 100L60 100C60 75.1472 80.1472 55 105 55L105 65C85.67 65 70 80.67 70 100L70 100C70 119.33 85.67 135 105 135L105 145Z"
              fill="#322F2E"
              mask="url(#path-8-inside-4_796_512)"
            />
          </g>
          <path
            d="M105 165L105 165C69.1015 165 40 135.899 40 100L50 100C50 130.376 74.6243 155 105 155L105 165ZM40 100C40 64.1015 69.1015 35 105 35L105 35L105 45C74.6243 45 50 69.6243 50 100L40 100ZM105 40L105 160L105 40ZM105 165C69.1015 165 40 135.899 40 100L40 100C40 64.1015 69.1015 35 105 35L105 45C74.6243 45 50 69.6243 50 100L50 100C50 130.376 74.6243 155 105 155L105 165Z"
            fill="#322F2E"
            mask="url(#path-6-inside-3_796_512)"
          />
        </g>
        <path
          d="M105 185C58.0558 185 20 146.944 20 100L30 100C30 141.421 63.5787 175 105 175L105 185ZM20 100C20 53.0558 58.0558 15 105 15L105 25C63.5786 25 30 58.5786 30 100L20 100ZM105 20L105 180L105 20ZM105 185C58.0558 185 20 146.944 20 100L20 100C20 53.0558 58.0558 15 105 15L105 25C63.5786 25 30 58.5786 30 100L30 100C30 141.421 63.5787 175 105 175L105 185Z"
          fill="#322F2E"
          mask="url(#path-4-inside-2_796_512)"
        />
        <circle
          cx="130"
          cy="100"
          r="25"
          transform="rotate(-90 130 100)"
          fill="#9A4034"
        />
        <defs>
          <clipPath id="clip0_796_512">
            <path
              d="M105 180V180C60.8172 180 25 144.183 25 100V100C25 55.8172 60.8172 20 105 20V20L105 180Z"
              fill="white"
            />
          </clipPath>
          <clipPath id="clip1_796_512">
            <path
              d="M105 160V160C71.8629 160 45 133.137 45 100V100C45 66.8629 71.8629 40 105 40V40L105 160Z"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
    </Frame>
  );
}

export default NewHero;
