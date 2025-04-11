export function Deadline() {
    return (
      <label>
        <p>and would need to be completed in</p>
        <button className="form-button">
          <p>ASAP</p>
        </button>
        <button className="form-button">
          <p>3 months</p>
        </button>
        <button className="form-button">
          <p>6 months</p>
        </button>
        <button className="form-button">
          <p>no set deadline</p>
        </button>
      </label>
    );
  }