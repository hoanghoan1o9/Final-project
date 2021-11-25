import React, { useContext, useEffect } from "react";
import { BmiContext } from "../bmiContext/BmiContext";
import { getBmis } from "../bmiContext/apiCalls";
import { Link } from "react-router-dom";

const ViewBmi = () => {
  const { bmis, dispatch } = useContext(BmiContext);

  console.log(bmis.bmis);

  useEffect(() => {
    getBmis(dispatch);
  }, [dispatch]);

  return (
    <div className="container_nutrition">
      <div>
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>Calculate BMI</th>
              <th>Latest results</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Your current BMI</td>
              <td>
                {bmis.bmis &&
                  bmis.bmis.map((bmi) => <li key={bmi._id}>{bmi.result}</li>)}
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
