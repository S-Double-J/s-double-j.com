import { useRef, useEffect } from "react";
import { animate } from "motion";
import { useInView } from "motion/react";

type UserData = {
  extraInfo: string;
};

type FormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function PS({ extraInfo, updateFields }: FormProps) {
  const psRef = useRef<HTMLSpanElement>(null);
  const ref = useRef(null)
  const isInView = useInView(ref)

useEffect(()=>{
  animate("label", { opacity: 1}, { delay: 0.3, duration: 0.4, ease: "easeIn" })
}, [isInView])

  // Sync the ps prop with the contentEditable element
  useEffect(() => {
    if (psRef.current && psRef.current.textContent !== extraInfo) {
extraInfo    }
  }, [extraInfo]);

  const handleInput = (e: React.FormEvent<HTMLSpanElement>) => {
    updateFields({ extraInfo: e.currentTarget.textContent || "" });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter") {
      e.stopPropagation();
    }
  };

  return (
    <label
    ref={ref}
      style={{
        paddingBottom: 10,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        width: "100%",
        opacity: 0
      }}
    >
      <p>P.S.</p>
      <span
        ref={psRef}
        className="form-span"
        role="textbox"
        contentEditable
        aria-placeholder="extra info"
        aria-required="true"
        inputMode="text"
        autoFocus
        aria-multiline="true"
        style={{
          border: "1px solid var(--fg)",
          borderRadius: 20,
          padding: "10px",
          boxSizing: "border-box",
        }}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        suppressContentEditableWarning={true}
      />
    </label>
  );
}