import React, { useContext } from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthAction";
export default function Topbar() {
  const { dispatch } = useContext(AuthContext);
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Hoan Admin</span>
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
            src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/70262756_1177702899103434_73706303133843456_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dxoV_LYVSqAAX--C8o0&_nc_ht=scontent.fdad2-1.fna&oh=2764640c7090d14ea69ac5c175568864&oe=617450EE"
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
