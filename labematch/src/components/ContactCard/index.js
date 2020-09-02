import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";

function ContactCard() {
  const history = useHistory();
  return (
    <div
      className="contactCardContainer"
      onClick={() => history.push("/Dialogue")}
    >
      <img
        src="https://images.unsplash.com/photo-1598295893369-1918ffaf89a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        alt="contact profile"
      />
      <h2>Jeremy</h2>
      <p>"Yo Nez waddap? Did you know Tool is playing in town this weekend?"</p>
    </div>
  );
}

export default ContactCard;
