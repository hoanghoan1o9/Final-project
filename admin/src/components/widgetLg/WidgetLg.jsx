import "./widgetLg.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function WidgetLg() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
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
    <div className="widgetLg">
      {/* <h3 className="widgetLgTitle">Latest transactions</h3> */}
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Details Customer</th>
            <th className="widgetLgTh">Email</th>
            <th className="widgetLgTh">Created Date</th>
          </tr>
          {newUsers.map((user, i) => (
            <tr className="widgetLgTr" key={user._id}>
              <td className="widgetLgUser">
                <img
                  src={
                    user.profilePic ||
                    "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  }
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">{user.username}</span>
              </td>
              <td className="widgetLgAmount">{user.email}</td>

              <td className="widgetLgDate">{user.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
