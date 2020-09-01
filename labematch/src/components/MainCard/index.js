import React, { useState } from "react";
import "./style.css";
import PictureFrame from "../PictureFrame";
import ListDisplay from "../ListDisplay";

function MainCard() {
  const [list, setList] = useState("all-time");

  const setPageListening = () => {
    setList("listening");
  };

  const setPageRecommendations = () => {
    setList("recommendations");
  };

  const setPageAllTime = () => {
    setList("all-time");
  };
  return (
    <div className="mainCardContainer">
      <PictureFrame
        link="https://images.unsplash.com/photo-1593359863503-f598684c806f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="possible match picture"
      />
      <h1>Kamada Nezuko</h1>
      <span>Metal</span>
      <span>Trash</span>
      <span>Industrial</span>
      <nav>
        <ul>
          <li onClick={setPageListening}>been listening to</li>
          <li onClick={setPageAllTime}>all-time favorites</li>
          <li onClick={setPageRecommendations}>recommendations</li>
        </ul>
      </nav>
      <ListDisplay page={list} />
    </div>
  );
}

export default MainCard;
