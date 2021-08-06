import React from "react";
// import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
// import Programs from "./pages/Programs";
// import Nutrition from "./pages/Nutrition";
// import About from "./pages/About";
// import Error from "./pages/Error";
import Layout from "./Components/layout/Layout";

function App() {
  return (
    <Layout>
    <Home/>
      {/* <Switch>
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
        <Route path="*">
          <Error />
        </Route>
      </Switch> */}
    </Layout>
  );
}

export default App;
