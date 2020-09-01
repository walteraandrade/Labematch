import React from "react";
import "./style.css";
import BackIcon from "../../global/imgs/back.svg";
import MsgIcon from "../../global/imgs/msg.svg";
import LogoutIcon from "../../global/imgs/logout.svg";

function Header() {
  return (
    <div className="headerContainer">
      <img id="back" src={BackIcon} alt="go back" title="go back" />
      <div id="spacer" />
      <img id="msg" src={MsgIcon} alt="see messages" title="my messages" />
      <img id="logout" src={LogoutIcon} alt="profile" title="edit my info" />
    </div>
  );
}

export default Header;
