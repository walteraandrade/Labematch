import React from "react";
import "./style.css";
import PictureFrame from "../PictureFrame";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import PersonIcon from "@material-ui/icons/Person";
import DeleteIcon from "@material-ui/icons/Delete";

function MatchCard() {
  return (
    <div className="matchCardContainer">
      <PictureFrame
        link="https://images.unsplash.com/photo-1543772429-52060794980e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        alt="match profile"
      />
      <section className="buttonWrapper">
        <ChatBubbleIcon />
        <PersonIcon />
        <DeleteIcon />
      </section>
    </div>
  );
}

export default MatchCard;
