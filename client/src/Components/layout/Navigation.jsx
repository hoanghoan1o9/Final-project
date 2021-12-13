import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Navigation = () => {
  const { user } = useContext(AuthContext);
  const username = user.user.username;

  const { dispatch } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <header className={isScrolled ? "header" : "headerScroll"}>
      <NavLink to="/" className="logoNav">
        Full
        <em>Workout</em>
      </NavLink>
      <ul className="header_link">
        <li>
          <NavLink to="/bmi" activeClassName="active">
            BMI
          </NavLink>
        </li>

        <li>
          <NavLink to="/bmr" activeClassName="active">
            BMR
          </NavLink>
        </li>
        <li>
          <NavLink to="/tdee" activeClassName="active">
            TDEE
          </NavLink>
        </li>
        <li>
          <NavLink to="/nutrition" activeClassName="active">
            Nutrition
          </NavLink>
        </li>
        <li>
          <NavLink to="/videos" activeClassName="active">
            Programs
          </NavLink>
        </li>
      </ul>
      <div className="Wrapper_Logout">
        <div className="user">{username}</div>
        <div className="logout" onClick={() => dispatch(logout())}>
          Logout
        </div>
      </div>
    </header>
  );
};

export default Navigation;
