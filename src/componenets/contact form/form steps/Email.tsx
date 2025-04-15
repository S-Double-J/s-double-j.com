import { useState, useRef, useEffect } from "react";

type UserData = {
  email: string;
};

type FormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function Email({ email, updateFields }: FormProps) {
  const [hasContent, setHasContent] = useState(!!email);
  const emailRef = useRef<HTMLSpanElement>(null);

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
    <label>
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