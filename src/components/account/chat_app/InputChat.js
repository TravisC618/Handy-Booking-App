import React from "react";
import "../../../css/account/chat_app/input-chat.scss";

const InputChat = ({ message, setMessage, sendMessage }) => {
  return (
    <form className="input-chat-form">
      <input
        className="input-chat-input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={event => setMessage(event.target.value)}
        onKeyPress={event => event.key === "Enter" && sendMessage(event)}
      />
      <button
        className="input-chat-sendButton"
        onClick={event => sendMessage(event)}
      >
        Send
      </button>
    </form>
  );
};

export default InputChat;
