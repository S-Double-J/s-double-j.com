import { FormEvent } from "react";
import { animate } from "motion";
import {  useInView } from "motion/react";
import { useEffect, useRef } from "react";

type UserData = {
  projectType: string
}
type FormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function ProjectType({ projectType, updateFields }: FormProps) {
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(()=>{
    animate("label", { opacity: 1}, { delay: 0.3, duration: 0.4, ease: "easeIn" })
  }, [isInView])

  const handleButtonClick = (buttonType: string, e: FormEvent) => {
    const newValue = projectType === buttonType ? "" : buttonType;
    updateFields({ projectType: newValue });
    
    if (newValue === "") {
      e.preventDefault();
    }
  };

  return (
    <label ref={ref} style={{opacity: 0}}>
      <p>The project is a</p>
      {[
        "creative webite",
        "e-store", 
        "portfolio",
        "company website",
        "marketing website",
        "mobile app"
      ].map((type) => (
        <button
          key={type}
          type="submit"
          className="form-button"
          onClick={(e) => handleButtonClick(type, e)}
          style={{
            display: projectType && projectType !== type ? "none" : "block",
          }}
        >
          <p>{type}</p>
        </button>
      ))}
    </label>
  );
}