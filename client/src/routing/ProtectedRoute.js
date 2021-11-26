import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../authContext/AuthContext";
import Navigation from "../Components/layout/Navigation";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          user ? (
            <>
              <Navigation />
              <Component {...rest} {...props} />
            </>
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    </div>
  );
};

export default ProtectedRoute;
