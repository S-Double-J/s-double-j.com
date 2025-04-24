import { FormEvent, useState } from "react";
import { animate } from "motion";
import {  useInView } from "motion/react";
import { useEffect, useRef } from "react";

type UserData = {
  requires: string[];
};

type FormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function Requires({ requires, updateFields }: FormProps) {
  const [localSelection, setLocalSelection] = useState<string[]>(requires);
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(()=>{
    animate("label", { opacity: 1}, { delay: 0.3, duration: 0.4, ease: "easeIn" })
  }, [isInView])

  const handleButtonClick = (buttonType: string) => {
    if(requires.length !== 0){
      updateFields({requires: []})
    }
    setLocalSelection(prev => 
      prev.includes(buttonType)
        ? prev.filter(item => item !== buttonType)
        : [...prev, buttonType]
    );


  };

  const handleSubmit = (e: FormEvent) => {
    if(localSelection.length === 0){
      e.preventDefault()
      return
    }
    updateFields({ requires: localSelection });
    // Form will submit naturally after state update
  };

  const buttonConfig = [
    { type: "content", label: "content consultation" },
    { type: "design", label: "design" },
    { type: "development", label: "development" },
  ];

  return (
    <label ref={ref} style={{opacity: 0}}>
      <p>which requires</p>
      {buttonConfig.map((button) => (
        <button
          key={button.type}
          className="form-button"
          type="button"
          onClick={() => handleButtonClick(button.type)}
          style={{
            display: requires.length > 0 && !requires.includes(button.type)
              ? "none"
              : "block",
            backgroundColor: localSelection.includes(button.type)
              ? "rgba(244, 192, 192, 0.5)"
              : "transparent",
              cursor: "pointer"
          }}
        >
          <p style={{cursor: "pointer"}}>{button.label}</p>
        </button>
      ))}
      <button
        className="form-enter-button"
        type="submit"
        onClick={(e) => handleSubmit(e)}
        style={{
          display: requires.length > 0 ? "none" : "block",
          cursor: "pointer"
        }}
      >
        <p style={{cursor: "pointer"}}>[ Enter ]</p>
      </button>
    </label>
  );
}