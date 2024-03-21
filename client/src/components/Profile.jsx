import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pView } from "../reducers/settings.slicer";
import { FaArrowLeft, FaPen, FaCamera } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { chat8 } from "../assets/whatsapp";
import Image from 'next/image'
import '../app/chats/profile.css'
export default function Profile() {
    const dispatch = useDispatch()
    const view = useSelector((state) =>{
        return state.settings.prView;
    })
    const handleClick = () => dispatch(pView(false))
    const [nameInput, setNameInput] = useState(true)
    const [aboutInput, setAboutInput] = useState(true)
    const [profileName, setProfileName] = useState('')
    const [profileAbout, setProfileAbout] = useState('')
    return (
        <div className={`${view? 'block' : 'hidden'} flex flex-col border-r border-neutral-300 w-full h-screen bg-neutral-200`}>
            <div className="flex w-full items-end bg-[linear-gradient(90deg,_rgba(236,15,227,1)_0%,_rgba(117,223,246,1)_100%)] h-[100px] px-[25px] gap-2">
                <div className="text-white py-5 hover:cursor-pointer">
                    <FaArrowLeft onClick={handleClick} />
                </div>
                <p className="text-2xl text-white pb-3 px-2">
                    Profile
                </p>
            </div>
            {/* profile picture */}
            <div className="h-[200px] flex justify-center mt-5">
                <div className="rounded-full bg-white relative w-fit h-fit">
                    <Image src={chat8} className="h-[150px] w-[150px] hover:cursor-pointer" />
                    <div className="absolute inset-0 bg-black opacity-50 rounded-full"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-300">
                        <FaCamera/> 
                        <p className=" text-sm text-center">Change Profile Picture</p>
                    </div>
                </div>
            </div>

            {/* profile name */}
            <div className="bg-white flex flex-col px-5 py-4 gap-5">
                <label className="text-[0.9rem] text-[#8796a1] px-3">
                    Your name
                </label>
                <div className="flex justify-between ">
                    <div className="relative w-full h-full">
                        <input id="profileName" type="text"
                            className={`"appearance-none w-full h-full  bg-white  p-3" ${[nameInput ? "" : "focus:bg-white border-b  border-[#a0a0a0] "]}`}
                            // defaultValue="Nayandeep Shrestha"
                            value={profileName ? profileName : 'Nayandeep Shrestha'}
                            onChange={(e) => { setProfileName(e.target.value) }}
                            disabled={nameInput} />
                        <div className={`absolute inset-y-0 right-0 px-3 mr-3 flex items-center text-[#8796a1] `}>
                            <IoMdCheckmark className={`${nameInput ? 'hidden' : 'block'} text-2xl hover:cursor-pointer hover:text-[#42494d] h-5 w-5 `} onClick={() => setNameInput(!nameInput)} />
                            <FaPen className={` ${nameInput ? 'block' : 'hidden'} text-[#8796a1] hover:cursor-pointer`} onClick={() => setNameInput(!nameInput)} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5 px-6">
                <p className="text-[16px] text-[#667781]">
                    This is not your username or pin. This name will be visible to your Chit Chat contacts.
                </p>
            </div>

            {/* about section */}
            <div className="bg-white flex flex-col px-5 py-4 gap-5">
                <div className="text-[0.9rem] text-[#8796a1] px-3 flex justify-between">
                    <label>Bio</label>
                    <div className=''>
                        <IoMdCheckmark className={`${aboutInput ? 'hidden' : 'block'} text-2xl hover:cursor-pointer hover:text-[#42494d] h-5 w-5 `} onClick={() => setAboutInput(!aboutInput)} />
                        <FaPen className={` ${aboutInput ? 'block' : 'hidden'}  hover:cursor-pointer`} onClick={() => setAboutInput(!aboutInput)} />
                    </div>
                </div>
                <div className="flex justify-between ">
                    <div className="relative w-full h-full">
                        <textarea id="profileName" type="text"
                            className={`"appearance-none w-full h-fit  bg-white focus:outline-none  p-3" ${[aboutInput ? "" : "focus:bg-white border-b  border-[#a0a0a0] "]}`}
                            // defaultValue="Nayandeep Shrestha"
                            value={profileAbout ? profileAbout : "🌟 Adventure seeker | Travel enthusiast | Food lover 🍕 | Music addict 🎶 | Tech geek 📱 | Always on the lookout for new experiences and connections! Let's chat and share stories! 🌍✨"}
                            onChange={(e) => { setProfileAbout(e.target.value) }}
                            disabled={aboutInput} />
                    </div>
                </div>
            </div>
        </div>
    )
}