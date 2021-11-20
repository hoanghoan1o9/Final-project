import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Navigation = () => {
  const {
    user: { username },
  } = useContext(AuthContext);

  const { dispatch } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <header className={isScrolled ? "header" : "headerScroll"}>
      <NavLink to="/" className="logo">
        Full
        <em>Workout</em>
        {/* <img src="./images/LOGO.png" all="Logo" className=logo /> */}
      </NavLink>
      <ul className="header_link">
        {/* <li>
          <NavLink to="/programs" activeClassName="active">
            Programs
          </NavLink>
        </li>
        <li>
          <NavLink to="/nutrition" activeClassName="active">
            Nutrition
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/bmi" activeClassName="active">
            BMI
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/brm_tdee" activeClassName="active">
            TDEE
          </NavLink>
        </li>
        <li>
          <NavLink to="/videos" activeClassName="active">
            Video
          </NavLink>
        </li>
        <li>
          <div>
            Welcome <em className="user">{username}</em>
          </div>
        </li>
        <li>
          <div className="logout" onClick={() => dispatch(logout())}>
            Logout
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Navigation;
