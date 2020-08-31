import React from "react";
import "./style.css";

function Input(props) {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      required
    />
  );
}

export default Input;
