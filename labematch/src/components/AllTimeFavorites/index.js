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
        <img
          src={PlayIcon}
          alt="play"
          title="listen on youtube"
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=iL42fwM5muE", "_blank")
          }
        />

        <dt>"Orion"</dt>
        <dd>"Metallica (1986)"</dd>
        <img
          id="heart"
          src={like ? FullHeart : EmptyHeart}
          alt="like button"
          onClick={toggleLike}
          title={like ? "Dislike" : "Love it"}
        />
      </dl>
    </div>
  );
}

export default AllTimeFavorites;
