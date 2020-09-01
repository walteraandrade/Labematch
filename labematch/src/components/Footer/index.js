import React from "react";
import "./style.css";
import ProfileIcon from "../../global/imgs/profile.svg";
import MatchIcon from "../../global/imgs/matches.svg";
import SearchIcon from "../../global/imgs/search.svg";
import { useHistory } from "react-router-dom";

function Footer() {
  const history = useHistory();
  return (
    <div className="footerContainer">
      <img
        src={ProfileIcon}
        alt="profile"
        title="profile"
        onClick={() => history.push("/profile")}
      />
      <img
        src={MatchIcon}
        alt="matches"
        title="matches"
        onClick={() => history.push("/matches")}
      />
      <img
        src={SearchIcon}
        alt="search"
        title="search"
        onClick={() => history.push("/search")}
      />
    </div>
  );
}

export default Footer;
