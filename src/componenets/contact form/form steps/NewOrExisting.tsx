import { animate } from "motion";
import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";
type UserData = {
  newOrExisting: string;
};
type FormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function NewOrExisting({ newOrExisting, updateFields }: FormProps) {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const handleButtonClick = (buttonType: string) => {
    
    const newValue = newOrExisting === buttonType ? "" : buttonType;
    updateFields({ newOrExisting: newValue });
  };

useEffect(()=>{
  animate("label", { opacity: 1}, { delay: 0.3, duration: 0.4, ease: "easeIn" })
}, [isInView])

  return (
    <>
      <motion.label ref={ref} style={{opacity: 0}}>
        <p>and I would like to talk to you about</p>
        <button
          className="form-button"
          type="submit"
          name="choice"
          value="a new project"
          onClick={() => handleButtonClick("a new project")}
          style={{
            display:
              newOrExisting && newOrExisting !== "a new project"
                ? "none"
                : "block",
          }}
        >
          <p>a new project</p>
        </button>
        <button
          className="form-button"
          onClick={() => handleButtonClick("an existing website")}
          type="submit"
          name="choice"
          value="an existing website"
          style={{
            display:
              newOrExisting && newOrExisting !== "an existing website"
                ? "none"
                : "block",
          }}
        >
          <p>an existing website</p>
        </button>
      </motion.label>
      <div style={{ height: "40px" }} />
    </>
  );
}
