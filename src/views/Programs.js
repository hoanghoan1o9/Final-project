import React, { Fragment } from "react";

import CalculateBMI from "../Components/Homepage/threecount/CalculateBMI"
import CalculateBRM from "../Components/Homepage/threecount/CalculateBMR";
import CalculateTDEE from "../Components/Homepage/threecount/CalculateTDEE"
const Programs = () => {
  return (
    <Fragment >
      <CalculateBMI />
      <CalculateBRM />
      <CalculateTDEE/>
    </Fragment>
  );
};

export default Programs;
