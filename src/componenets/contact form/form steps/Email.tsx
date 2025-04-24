import { useState, useRef, useEffect } from "react";
import { animate } from "motion";
import {  useInView } from "motion/react";

type UserData = {
  email: string;
};

type FormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function Email({ email, updateFields }: FormProps) {
  const [hasContent, setHasContent] = useState(!!email);
  const emailRef = useRef<HTMLSpanElement>(null);

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    animate(
      "label",
      { opacity: 1 },
      { delay: 0.3, duration: 0.4, ease: "easeIn" }
    );
  }, [isInView]);

  // Sync the email prop with the contentEditable element
  useEffect(() => {
    if (emailRef.current && emailRef.current.textContent !== email) {
      emailRef.current.textContent = email;
    }
  }, [email]);

  const handleInput = (e: React.FormEvent<HTMLSpanElement>) => {
    const content = e.currentTarget.textContent || "";
    updateFields({ email: content });
    setHasContent(!!content.trim());
    e.currentTarget.style.borderBottom = "";
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();

      if (hasContent) {
        const form = e.currentTarget.closest("form");
        if (form) {
          const submitEvent = new Event("submit", { bubbles: true });
          (submitEvent as any).submitter = e.currentTarget;
          form.dispatchEvent(submitEvent);
        }
      } else {
        e.currentTarget.style.borderBottom = "4px solid red";
      }
    }
  };

  return (
    <label ref={ref} style={{opacity: 0}}>
      <p>You can email me back at</p>
      <span
        ref={emailRef}
        className="form-span"
        role="textbox"
        contentEditable
        aria-placeholder="your email"
        aria-required="true"
        inputMode="email"
        autoFocus
        aria-multiline="false"
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        suppressContentEditableWarning={true}
      />
    </label>
  );
}
