import React,{ useContext } from "react";
import {Route, Switch, BrowserRouter as Router, Redirect,} from "react-router-dom";
import Home from "./pages/home/Home";
import Nutrition from "./pages/nutrutions/Nutrition";
import DetailsNutrition from "./pages/nutrutions/DetailsNutrition";
import CalculateBMI from "./Components/threecount/CalculateBMI";
import CalculateBRM from "./Components/threecount/CalculateBMR";
import CalculateTDEE from "./Components/threecount/CalculateTDEE";
import Layout from "./Components/layout/Layout";
import Watch from "./pages/watch/Watch";
import Video from "./pages/videos/Video";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { AuthContext } from "./authContext/AuthContext";
import ViewBmi from "./Components/viewBmi/ViewBmi";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Redirect to="/register" />}
          </Route>
          <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
          <Route path="/register">
            {!user ? <Register /> : <Redirect to="/" />}
          </Route>
          {user && ( <>
              <Layout>
                <Route path="/bmi">
                  <CalculateBMI />
                </Route>
                <Route path="/viewBmi">
                  <ViewBmi />
                </Route>
                <Route path="/bmr">
                  <CalculateBRM />
                </Route>
                <Route path="/tdee">
                  <CalculateTDEE />
                </Route>
                <Route path="/nutrition">
                  <Nutrition />
                </Route>
                <Route path="/detailsNutrition">
                  <DetailsNutrition />
                </Route>
              </Layout>
              <Route path="/watch">
                <Watch />
              </Route>
              <Route path="/movies">
                <Video type="movie" />
              </Route>
              <Route path="/videos">
                <Video type="series" />
              </Route>
            </> )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
