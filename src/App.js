import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Nutrition from "./pages/Nutrition";
import About from "./pages/About";
import Error from "./pages/Error";
import Layout from "./Components/layout/Layout";
import CalculateBMI from "./Components/Homepage/threecount/CalculateBMI";
import CalculateBMR from "./Components/Homepage/threecount/CalculateBMR"
import CalculateTDEE from "./Components/Homepage/threecount/CalculateTDEE"

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/programs">
          <Programs />
        </Route>
        <Route path="/nutrition">
          <Nutrition />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/bmi">
          <CalculateBMI />
        </Route>
        <Route path="/bmr">
          <CalculateBMR />
        </Route>
        <Route path="/tdee">
          <CalculateTDEE />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
