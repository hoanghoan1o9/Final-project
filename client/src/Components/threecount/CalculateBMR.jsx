import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";


const CalculateBRM = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bmrResult, setBmrResult] = useState(null);

  const heightRef = useRef();

  function CalculateBMR() {
    let bmr;
    if (gender === "Male") {
      bmr = Math.round(10 * weight + 6.25 * height - 5 * age + 5);
    } else if (gender === "Female") {
      bmr = Math.round(10 * weight + 6.25 * height - 5 * age - 161);
    } else return null;
    setBmrResult(bmr);
    setHeight("");
    setWeight("");
    setAge("");
    heightRef.current.focus();
  }

  return (
    <div className="container_nutrition">
      <div>
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>Calculate BMR</th>
              <th>
                <button
                  style={{ fontWeight: "bold" }}
                  className="button_nutrition"
                  onClick={CalculateBMR}
                  disabled={!weight || !height || !age || !gender}
                >
                  Calculate
                </button>
              </th>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#fafafa" }}>1</td>
              <td style={{ fontWeight: "bold", backgroundColor: "#fafafa" }}>
                Enter your height
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "#eeeeee" }}>
                <input
                  placeholder="Your height in cm"
                  style={{ padding: "5px", borderRadius: "5px" }}
                  type="number"
                  ref={heightRef}
                  value={height}
                  onChange={(e) => setHeight(Math.abs(e.target.value))}
                />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td style={{ fontWeight: "bold" }}>Enter your weight</td>
              <td style={{ fontWeight: "bold", backgroundColor: "#eeeeee" }}>
                <input
                  placeholder="Your weight in kg"
                  style={{ padding: "5px", borderRadius: "5px" }}
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Math.abs(e.target.value))}
                />
              </td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#fafafa" }}>3</td>
              <td style={{ fontWeight: "bold", backgroundColor: "#fafafa" }}>
                Enter your age
              </td>
              <td style={{ fontWeight: "bold" }}>
                <input
                  placeholder="Age in year"
                  style={{ padding: "5px", borderRadius: "5px" }}
                  type="number"
                  value={age}
                  onChange={(e) => setAge(Math.abs(e.target.value))}
                />
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td style={{ fontWeight: "bold" }}>Choose your gender</td>
              <td>
                <select
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
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                <em>Your BMR is :</em>
              </td>
              <td>
                <em>{bmrResult}</em>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <em>Notice :</em>
              </td>
              <td>
                Basal Metabolic Rate is the number of calories required to keep
                your body functioning at rest. BMR is also known as your body's
                metabolism.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <Link to="./tdee" className="back_button_nutrition">
          Go to Calculate TDEE
        </Link>
      </div>
      <div>
        <Link to="./bmi" className="forward_button_nutrition">
          Go to Count BMI
        </Link>
      </div>
    </div>
  );
};

export default CalculateBRM;
