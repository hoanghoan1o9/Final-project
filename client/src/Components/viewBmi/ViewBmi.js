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
              {/* <th>#</th> */}
              {/* <th>Calculate BMI</th> */}
              <th>Latest results</th>
            </tr>
            <tr>
              {/* <td>1</td> */}
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
