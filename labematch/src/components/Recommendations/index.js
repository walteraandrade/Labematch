import React, { useState } from "react";
import "./style.css";
import PlayIcon from "../../global/imgs/play.svg";
import Add from "../../global/imgs/add.svg";
import AddEmpty from "../../global/imgs/add-empty.svg";

function Recommendations() {
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    setLike(!like);
  };

  return (
    <div className="recommendationsContainer">
      <dl>
        <img
          src={PlayIcon}
          alt="play"
          id="playIcon"
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=DrDM6V08wcE", "_blank")
          }
        />
        <dt>"Devin Townsend"</dt>
        <dd>"Deadhead (2015)"</dd>
        <img
          id="heart"
          src={like ? Add : AddEmpty}
          alt="like button"
          onClick={toggleLike}
          title={like ? "Remove from my collection" : "Add to my collection"}
        />
      </dl>
    </div>
  );
}

export default Recommendations;
