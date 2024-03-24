import React, { useState, useEffect } from "react";
import Chat from "./Chat";
import { chatsData } from "../data/whatsapp";

function Chats({ filter }) {
  const [chats, setChats] = useState(chatsData);

  useEffect(() => {
    const newChats = filter ? chatsData.filter((chat) => chat.unreadMsgs) : chatsData;
    setChats(newChats);
  }, [filter]);

  return (
    // Chats main container
    <div className="flex flex-col overflow-y-scroll cursor-pointer h-full bg-white">
      {/* Chats */}
      {chats.map((chat, i) => {
        return (
          <Chat
            key={chat.id}
            pp={chat.pp}
            contact={chat.contact}
            msg={chat.msg}
            time={chat.time}
            unreadMsgs={chat.unreadMsgs}
            active={i === 0}
          />
        );
      })}
    </div>
  );
}

export default Chats;
