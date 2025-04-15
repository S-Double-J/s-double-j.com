import { FormEvent } from "react";

type UserData = {
  projectType: string
}
type FormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function ProjectType({ projectType, updateFields }: FormProps) {
  const handleButtonClick = (buttonType: string, e: FormEvent) => {
    const newValue = projectType === buttonType ? "" : buttonType;
    updateFields({ projectType: newValue });
    
    if (newValue === "") {
      e.preventDefault();
    }
  };

  return (
    <label>
      <p>The project is a</p>
      {[
        "creative webite",
        "e-store", 
        "portfolio",
        "company website",
        "marketing website",
        "mobile app"
      ].map((type) => (
        <button
          key={type}
          type="submit"
          className="form-button"
          onClick={(e) => handleButtonClick(type, e)}
          style={{
            display: projectType && projectType !== type ? "none" : "block",
          }}
        >
          <p>{type}</p>
        </button>
      ))}
    </label>
  );
}