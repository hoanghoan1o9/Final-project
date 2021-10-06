import { Fragment } from "react";
// import { Link } from "react-router-dom";
import video from "../../assets/images/gym-video.mp4";

import classes from "./HomeVideo.module.css";

const HomeVideo = () => {
  return (
    <Fragment>
      <video autoPlay loop muted className={classes.video}>
        <source src={video} type="video/mp4" />
      </video>
      <div className={classes.main_caption}>
        <h6>Work Harder, Get Stronger</h6>
        <h2>
          Easy With Our
          <em>program</em>
        </h2>
      </div>
    </Fragment>
  );
};

export default HomeVideo;
