import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import {pView, sView, chatColor} from '../reducers/settings.slicer'
import Image from 'next/image';
import { FaArrowLeft, FaBell } from "react-icons/fa";
import { MdLock, MdColorLens,MdOutlineHelpOutline } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { chat8 } from "../assets/whatsapp";
import { logout } from "@/reducers/user.slicer";
export default function Settings() {
    const dispatch = useDispatch()
    const router = useRouter()
    const view = useSelector((state) => {
        return state.settings.view;
    })
    const handleClick = () => dispatch(sView(false))
    const handleChatColorView = (e) => {
        e.preventDefault();
        dispatch(chatColor(true))
        dispatch(sView(false))
    }
    const handleProfile = (e) => {
        e.preventDefault()
        dispatch(pView(true))
      }
    const handleLogout = ()=>{
        dispatch(logout(null))
        router.push('/')
    }
    return (
        <div className={`${view ? 'block' : 'hidden'}  flex flex-col border-r border-neutral-300 w-full h-screen bg-white`}>
            <div className="flex w-full items-end bg-[linear-gradient(90deg,_rgba(236,15,227,1)_0%,_rgba(117,223,246,1)_100%)] h-[100px] px-[25px] gap-2">
                <div className="text-white py-5 hover:cursor-pointer">
                    <FaArrowLeft onClick={handleClick}/>
                </div>
                <p className="text-2xl text-white pb-3 px-2">
                    Settings
                </p>
            </div>
            {/* Search and filter */}
            <div className="flex justify-between items-center h-[60px] p-4">
                {/* Search input */}
                <input
                    type="text"
                    placeholder="Search Settings"
                    className="rounded-lg bg-neutral-100 text-[#8796a1] text-sm font-light outline-none px-4 py-2 w-[400px] h-[35px] placeholder:text-[#8796a1] placeholder:text-sm placeholder:font-light"
                />
            </div>

            {/* Profile Name */}
            <div className="flex flex-row py-5 px-8 gap-6 hover:cursor-pointer hover:bg-[#f0f2f5]" onClick={handleProfile}>
                <div className="rounded-full w-fit h-fit">
                    <Image src={chat8} width={50} height={50} alt="" />
                </div>
                <div className="flex flex-col">
                    <span>Nayandeep Shrestha</span>
                    <span className="text-[#8796a1] text-xs">Hey there! I am using Chitchat</span>
                </div>
            </div>

            {/* Setting menu */}
            <div className="flex flex-col overflow-y-scroll cursor-pointer h-full bg-white">
                <div className={`flex justify-between items-center cursor-pointer w-full h-fit px-8 py-3 hover:bg-[#f0f2f5] mb-3 text-[#3b4a54]`}>
                    {/* Icon */}
                    <FaBell className="rounded-full w-[50px] mr-5 text-[20px]"/>

                    {/* Settings Menu container */}
                        <div className=" flex items-center text-[#111b21] border-b border-[#e9edef] hover:border-none w-full">
                            <h1 className={`mb-1 text-[#111b21] font-sm`}>Notification</h1>
                        </div>
                   
                </div>
                <div className={`flex justify-between items-center cursor-pointer w-full h-fit px-8 py-3 hover:bg-[#f0f2f5] mb-3 text-[#3b4a54]`}>
                    {/* Icon */}
                    <MdLock className="rounded-full w-[50px] mr-5 text-[22px]"/>

                    {/* Settings Menu container */}
                        <div className=" flex items-center text-[#111b21] border-b border-[#e9edef] hover:border-none w-full h-full ">
                            <h1 className={`mb-1 text-[#111b21] font-sm`}>Privacy</h1>
                        </div>
                   
                </div>
                <div className={`flex justify-between items-center cursor-pointer w-full h-fit px-8 py-3 hover:bg-[#f0f2f5] mb-3 text-[#3b4a54]`}
                onClick={handleChatColorView}>
                    {/* Icon */}
                    <MdColorLens className="rounded-full w-[50px] mr-5 text-[22px]"/>

                    {/* Settings Menu container */}
                        <div className=" flex items-center text-[#111b21] border-b border-[#e9edef] hover:border-none w-full h-full ">
                            <h1 className={`mb-1 text-[#111b21] font-sm`}>Chat Color</h1>
                        </div>
                   
                </div>
                <div className={`flex justify-between items-center cursor-pointer w-full h-fit px-8 py-3 hover:bg-[#f0f2f5] mb-3 text-[#3b4a54]`}>
                    {/* Icon */}
                    <MdOutlineHelpOutline className="rounded-full w-[50px] mr-5 text-[22px]"/>

                    {/* Settings Menu container */}
                        <div className=" flex items-center text-[#111b21] border-b border-[#e9edef] hover:border-none w-full h-full ">
                            <h1 className={`mb-1 text-[#111b21] font-sm`}>Help</h1>
                        </div>
                   
                </div>
                <div className={`flex justify-between items-center cursor-pointer w-full h-fit px-8 py-3 hover:bg-[#f0f2f5] mb-3 hover:text-red-400`} onClick={handleLogout}>
                    {/* Icon */}
                    <IoMdLogOut className="rounded-full w-[50px] mr-5 text-[22px]"/>

                    {/* Settings Menu container */}
                        <div className=" flex items-center border-b border-[#e9edef] hover:border-none w-full h-full ">
                            <h1 className={`mb-1 font-sm`}>Log out</h1>
                        </div>
                   
                </div>
            </div>
        </div>
    )
}