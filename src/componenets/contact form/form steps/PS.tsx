export function PS() {
    return (
      <label>
        <p>p.s.</p>
        <span
          className="form-span"
          role="textbox"
          contentEditable="true"
          aria-placeholder="extra info"
          aria-required="true"
          inputMode="text"
          autoFocus={true}
          aria-multiline="false"
        />
      </label>
    );
  }