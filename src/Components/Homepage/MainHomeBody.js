import { Fragment } from "react";
import { Link } from "react-router-dom";

import classes from "./MainHomeBody.module.css";

const MainHomeBody = () => {
  return (
    <Fragment>
        <video autoPlay loop muted className={classes.video}>
          <source src="./images/gym-video.mp4" type="video/mp4" />
        </video>
        <div className={classes.main_caption}>
          <h6>Work Harder, Get Stronger</h6>
          <h2>
          Easy With Our 
          <em>program</em>
          </h2>
          {/* <Link to="/signup">Get started</Link> */}
        </div>
    </Fragment>
  );
};

export default MainHomeBody;
