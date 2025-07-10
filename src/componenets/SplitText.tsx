import { motion } from "motion/react";

export const SplitText = ({ children }: { children: string[] }) => {
  const DURATION = 0.18;
  const STAGGER = 0.03;
  const EASE = "easeInOut";

  return (
    <motion.p
      className="page-subtitle-brackets-container large"
      initial="initial"
      animate="hovered"
    >
      {children.map((line, lineIndex) => {
        if (lineIndex === 0)
          return (
            <div key={lineIndex}>
              {line.split("").map((letter, letterIndex) => (
                <motion.span
                  key={lineIndex * letterIndex}
                  variants={{
                    initial: { y: 0 },
                    hovered: { y: "-100%" },
                  }}
                  style={{ display: "inline-block" }}
                  transition={{
                    duration: DURATION,
                    ease: EASE,
                    delay: STAGGER * letterIndex,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 2,
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>
          );
        else
          return (
            <div key={lineIndex} style={{ position: "absolute", inset: 0 }}>
              {line.split("").map((letter, letterIndex) => (
                <motion.span
                  key={lineIndex * letterIndex}
                  variants={{
                    initial: {
                      y: `${lineIndex * 100}%`,
                    },
                    hovered: { y: `${lineIndex * 100 - 100}%` },
                  }}
                  style={{ display: "inline-block" }}
                  transition={{
                    duration: DURATION,
                    ease: EASE,
                    delay: STAGGER * letterIndex,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 2,
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>
          );
      })}
    </motion.p>
  );
};
