import React, { useState } from "react";
import "./style.css";
import PlayIcon from "../../global/imgs/play.svg";
import FullHeart from "../../global/imgs/heart-solid.svg";
import EmptyHeart from "../../global/imgs/heart-empty.svg";

function Listening() {
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
          title="play on youtube"
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=SQNtGoM3FVU", "_blank")
          }
        />
        <dt>"Pisces"</dt>
        <dd>"Jinjer (2017)"</dd>
      </dl>
    </div>
  );
}

export default Listening;
