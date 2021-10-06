import React from "react";
import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
// import video from "./../../assets/images/gym-video.mp4";
// import video from "./../../assets/images/l2.mp4";
import { Link, useLocation } from "react-router-dom";

export default function Watch() {
  const location = useLocation();
  const movie = location.movie;
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={movie.video} />
      {/* <source src={video} type="video/mp4" /> */}
      {/* </video> */}
    </div>
  );
}
