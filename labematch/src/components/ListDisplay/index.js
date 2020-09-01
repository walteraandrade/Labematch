import React from "react";
import AllTimeFavorites from "../AllTimeFavorites";
import Recommendations from "../Recommendations";
import Listening from "../Listening";

function ListDisplay(props) {
  switch (props.page) {
    case "all-time":
      return <AllTimeFavorites />;
    case "recommendations":
      return <Recommendations />;
    case "listening":
      return <Listening />;
    default:
      return <AllTimeFavorites />;
  }
}

export default ListDisplay;
