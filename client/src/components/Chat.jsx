import Image from "next/image";
import React from "react";

function Chat({ pp, contact, msg, time, unreadMsgs, active }) {
  return (
    // Chat container
    <div
      className={`flex justify-between items-center cursor-pointer w-full h-[85px] px-3 hover:bg-[#f0f2f5] ${
        active ? "bg-[#f0f2f5]" : ""
      }`}
    >
      {/* Profile picture */}
      <Image
        src={pp}
        alt="profile_picture"
        className="rounded-full w-[50px] mr-5"
      />

      {/* Info container */}
      <div className="flex justify-between border-t border-[#e9edef] w-full h-full py-3">
        {/* Contact name and message */}
        <div className="flex flex-col justify-between text-[#111b21]">
          {/* Contact name */}
          <h1 className={`mb-1 ${!unreadMsgs ? "text-[#111b21] font-medium" : "text-[#121e25] font-semibold"}`}>{contact}</h1>
        
          {/* Message */}
          <p className={`text-sm ${!unreadMsgs ? "text-[#667781]" : "text-[#121e25] "}`}>
            {msg}
          </p>
        </div>

        {/* Time and number of messages*/}
        <div className="flex flex-col justify-between items-end h-100 text-xs">
          {/* Time */}
          <p className="text-[#d377fd] min-w-[55px]">{time}</p>

          {/* Number of messages */}
          {unreadMsgs && (
            <div className="flex justify-center items-center bg-[#e9bffd] rounded-full w-[20px] h-[20px]">
              <p className="text-[#6a2a88]">{unreadMsgs}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chat;
