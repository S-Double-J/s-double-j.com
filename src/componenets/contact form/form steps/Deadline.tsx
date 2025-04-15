import { FormEvent } from "react";

type UserData = {
  deadline: string;
};

type FormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function Deadline({ deadline, updateFields }: FormProps) {
  const handleButtonClick = (buttonType: string, e: FormEvent) => {
    const newValue = deadline === buttonType ? "" : buttonType;
    updateFields({ deadline: newValue });
    
    if (newValue && newValue !== deadline) {
      e.preventDefault()
      e.currentTarget.closest("form")?.requestSubmit();
    }
  };

  const deadlineOptions = [
    "ASAP",
    "3 months", 
    "6 months",
    "no set deadline"
  ];

  return (
    <label>
      <p>and would need to be completed in</p>
      {deadlineOptions.map((option) => (
        <button
          key={option}
          type="submit"
          className="form-button"
          onClick={(e) => handleButtonClick(option, e)}
          style={{
            display: deadline && deadline !== option ? "none" : "block",
          }}
        >
          <p>{option}</p>
        </button>
      ))}
    </label>
  );
}