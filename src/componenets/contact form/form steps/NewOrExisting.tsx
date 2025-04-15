
type UserData = {
  newOrExisting: string;
};
type FormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function NewOrExisting({ newOrExisting, updateFields }: FormProps) {
  const handleButtonClick = (buttonType: string) => {
    const newValue = newOrExisting === buttonType ? "" : buttonType;
    updateFields({ newOrExisting: newValue });
  };

  return (
    <label>
      <p>and I would like to talk to you about</p>
      <button
        className="form-button"
        type="submit"
        name="choice"
        value="a new project"
        onClick={() => handleButtonClick("a new project")}
        style={{
          display: newOrExisting && newOrExisting !== "a new project" ? "none" : "block",
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
            newOrExisting && newOrExisting !== "an existing website" ? "none" : "block",
        }}
      >
        <p>an existing website</p>
      </button>
    </label>
  );
}
