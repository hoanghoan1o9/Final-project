import React, { Fragment } from "react";
import MainHomeBody from "../Components/Homepage/MainHomeBody"
import MainNutritionBody from "../Components/Homepage/MainNutritionBody";
import MainProgramBody from "../Components/Homepage/MainProgramBody";
// import MainAboutBody from "../Components/Homepage/MainAboutBody";
const Home = () => {
  return (
    <Fragment>
      <MainHomeBody />
      <MainProgramBody />
      <MainNutritionBody />
    </Fragment>
  );
};

export default Home;
