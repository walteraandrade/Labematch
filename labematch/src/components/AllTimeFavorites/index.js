import React, { useState } from "react";
import "./style.css";
import PlayIcon from "../../global/imgs/play.svg";
import FullHeart from "../../global/imgs/heart-solid.svg";
import EmptyHeart from "../../global/imgs/heart-empty.svg";

function AllTimeFavorites() {
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    setLike(!like);
  };

  return (
    <div className="allTimeFavoritesContainer">
      <dl>
        <a id="playIcon" href="https://www.youtube.com/watch?v=iL42fwM5muE">
          <img src={PlayIcon} alt="play" />
        </a>
        <dt>"Orion"</dt>
        <dd>"Metallica (1986)"</dd>
        <img
          id="heart"
          src={like ? FullHeart : EmptyHeart}
          alt="like button"
          onClick={toggleLike}
        />
      </dl>
    </div>
  );
}

export default AllTimeFavorites;
