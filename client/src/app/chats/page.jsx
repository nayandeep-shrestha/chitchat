"use client";
import { useState, useEffect } from "react";
import LeftSidebar from "../../components/LeftMenu";
import Profile from '../../components/Profile'
import ChatDetail from "../../components/ChatDetail";
import './profile.css'

export default function Chats() {
  const [slide, setSlide] = useState(false)
  const handleSlide = (data) => {
    setSlide(data)
  }
  return (
    <>
      <div className="w-screen h-screen overflow-hidden bg-[#e3e1dd]">
        {/* 2 components cointainer */}
        <div className="flex justify-start whatsapp-bp:justify-center content-center items-center bg-[#e3e1dd] h-screen  w-[96%] shadow-xl mx-auto">
          {/* LeftMenu */}
          <div className="bg-[#e3e1dd]  w-full flex-2 relative">
            <LeftSidebar slide={handleSlide}/>
            {/* <Profile slide={slide} setSlide={setSlide}/> */}
          </div>

          {/* ChatDetail */}
          <div className="bg-[#222f35]  w-full">
            <ChatDetail />
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
}
