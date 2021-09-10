import React, { useState } from "react";

import classes from "./CalculateBMR.module.css";

const CalculateBRM = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [bmrResult, setBmrResult] = useState(null);

  function CalculateBMR() {
    let bmr;
    if (gender === "Male") {
      bmr = Math.round(10 * weight + 6.25 * height - 5 * age + 5);
    } else if (gender === "Female") {
      bmr = Math.round(10 * weight + 6.25 * height - 5 * age - 161);
    } else return null;
    setBmrResult(bmr);
  }

  return (
    <div className={classes.wrapper}>
      <h1>
        Calculate <em>BMR</em>
      </h1>
      <div className={classes.container}>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Height"
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
              htmlFor="Weight"
            >
              Weight
            </label>
            <input
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="weight"
              type="number"
              placeholder="Weight in kg"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Age"
            >
              Age
            </label>
            <input
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="weight"
              type="number"
              placeholder="Age in year"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="gender"
            >
              Choose your gender
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={gender}
              onChange={(e) => {
                const selectedGender = e.target.value;
                setGender(selectedGender);
              }}
            >
              <option>-----Choose-----</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={CalculateBMR}
              disabled={!weight || !height || !age || !gender}
            >
              Calculate
            </button>
          </div>
          {bmrResult && (
            <div className={classes.result}>
              <p>
                Your BMR is: <em>{bmrResult}</em>{" "}
              </p>
              <p>
                You need <em>{bmrResult}</em> calories per day{" "}
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CalculateBRM;
