import { useState } from 'react';

export default function Name() {
  const [hasContent, setHasContent] = useState(false);

  const handleInput = (e: React.FormEvent<HTMLSpanElement>) => {
    const content = e.currentTarget.textContent?.trim();
    setHasContent(!!content);
    e.currentTarget.style.borderBottom = "";
  };

  return (
    <label>
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
            if (hasContent) {
              e.currentTarget.closest("form")?.requestSubmit();
            } else {
              e.currentTarget.style.borderBottom = "2px solid red";
            }
          }
        }}
      />
    </label>
  );
}
