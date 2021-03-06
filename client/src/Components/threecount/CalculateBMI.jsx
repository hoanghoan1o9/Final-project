import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { BmiContext } from "../bmiContext/BmiContext";
import { createBmi } from "../bmiContext/apiCalls";

const CalculateBMI = () => {
  const { dispatch } = useContext(BmiContext);
  const [bmi, setBmi] = useState(null);

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [status, setStatus] = useState("");

  const heightRef = useRef();

  function calculateBMI() {
    const bmiScore = (+weight / (+height / 100) ** 2).toFixed();

    setBmi({ ...bmi, bmi: bmiScore, height: height, weight: weight });
    createBmi(bmi, dispatch);
    setBmiResult(bmiScore);

    let bmiStatus = getStatus(bmiScore);

    setStatus(bmiStatus);
    setHeight("");
    setWeight("");

    heightRef.current.focus();
  }

  function getStatus(bmiScore) {
    if (bmiScore < 18.5) return "Underweight";
    else if (bmiScore >= 18.5 && bmiScore < 24.9) return "Normal";
    else if (bmiScore >= 25 && bmiScore <= 29.9) return "Overweight";
    else if (bmiScore >= 30 && bmiScore <= 34.9) return "Obese";
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
          </tbody>
        </table>
      </div>
      <div>
        <Link to="./viewBmi" className="back_button_nutrition">
          Lastest Result
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
