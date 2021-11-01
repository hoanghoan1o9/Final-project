import React, { useState, useEffect } from "react";
import Featured from "../../Components/featured/Featured";
import List from "../../Components/list/List";
import "./video.scss";
import axios from "axios";

const Video = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="video">
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list, i) => (
        <List key={i} list={list} />
      ))}
    </div>
  );
};

export default Video;
