import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <NavLink to="/" className={classes.logo}>
        Full Workout
          {/* <img src="./images/LOGO.png" all="Logo" className={classes.logo} /> */}
      </NavLink>
      <ul className={classes.header_link}>
        <li>
          <NavLink to="/programs" activeClassName={classes.active}>
            Programs
          </NavLink>
        </li>
        <li>
          <NavLink to="/nutrition" activeClassName={classes.active}>
            Nutrition
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName={classes.active}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" activeClassName={classes.active}>
            Sign Up
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Navigation;
