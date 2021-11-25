import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const CalculateBMI = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [status, setStatus] = useState("");

  const heightRef = useRef();

  function calculateBMI() {
    let bmi = (weight / (height / 100) ** 2).toFixed(2);

    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);

    setStatus(bmiStatus);
    setHeight("");
    setWeight("");

    heightRef.current.focus();
  }

  function getStatus(bmi) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi <= 29.9) return "Overweight";
    else if (bmi >= 30 && bmi <= 34.9) return "Obese";
    else return "Dangerous Obesity";
  }

  return (
    <div className="container_nutrition">
      <div>
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>Calculate BMI</th>
              <th>
                <button
                  style={{ fontWeight: "bold" }}
                  className="button_nutrition"
                  onClick={calculateBMI}
                  disabled={!weight || !height}
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
              <td>3</td>
              <td style={{ fontWeight: "bold" }}>Your Bmi is :</td>
              <td>
                <em>{bmiResult}</em>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td style={{ fontWeight: "bold" }}>You are currently :</td>
              <td>
                <em>{status}</em>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <em>Notice : If your BMI is</em>
              </td>
              <td>
                <p>
                  lower than <em>18.5</em> you are <em>"Underweight"</em>
                </p>
                <p>
                  higher or equal <em>18.5</em> && lower <em>24.9</em> you are{" "}
                  <em>"Normal"</em>
                </p>
                <p>
                  higher or equal <em>25</em> && lower or equal <em>29.9</em>
                  <em>"Overweight"</em>
                </p>
                <p>
                  higher or equal <em>30</em> && lower or equal <em>34.9</em>{" "}
                  <em>"Obese"</em>
                </p>
                <p>
                  higher than <em>35</em> you are <em>"Dangerous Obesity"</em>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <Link to="./bmr" className="back_button_nutrition">
          Go to Calculate BMR
        </Link>
      </div>
      <div>
        <Link to="./" className="forward_button_nutrition">
          Home
        </Link>
      </div>
    </div>
  );
};

export default CalculateBMI;
