import React from "react";
import "./style.css";

function PictureFrame(props) {
  return <img src={props.link} alt={props.alt} />;
}

export default PictureFrame;
