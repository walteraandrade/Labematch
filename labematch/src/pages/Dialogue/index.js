import React, { useState } from "react";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PictureFrame from "../../components/PictureFrame";
import DialogueChat from "../../components/DialogueChat";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

function Dialogue() {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("Message: ", input);
    setInput("");
  };

  return (
    <div className="dialogueContainer">
      <Header />
      <div className="dialogueBody">
        <header>
          <PictureFrame link="https://images.unsplash.com/photo-1598295893369-1918ffaf89a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
          <h2>Jeremy</h2>
        </header>
        <main>
          <DialogueChat />
        </main>
        <footer>
          <EmojiEmotionsIcon />
          <form>
            <input
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message"
              type="text"
              value={input}
            />
            <button type="submit" onClick={sendMessage} />
          </form>
        </footer>
      </div>
      <Footer />
    </div>
  );
}

export default Dialogue;
