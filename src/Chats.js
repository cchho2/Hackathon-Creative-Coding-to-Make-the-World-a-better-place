import React from "react";
import Chat from "./Chat"

const Chats = () => {
  return <div className="chats">
      <Chat
      name="Hasbullah"
      message="You can have my pizza brother." 
      timestamp="6 mins ago" 
      profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQarUBqtqU26JRwJHImq-E1lvHCWd1dtxfO8A&usqp=CAU"
      />
      <Chat
      name="Abdu Rozik"
      message="Ok take my borgior" 
      timestamp="1 hr ago" 
      profilePic="https://wikibio.in/wp-content/uploads/2022/06/Abdu-Rozik.jpg"/>
  </div>;
};

export default Chats;