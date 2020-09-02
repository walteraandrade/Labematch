import React from "react";
import "./style.css";

function DialogueChat() {
  return (
    <div
      className={`dialogueChatContainer ${true && "dialogueReceiverContainer"}`}
    >
      dialogue chat
    </div>
  );
}

export default DialogueChat;
