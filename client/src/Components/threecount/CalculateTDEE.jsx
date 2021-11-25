import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const CalculateTDEE = () => {
  const [bmr, setBMR] = useState("");
  const [tdeeResult, setTDEEResult] = useState(null);
  const [activity, setActivity] = useState("");

  const bmrRef = useRef();

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
    setBMR("");

    bmrRef.current.focus();
  }

  return (
    <div className="container_nutrition">
      <div>
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>Calculate TDEE</th>
              <th>
                <button
                  style={{ fontWeight: "bold" }}
                  className="button_nutrition"
                  onClick={CalculateBMR}
                  disabled={!bmr || !activity}
                >
                  Calculate
                </button>
              </th>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#fafafa" }}>1</td>
              <td style={{ fontWeight: "bold", backgroundColor: "#fafafa" }}>
                Enter your BMR Index
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "#eeeeee" }}>
                <input
                  placeholder="Your bmr index"
                  style={{ padding: "5px", borderRadius: "5px" }}
                  type="number"
                  ref={bmrRef}
                  value={bmr}
                  onChange={(e) => setBMR(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td style={{ fontWeight: "bold" }}>
                choose the number of training days
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "#eeeeee" }}>
                <select
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
              </td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", backgroundColor: "#fafafa" }}>
                3
              </td>
              <td style={{ backgroundColor: "#fafafa" }}>
                <em>Your TDEE is</em>
              </td>
              <td>
                <em>{tdeeResult}</em>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <em>Notice :</em>
              </td>
              <td>
                TDEE (Total Daily Energy Expenditure) is an index of calories
                (energy) the body burns in 1 day, including all physical
                activities, eating, breathing, sleeping, exercising in 1 day.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <Link to="./nutrition" className="back_button_nutrition">
          Go to Nutrition
        </Link>
      </div>
      <div>
        <Link to="./bmr" className="forward_button_nutrition">
          Go to Count BMR
        </Link>
      </div>
    </div>
  );
};

export default CalculateTDEE;
