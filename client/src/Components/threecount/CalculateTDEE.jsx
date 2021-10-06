import React, { useState } from "react";

import classes from "./CalculateTDEE.module.css";

const CalculateTDEE = () => {
  const [bmr, setBMR] = useState("");
  const [tdeeResult, setTDEEResult] = useState(null);
  const [activity, setActivity] = useState("");

  function CalculateBMR() {
    let tdee;
    if (activity === "1") {
      tdee = Math.round(bmr * 1.2);
    } else if (activity === "2") {
      tdee = Math.round(bmr * 1.375);
    } else if (activity === "3") {
      tdee = Math.round(bmr * 1.55);
    } else if (activity === "4") {
      tdee = Math.round(bmr * 1.725);
    } else if (activity === "5") {
      tdee = Math.round(bmr * 1.9);
    } else return null;

    setTDEEResult(tdee);
  }

  return (
    <div className={classes.wrapper}>
      <h1>
        Calculate <em>TDEE</em>
      </h1>

      <div className={classes.container}>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="bmr"
            >
              Your bmr
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="bmr"
              type="number"
              placeholder="your bmr"
              onChange={(e) => setBMR(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="activity"
            >
              choose the number of training days
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={activity}
              onChange={(e) => {
                const selectedGender = e.target.value;
                setActivity(selectedGender);
              }}
            >
              <option>-----Choose-----</option>
              <option value="1">Just study, work (Without exercise)</option>
              <option value="2">Exercise 1-3 times a week</option>
              <option value="3">Exercise 4-5 times a week</option>
              <option value="4">Exercise 6-7 times a week</option>
              <option value="5">
                exercise a lot, twice a day, 7 times a week
              </option>
            </select>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={CalculateBMR}
              disabled={!bmr || !activity}
            >
              Calculate
            </button>
          </div>
          {tdeeResult && (
            <div className={classes.result}>
              <p>
                Your TDEE is: <em>{tdeeResult}</em>{" "}
              </p>
              <p>
                You need <em>{tdeeResult}</em> calories per day{" "}
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CalculateTDEE;
