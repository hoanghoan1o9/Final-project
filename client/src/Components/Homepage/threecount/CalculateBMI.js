import React, { useState } from "react";

import classes from "./CalculateBMI.module.css";

const CalculateBMI = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmiResult, setBmiResult] = useState(null);
  const [status, setStatus] = useState("");

  // const [disabled, setDisabled] = useState(false);

  function calculateBMI() {
    let bmi = (weight / (height / 100) ** 2).toFixed(2);

    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);

    setStatus(bmiStatus);
    setHeight("");
    setWeight("");
  }

  function getStatus(bmi) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi <= 29.9) return "Overweight";
    else if (bmi >= 30 && bmi <= 34.9) return "Obese";
    else return "Dangerous Obesity";
  }

  return (
    <div className={classes.wrapper}>
      <h1>
        Calculate <em>BMI</em>
      </h1>
      <div className={classes.container}>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="height"
            >
              Height
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Height"
              type="number"
              placeholder="Height in cm"
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="weight"
            >
              Weight
            </label>
            <input
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="Weight"
              type="number"
              placeholder="Weight in kg"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              // disabled={disabled}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={calculateBMI}
              disabled={!weight || !height}
            >
              Calculate BMI
            </button>
          </div>
          {bmiResult && (
            <div className={classes.result}>
              <p>
                Your BMI is: <em>{bmiResult}</em>
              </p>
              <p>
                You are currently :<em>{status}</em>
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CalculateBMI;
