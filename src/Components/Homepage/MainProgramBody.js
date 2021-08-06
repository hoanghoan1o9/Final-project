import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainProgramBody.module.css";

const Calculate = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.column}>
        <h2 className={classes.section_heading}>
          CHOOSE
          <em> PROGRAM</em>
        </h2>
        <p>
          Full Workout is all free for you. Here you can calculate your own Body
          Mass Index. Total Daily Energy Expenditure from there to build the
          most suitable diet and exercise program for you.
        </p>
      </div>
      <div className={classes.container}>
        <div className={classes.card}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className={classes.content}>
            <h2>01</h2>
            <h3>BMI</h3>
            <p>
              Body mass index is a commonly used tool to measure body fat,
              calculated based on height and weight, applicable to men and women
            </p>
            <Link to="/signup">Read more</Link>
          </div>
        </div>
        <div className={classes.card}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className={classes.content}>
            <h2>02</h2>
            <h3>BMR</h3>
            <p>
              Basal Metabolic Rate, which means basal metabolic rate. This is
              the minimum level of energy that sustains life and serves the
              basic elements.
            </p>
            <Link to="/signup">Read more</Link>
          </div>
        </div>
        <div className={classes.card}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className={classes.content}>
            <h2>03</h2>
            <h3>TDEE</h3>
            <p>
              Total Daily Energy Expenditure is the number of calories needed by
              the body in a day including all the sleeping and eating activities
              you have during the day.
            </p>
            <Link to="/signup">Read more</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculate;
