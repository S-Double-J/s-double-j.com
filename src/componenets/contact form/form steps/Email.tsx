import { useState, useRef, useEffect } from "react";
import { animate } from "motion";
import { useInView } from "motion/react";

type UserData = {
  email: string;
};

type FormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function Email({ email, updateFields }: FormProps) {
  const [hasContent, setHasContent] = useState(!!email);
  const [showButton, setShowButton] = useState(true);
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
      setHasContent(!!email);
      setShowButton(false); // Hide button when email is loaded (already submitted)
    }
  }, [email]);

  const handleInput = (e: React.FormEvent<HTMLSpanElement>) => {
    const content = e.currentTarget.textContent || "";
    updateFields({ email: content });
    setHasContent(!!content.trim());
    
    // Show button again if content is edited
    if (!showButton) {
      setShowButton(true);
    }
    
    e.currentTarget.style.borderBottom = "";
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();

      if (hasContent) {
        setShowButton(false);
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

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const span = e.currentTarget.previousElementSibling as HTMLSpanElement;
    if (span) {
      if (hasContent) {
        setShowButton(false);
        const form = span.closest("form");
        if (form) {
          const submitEvent = new Event("submit", { bubbles: true });
          (submitEvent as any).submitter = span;
          form.dispatchEvent(submitEvent);
        }
      } else {
        span.style.borderBottom = "4px solid red";
        span.focus();
      }
    }
  };

  return (
    <label ref={ref} style={{ opacity: 0 }}>
      <p>You can email me back at</p>
      <div style={{ display: "flex", alignItems: "center" }}>
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
        {showButton && (
          <button
            onClick={handleButtonClick}
            tabIndex={-1}
            style={{
              background: "none",
              border: "none",
              color: "inherit",
              cursor: "pointer",
              marginLeft: "8px",
              fontSize: "inherit",
              fontFamily: "inherit",
              outline: "none",
              userSelect: "none",
              opacity: 1,
              transition: "opacity 0.2s ease"
            }}
            aria-label="Submit form"
            onMouseDown={(e) => e.preventDefault()}
          >
            [ Enter ]
          </button>
        )}
      </div>
    </label>
  );
}