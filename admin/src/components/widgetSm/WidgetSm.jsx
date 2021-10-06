import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWE5YjIxZjExMGUwZTE5ODNiYzY4YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzQzMTEzMywiZXhwIjoxNjMzODYzMTMzfQ.qae5L80mGYG4olfFeetEfL1vwjf3s4o4RnS2I_7v9e4",
          },
        });
        setNewUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUsers();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={
                user.profilePic ||
                "https://www.nichq.org/sites/default/files/styles/custom_square/public/testimonial-image/SmileyFace_Icon_350x350_7.jpg?h=555bb598&itok=xHtvJsAE"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
