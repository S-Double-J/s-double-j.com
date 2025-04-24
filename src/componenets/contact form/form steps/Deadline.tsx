import { animate } from "motion";
import { useInView } from "motion/react";
import { useEffect, useRef } from "react";

type UserData = {
  deadline: string;
};

type FormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function Deadline({ deadline, updateFields }: FormProps) {
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(()=>{
    animate("label", { opacity: 1}, { delay: 0.3, duration: 0.4, ease: "easeIn" })
  }, [isInView])

  const handleButtonClick = (buttonType: string) => {
    const newValue = deadline === buttonType ? "" : buttonType;
    updateFields({ deadline: newValue });
  };

  const deadlineOptions = ["ASAP", "3 months", "6 months", "no set deadline"];

  return (
    <>
      <label ref={ref} style={{opacity: 0}}>
        <p>and would need to be completed in</p>
        {deadlineOptions.map((option) => (
          <button
            key={option}
            type="submit"
            className="form-button"
            onClick={() => handleButtonClick(option)}
            style={{
              display: deadline && deadline !== option ? "none" : "block",
            }}
          >
            <p>{option}</p>
          </button>
        ))}
      </label>
      <div style={{ height: "40px" }} />
    </>
  );
}
