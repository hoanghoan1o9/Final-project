import React, { useContext } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthAction";
export default function Topbar() {
  const { dispatch,user } = useContext(AuthContext);
  const userName = user.user.username
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/" className="link">
            <span className="logo2">{userName}</span>
          </Link>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            {/* <span className="topIconBadge">2</span> */}
          </div>
          <div className="topbarIconContainer">
            <Language />
            {/* <span className="topIconBadge">2</span> */}
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/70262756_1177702899103434_73706303133843456_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=eTacQ9DH8DwAX84ah_A&tn=3rWP3Q5B4Kfof7oi&_nc_ht=scontent.fdad2-1.fna&oh=4caed286942117b4c3969a311918f9a8&oe=61CB53EE"
            alt=""
            className="topAvatar"
          />
          <div className="logout" onClick={() => dispatch(logout())}>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}
