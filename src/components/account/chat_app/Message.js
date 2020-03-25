import React from "react";
import ReactEmoji from "react-emoji";
import "../../../css/account/chat_app/message.scss";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  if (user === name) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="chatbox-messageContainer justifyEnd">
      <p className="chatbox-sentText pr-10">{name}</p>
      <div className="chatbox-messageBox backgroundBlue">
        <p className="chatbox-messageText colorWhite">
          {ReactEmoji.emojify(text)}
        </p>
      </div>
    </div>
  ) : (
    <div className="chatbox-messageContainer justifyStart">
      <div className="chatbox-messageBox backgroundLight">
        <p className="chatbox-messageText colorDark">
          {ReactEmoji.emojify(text)}
        </p>
      </div>
      <p className="chatbox-sentText pl-10">{user}</p>
    </div>
  );
};

export default Message;
