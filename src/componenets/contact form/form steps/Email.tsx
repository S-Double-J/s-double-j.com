export function Email() {
  return (
    <>
      <label>
        <p>You can email me back at</p>
      </label>
      <span
        className="form-span"
        role="textbox"
        contentEditable="true"
        aria-placeholder="your email"
        aria-required="true"
        inputMode="text"
        autoFocus={true}
        aria-multiline="false"
        onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              e.stopPropagation()
              e.currentTarget.closest("form")?.requestSubmit();
            }
          }}
      />
    </>
  );
}
