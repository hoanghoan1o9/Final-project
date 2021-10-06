import React, { Fragment } from "react";
import HomeVideo from "../../Components/Homeitems/HomeVideo";
import HomeNutrition from "../../Components/Homeitems/HomeNutrition";
import HomeProgram from "../../Components/Homeitems/HomeProgram";
// import MainAboutBody from "../Components/Homepage/MainAboutBody";
import Layout from "../../Components/layout/Layout";
const Home = () => {
  return (
    <>
      <Layout>
        <HomeVideo />
        <HomeProgram />
        <HomeNutrition />
      </Layout>
    </>
  );
};

export default Home;
