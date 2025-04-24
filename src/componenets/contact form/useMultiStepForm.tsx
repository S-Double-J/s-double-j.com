import { ReactElement, useState } from "react";

export default function multiStepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((i) => (i >= steps.length - 1 ? i : i + 1));
  }

  const renderedSteps = steps
    .slice(0, currentStepIndex + 1)
    .map((step, index) => (
      <div
        key={index}
        className={`step ${
          index === currentStepIndex ? "active" : "completed"
        }`}
        style={{ width: index === steps.length - 1 ? "100%" : "auto" }}
      >
        {step}
      </div>
    ));

  return {
    currentStepIndex,
    renderedSteps,
    next,
    isLastStep: currentStepIndex === steps.length - 1,
  };
}
