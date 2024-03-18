import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import RoundedBtn from "./Common/RoundedBtn";
import { messagesData } from "../data/whatsapp";
import { MdSearch, MdSend,MdOutlineInsertDriveFile } from "react-icons/md";
import { HiDotsVertical, HiOutlineLink } from "react-icons/hi";
import { IoImageOutline } from "react-icons/io5";
import { BiHappy } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { cs1, cs2 } from "../assets/whatsapp";
import { getTime } from "../logic/whatsapp";
import Image from "next/image";
import Picker from 'emoji-picker-react';
import FAB from '../components/Common/FAB'


function ChatDetail() {
  const [messages, setMessages] = useState(messagesData);
  const [showEmojis, setShowEmojis] = useState(false)
  const [uploadIcon, setUploadIcon] = useState(false)
  const [message, setMessage] = useState('')
  const [cursorPosition, setCursorPosition] = useState()
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  // Functions

  const addMessage = (msg) => {
    const newMessages = [...messages, msg];
    setMessages(newMessages);
  };

  // const handleImgUpload = () => {
  //   addMessage({
  //     img: cs2,
  //     time: getTime(),
  //     sent: true,
  //   });
  // };

  const onEmojiClick = ({ emoji }) => {
    const { selectionStart, selectionEnd } = inputRef.current;
    const newValue = message.slice(0, selectionStart) + emoji + message.slice(selectionEnd);
    setMessage(newValue);
    // setCursorPosition(start.length + emoji.length);
  }

  const handleInputSubmit = () => {
    if (inputRef.current.value.length > 0) {
      addMessage({
        msg: inputRef.current.value,
        time: getTime(),
        sent: true,
      });
      inputRef.current.value = " ";
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  useEffect(() => {
    const listener = (e) => {
      if (e.code === "Enter") handleInputSubmit();
    };
    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  });
  useEffect(() => {
    inputRef.current.selestionEnd = cursorPosition;
  }, [cursorPosition])

  return (
    // ChatDetail main container
    <div className="flex flex-col h-screen">
      {/* Contact nav */}
      <div className="flex justify-between bg-[#f0f2f5]  h-[60px] p-3">
        {/* Contact info */}
        <div className="flex items-center">
          {/* Profile picture */}
          <Image
            src={cs1}
            alt="profile_picture"
            className="rounded-full w-[45px] h-[45px] mr-5"
          />

          {/* Info */}
          <div className="flex flex-col">
            {/* Contact */}
            <h1 className="text-[#111b21] font-medium">Coding Spot</h1>

            {/* Status */}
            <p className="text-[#8796a1] text-xs">online</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center w-[85px]">
          <RoundedBtn icon={<MdSearch />} />
          <RoundedBtn icon={<HiDotsVertical />} />
        </div>
      </div>

      {/* Messages section */}
      <div
        className="bg-[#f1ece5] overflow-y-scroll h-full"
        style={{ padding: "12px 7%" }}
      >
        {messages.map((msg) => (
          <Message
            msg={msg.msg}
            time={msg.time}
            isLink={msg.isLink}
            img={msg.img}
            sent={msg.sent}
          />
        ))}
        <div ref={bottomRef} />
      </div>
      <span>


      </span>


      {/* Bottom section */}
      <div className="flex items-center bg-[#f0f2f5] w-full h-[70px] p-2">
        {/* Input bar */}
        <div className="relative w-full h-full">
          <input
            type="text"
            placeholder="Type a message"
            className="bg-white rounded-full outline-none text-sm text-[#7b8b9e] w-full h-full pl-[50px] placeholder:text-sm placeholder:text-[#7b8b9e]"
            onChange={(e) => setMessage(e.target.value)}
            ref={inputRef}
            value={message}
            onClick={() => {
              if(showEmojis || uploadIcon){
                setShowEmojis(false)
                setUploadIcon(false)
              }
            }}
          />
          <div className="absolute inset-y-0 left-0 px-3 mr-3 flex items-center">
            <HiOutlineLink className="text-2xl hover:cursor-pointer hover:text-[#42494d] h-5 w-5 text-gray-400" onClick={() => setUploadIcon(!uploadIcon)} />
          </div>
          <div className="absolute inset-y-0 right-0 px-3 mr-3 flex items-center">
            {showEmojis ?
              <RxCross2 className="text-2xl hover:cursor-pointer hover:text-[#42494d] h-5 w-5 text-gray-400" onClick={() => setShowEmojis(!showEmojis)} />
              : <BiHappy className="text-2xl hover:cursor-pointer hover:text-[#42494d] h-5 w-5 text-gray-400" onClick={() => setShowEmojis(!showEmojis)} />
            }
          </div>
        </div>
        <div className="z-10 fixed bottom-[65px] right-[65px]">
          <Picker open={showEmojis} onEmojiClick={onEmojiClick} />
        </div>
        <div className={`z-10 fixed bottom-[65px] flex flex-col gap-2 ${uploadIcon? 'block':'hidden' }`}>
          <FAB icon={<MdOutlineInsertDriveFile className="w-6 h-6 inline-block text-white" />}/>
          <FAB icon={<IoImageOutline className="w-6 h-6 inline-block text-white"  />}/>
        </div>
        {/* Send btn */}
        <span className="ml-2">
          <RoundedBtn icon={<MdSend onClick={handleInputSubmit} />} />
        </span>
      </div>
    </div>
  );
}

export default ChatDetail;
