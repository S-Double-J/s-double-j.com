import { ReactElement, useState } from "react";

export default function multiStepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((i) => (i >= steps.length - 1 ? i : i + 1));
  }

  function back() {
    setCurrentStepIndex((i) => (i <= 0 ? i : i - 1));
  }

  function goTo(index: number) {
    setCurrentStepIndex(Math.min(Math.max(index, 0), steps.length - 1));
  }

  // Render all steps up to the current index
  const renderedSteps = steps.slice(0, currentStepIndex + 1).map((step, index) => (
    <div 
      key={index}
      className={`step ${index === currentStepIndex ? "active" : "completed"}`}
    >
      {step}
    </div>
  ));

  return {
    currentStepIndex,
    steps: renderedSteps,
    step: steps[currentStepIndex],  // Now returns all steps up to current
    goTo,
    next,
    back,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
}
