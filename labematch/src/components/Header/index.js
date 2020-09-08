import React from "react";
import "./style.css";
import BackIcon from "../../global/imgs/back.svg";
import MsgIcon from "../../global/imgs/msg.svg";
import LogoutIcon from "../../global/imgs/logout.svg";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

  const logout = () => {
    window.localStorage.clear();
    history.push("/login");
  };

  return (
    <div className="headerContainer">
      <img
        id="back"
        src={BackIcon}
        alt="go back"
        title="go back"
        onClick={() => history.goBack()}
      />
      <div id="spacer" />
      <img
        id="msg"
        src={MsgIcon}
        alt="see messages"
        title="my messages"
        onClick={() => history.push("/messages")}
      />
      <img
        id="logout"
        src={LogoutIcon}
        alt="logout"
        title="logout"
        onClick={logout}
      />
    </div>
  );
}

export default Header;
