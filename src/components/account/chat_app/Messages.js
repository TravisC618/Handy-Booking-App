import React from "react";
import ScrollToBottoms from "react-scroll-to-bottom";
import Message from "./Message";
import "../../../css/account/chat_app/messages.scss";

const Messages = ({ messages, name }) => {
  return (
    <ScrollToBottoms className="chatbox-messages">
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottoms>
  );
};

export default Messages;
