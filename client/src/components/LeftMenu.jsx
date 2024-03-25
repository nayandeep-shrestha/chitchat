'use client'
import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { pView, sView } from "../reducers/settings.slicer";
import ChatColor from './ChatColor'
import Chats from "./Chats";
import Profile from '../components/Profile'
import Settings from '../components/Settings'
import { FiEdit } from "react-icons/fi";
import { BiFilter } from "react-icons/bi";
import { FaGear } from "react-icons/fa6";
import { appName, chat8 } from "../assets/whatsapp";
import Image from 'next/image';
import '../app/chats/profile.css'


function LeftMenu() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(false);
  const user = useSelector((state)=> {
    return state.users;
  })
  const view = useSelector((state) => {
    return state.settings.view
  })
  const prView = useSelector((state) => {
    return state.settings.prView
  })
  const chatColorView = useSelector((state) => {
    return state.settings.chatcolor
  })
  const handleProfile = (e) => {
    e.preventDefault()
    dispatch(pView(true))
  }
  const handleSettings = (e) => {
    e.preventDefault()
    dispatch(sView(true))
    
  }
  
  return (
    // LeftMenu container
    <div className="bg-[#e3e1dd]  h-screen w-full flex-2 relative overflow-hidden">
      <div className={`${prView || view || chatColorView? 'hidden' : 'block'}  flex flex-col border-r border-neutral-300 w-full h-screen`}>

        <div className="flex justify-between items-center bg-[#f0f2f5] h-[60px] p-3">

          <Image src={appName} className="w-[200px]" alt="" />
          <FiEdit className="text-[#8796a1] text-[40px] p-2  hover:text-[#616b71] hover:cursor-pointer" />
        </div>

        <div className="flex justify-between items-center h-[60px] p-2 bg-white transition-shadow">

          <input
            type="text"
            placeholder="Search or start a new chat"
            className="rounded-lg bg-[#f0f2f5] text-[#8796a1] text-sm font-light outline-none px-4 py-2 w-[400px] h-[35px] placeholder:text-[#8796a1] placeholder:text-sm placeholder:font-light"
          />


          <button
            className={`text-2xl m-2 p-1 rounded-full ${filter
              ? "bg-[#e0b1f5] text-white rounded-full hover:bg-[#8b43ad]"
              : "text-[#8796a1] hover:text-[#4b5257]"
              }`}
            onClick={() => setFilter(!filter)}
          >
            <BiFilter />
          </button>
        </div>

        <Chats filter={filter} />

        <div className="flex justify-between items-center bg-[#f0f2f5] w-full h-[60px] p-3">
          <div className="flex justify-evenly items-center flex-60 hover:cursor-pointer" onClick={handleProfile}>
            <Image src={chat8} className="rounded-full w-[45px]" alt=""  />
            <h1 className={`mb-1 text-[#111b21] font-medium`}>{user.profileName}</h1>
          </div>
            <div>
              <FaGear className="text-[#8796a1] text-[40px] p-2  hover:text-[#616b71] hover:cursor-pointer hover:rotate-90 duration-300" onClick={handleSettings} />
            </div>
        </div>
      </div>

      <Profile />
      <Settings/>
      <ChatColor/>
    </div>
  );
}

export default LeftMenu;
