import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "./views/Home";
import Programs from "./views/Programs";
import Nutrition from "./views/Nutrition";
import About from "./views/About";
// import Error from "./pages/Error";
// import Layout from "./Components/layout/Layout";
import Auth from "./views/Auth";
import Landing from "./Components/layout/Landing";
import AuthContextProvider from "./contexts/AuthContext";
import ProtectedRoute from "./Components/routing/ProtectedRoute";
function App() {
  return (
    <AuthContextProvider>
      {/* <Layout> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          {/* <Route exact path="*" component={Error} /> */}
          <Route
            exact
            path="/login"
            render={(props) => <Auth {...props} authRoute="login" />}
          />
          <Route
            exact
            path="/register"
            render={(props) => <Auth {...props} authRoute="register" />}
          />
          <ProtectedRoute exact path="/home" component={Home} />
          <ProtectedRoute exact path="/about" component={About} />
          <ProtectedRoute exact path="/programs" component={Programs} />
          <ProtectedRoute exact path="/nutrition" component={Nutrition} />
        </Switch>
      </Router>
      {/* </Layout> */}
    </AuthContextProvider>
  );
}

export default App;
