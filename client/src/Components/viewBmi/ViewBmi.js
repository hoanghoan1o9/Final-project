import React, { useContext, useEffect } from "react";
import { BmiContext } from "../bmiContext/BmiContext";
import { getBmis, deleteBmi } from "../bmiContext/apiCalls";
import { Link } from "react-router-dom";

const ViewBmi = () => {
  const { bmis, dispatch } = useContext(BmiContext);

  useEffect(() => {
    getBmis(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteBmi(id, dispatch);
    getBmis(dispatch);
  };

  return (
    <div className="container_nutrition">
      <div>
        <table>
          <tbody>
            <tr>
              <th>#</th>
              {/* <th>Calculate BMI</th> */}
              <th>Height and weight results</th>
              <th>Latest results</th>
            </tr>
            <tr>
              <td>
                {bmis.bmis &&
                  bmis.bmis.map((bmi, i) => (
                    <li
                      key={bmi._id}
                      style={{ listStyle: "none", padding: "5px" }}
                    >
                      {i + 1}
                    </li>
                  ))}
              </td>
              <td>
                {bmis.bmis &&
                  bmis.bmis.map((bmi) => (
                    <li
                      key={bmi._id}
                      style={{ listStyle: "none", padding: "5px" }}
                    >
                      <em style={{ color: "red" }}>{bmi.height}</em> cm{" "}
                      <span>&emsp;</span>{" "}
                      <em style={{ color: "red" }}>{bmi.weight}</em> kg
                    </li>
                  ))}
              </td>
              <td>
                {bmis.bmis &&
                  bmis.bmis.map((bmi) => (
                    <li key={bmi._id} style={{ listStyle: "none" }}>
                      {bmi.result}
                      <span>&emsp;</span>
                      <span>&emsp;</span>
                      <button
                        className="normal-button"
                        onClick={() => handleDelete(bmi._id)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
              </td>
            </tr>
            <tr>
              <td></td>
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
        <Link to="./bmi" className="back_button_nutrition">
          Calculate BMI
        </Link>
      </div>
    </div>
  );
};

export default ViewBmi;
