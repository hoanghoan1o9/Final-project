import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const {
    authState: {
      user: { username },
    },
    logoutUser,
  } = useContext(AuthContext);

  const logout = () => logoutUser();

  return (
    <header className={classes.header}>
      <NavLink to="/" className={classes.logo}>
        Full
        <em>Workout</em>
        {/* <img src="./images/LOGO.png" all="Logo" className={classes.logo} /> */}
      </NavLink>
      <ul className={classes.header_link}>
        {/* <li>
          <NavLink to="/programs" activeClassName={classes.active}>
            Programs
          </NavLink>
        </li>
        <li>
          <NavLink to="/nutrition" activeClassName={classes.active}>
            Nutrition
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/" activeClassName={classes.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName={classes.active}>
            About
          </NavLink>
        </li>
        <li>
          <div>
            <em>{username}</em>
          </div>
        </li>
        <li>
        <div
            className={classes.logout}
            onClick={logout}
          >
            Logout
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Navigation;
