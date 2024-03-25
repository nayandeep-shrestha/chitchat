import React, { useState, useEffect } from "react";
import Chat from "./Chat";
import { chatsData } from "../data/whatsapp";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "@/reducers/chat.slicer";

function Chats({ filter }) {
  const [chats, setChats] = useState(chatsData);
  const dispatch = useDispatch();

  // const selector = useSelector((state) => state.activeChat.chatId);

  useEffect(() => {
    const newChats = filter ? chatsData.filter((chat) => chat.unreadMsgs) : chatsData;
    setChats(newChats);
  }, [filter]);

  const handleClick = (id) => {
    dispatch(setActive(id));
  };

  return (
    // Chats main container
    <div className="flex flex-col overflow-y-scroll cursor-pointer h-full bg-white">
      {/* Chats */}
      {chats.map((chat, i) => {
        return (
          <Chat
            key={chat.id}
            chatId={chat.id}
            pp={chat.pp}
            contact={chat.contact}
            msg={chat.msg}
            time={chat.time}
            unreadMsgs={chat.unreadMsgs}
            active={i === 0}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
}

export default Chats;
