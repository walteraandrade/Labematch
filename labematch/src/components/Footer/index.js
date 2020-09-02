import React from "react";
import "./style.css";
import PersonIcon from "@material-ui/icons/Person";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";

function Footer() {
  const history = useHistory();
  return (
    <div className="footerContainer">
      <PersonIcon
        src={PersonIcon}
        alt="profile"
        fontSize="inherit"
        onClick={() => history.push("/profile")}
      />

      <LoyaltyIcon
        src={LoyaltyIcon}
        alt="matches"
        fontSize="inherit"
        onClick={() => history.push("/matches")}
      />
      <SearchIcon
        src={SearchIcon}
        fontSize="inherit"
        onClick={() => history.push("/search")}
      />
    </div>
  );
}

export default Footer;
