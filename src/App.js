import React, { useState, useEffect } from "react";
import "./App.css";
import FormComponent from "./component/FormComponent";
import DisplayComponent from "./component/DisplayComponent";

function App() {
  const [name, setName] = useState("");
  const [avgCycleLength, setAvgCycleLength] = useState("");
  const [cycleDuration, setCycleDuration] = useState("");
  const [cycleStartDate, setCycleStartDate] = useState("");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("formData");
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  const handleNext = () => {
    if (step === 1 && name !== "") {
      setStep(2);
    } else if (step === 2 && avgCycleLength !== "") {
      setStep(3);
    } else if (step === 3 && cycleDuration !== "") {
      setStep(4);
    }
  };

  const handleSubmit = () => {
    const dataToStore = { name, avgCycleLength, cycleDuration, cycleStartDate };
    localStorage.setItem("formData", JSON.stringify(dataToStore));
    setFormData(dataToStore);
    setStep(5);
  };

  return (
    <div className="App">
      {step <= 4 && (
        <FormComponent
          handleNext={handleNext}
          handleSubmit={handleSubmit}
          step={step}
          name={name}
          setName={setName}
          avgCycleLength={avgCycleLength}
          setAvgCycleLength={setAvgCycleLength}
          cycleDuration={cycleDuration}
          setCycleDuration={setCycleDuration}
          cycleStartDate={cycleStartDate}
          setCycleStartDate={setCycleStartDate}
        />
      )}
      {step === 5 && formData && <DisplayComponent formData={formData} />}
    </div>
  );
}

export default App;
