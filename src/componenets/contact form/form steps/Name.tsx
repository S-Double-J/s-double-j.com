import { useState } from "react";

type UserData = {
  name: string;
};
type FormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export default function Name({ name, updateFields }: FormProps) {
  const [hasContent, setHasContent] = useState(!!name.trim());
  const [showButton, setShowButton] = useState(true);

  const handleInput = (e: React.FormEvent<HTMLSpanElement>) => {
    const content = e.currentTarget.textContent || "";
    updateFields({ name: content });
    setHasContent(!!content.trim());

    // Show button again if content is edited after submission
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
    } else {
      return;
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
    <label>
      <p>Hello, my name is</p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span
          className="form-span"
          role="textbox"
          contentEditable
          aria-placeholder="your name"
          aria-required="true"
          inputMode="text"
          autoFocus
          aria-multiline="false"
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          ref={(node) => {
            if (node && node.textContent !== name) {
              node.textContent = name;
              setShowButton(false); // Hide button if name is pre-filled
            }
          }}
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
