import { useState } from "react";

type UserData = {
  name: string
}
type FormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export default function Name({name, updateFields}: FormProps) {
  const [hasContent, setHasContent] = useState(!!name.trim());

  const handleInput = (e: React.FormEvent<HTMLSpanElement>) => {
    const content = e.currentTarget.textContent || "";
    updateFields({name: content});
    const hasContent = content.trim();
    setHasContent(!!hasContent);
    e.currentTarget.style.borderBottom = "";
  };

  

  return (
    <label >
      <p>Hello, my name is</p>
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
        onKeyDown={(e) => {
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
        }}
        ref={(node) => {
          if (node && node.textContent !== name) {
            node.textContent = name;
          }
        }}
      />
      
    </label>
  );
}
