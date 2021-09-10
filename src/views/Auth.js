import React, { useContext } from "react";
import LoginForm from "../Components/auth/LoginForm";
import RegisterForm from "../Components/auth/RegisterForm";
import { AuthContext } from "../contexts/AuthContext";
import { Redirect } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "../App.css";

const Auth = ({ authRoute }) => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  let body;

  if (authLoading)
    body = (
      <div className="d-flex justify-content-center mt-2">
        <Spinner animation="border" variant="info" />
      </div>
    );
  else if (isAuthenticated) return <Redirect to="/home" />;

  body = (
    <>
      {authRoute === "login" && <LoginForm />}
      {authRoute === "register" && <RegisterForm />}
    </>
  );

  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>
            Full<em className="title-auth_main">Workout</em>
          </h1>
          <h4 className="title-auth_sub">Work harder - Get stronger</h4>
          {body}
        </div>
      </div>
    </div>
  );
};

export default Auth;
