import React from "react";
import "../component/forms.css";

const FormComponent = ({
  handleNext,
  handleSubmit,
  step,
  name,
  setName,
  avgCycleLength,
  setAvgCycleLength,
  cycleDuration,
  setCycleDuration,
  cycleStartDate,
  setCycleStartDate,
}) => {
  return (
    <div className="input-group-wrapper">
      {step === 1 && (
        <div className="input-group-data">
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <div className="underline"></div>
          <label>Name:</label>
          <button className="btn" onClick={handleNext}>
            Next
          </button>
        </div>
      )}
      {step === 2 && (
        <div className="input-group-data">
          <input
            type="number"
            value={avgCycleLength}
            required
            onChange={(e) => setAvgCycleLength(e.target.value)}
          />
          <div className="underline"></div>
          <label>Average Length of Cycle</label>
          <button className="btn" onClick={handleNext}>
            Next
          </button>
        </div>
      )}
      {step === 3 && (
        <div className="input-group-data">
          <input
            type="number"
            value={cycleDuration}
            required
            onChange={(e) => setCycleDuration(e.target.value)}
          />
          <div className="underline"></div>
          <label>How Long Does It Last(in days)</label>
          <button className="btn" onClick={handleNext}>
            Next
          </button>
        </div>
      )}
      {step === 4 && (
        <div className="input-group-data">
          <input
            type="date"
            value={cycleStartDate}
            required
            onChange={(e) => setCycleStartDate(e.target.value)}
          />
          <div className="underline"></div>
          <label>First Day of Your Last Period</label>
          <button className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
