import React from "react";
import onlineIcon from "../../../img/icons/onlineIcon.png";
import closeIcon from "../../../img/icons/closeIcon.png";
import "../../../css/account/chat_app/infobar.scss";

const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online" />
        <h5>{room}</h5>
      </div>
    </div>
  );
};

export default InfoBar;
