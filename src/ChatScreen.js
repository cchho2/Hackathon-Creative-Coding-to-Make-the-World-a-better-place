import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import "./ChatScreen.css";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Hasbullah",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQarUBqtqU26JRwJHImq-E1lvHCWd1dtxfO8A&usqp=CAU",
      message: "You can have my pizza brother",
    },
    {
      name: "Hasbullah",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQarUBqtqU26JRwJHImq-E1lvHCWd1dtxfO8A&usqp=CAU",
      message: "Don't take Abdu's burgur!!!",
    },
    {
      message: "Okay Hasbullah many thanks",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOUR REQUEST HAS BEEN ACCEPETED
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__owntext">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__form">
        <input
          className="chatScreen__input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__button"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;