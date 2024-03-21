"use client";
import { useState, useEffect } from "react";
import LeftSidebar from "../../components/LeftMenu";
import Profile from '../../components/Profile'
import Settings from '../../components/Settings'
import ChatDetail from "../../components/ChatDetail";
import './profile.css'
import { Provider } from "react-redux";
import rootStore from '../../store'

export default function Chats() {
  return (
    <>
    <Provider store= {rootStore}>
      <div className="w-screen h-screen overflow-hidden bg-[#e3e1dd]">
        {/* 2 components cointainer */}
        <div className="flex justify-start whatsapp-bp:justify-center content-center items-center bg-[#e3e1dd] h-screen  w-[96%] shadow-xl mx-auto">
          {/* LeftMenu */}
             <LeftSidebar/>
          {/* ChatDetail */}
          <div className="bg-[#222f35]  w-full">
            <ChatDetail />
          </div>
        </div>
      </div>
      {/* )} */}
      </Provider>
    </>
  );
}
