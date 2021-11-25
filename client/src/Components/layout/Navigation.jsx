import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
// import proA from "../../assets/images/profile.jpg"

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
      <NavLink to="/" className="logoNav">
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
        {/* <li>
          <div className="user"> {username}</div>
        </li> */}
      </ul>
      <div className="Wrapper_Logout">
        {/* <img
          // src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fprofile-view&psig=AOvVaw0gSsojI7YMMgeoz3JKKrCv&ust=1637512776901000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNj3ndOwp_QCFQAAAAAdAAAAABAD"
          src={proA}
          alt="Avatar"
          className="topAvatar"
        /> */}
        <div className="user">{username}</div>
        <div className="logout" onClick={() => dispatch(logout())}>
          Logout
        </div>
      </div>
    </header>
  );
};

export default Navigation;
