import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pView } from "../reducers/settings.slicer";
import { FaArrowLeft, FaPen, FaCamera } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { chat8 } from "../assets/whatsapp";
import Image from "next/image";
import "../app/chats/profile.css";
import { setBio, setProfileName } from "@/reducers/user.slicer";
export default function Profile() {
  const dispatch = useDispatch();

  const user = useSelector((state) => {
    return state.users.userDetail;
  });

  console.table(user);
  const view = useSelector((state) => {
    return state.settings.prView;
  });

  const gotoHome = () => dispatch(pView(false));
  const submitName = () => {
    dispatch(setProfileName(userInfo.name));
    setActiveInput("");
  };

  const submitBio = () => {
    dispatch(setBio(userInfo.bio));
    setActiveInput("");
  };
  const [activeInput, setActiveInput] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: user.profileName || "Profile Name",
    bio: user.bio || "I am a bio",
  });

  return (
    <div
      className={`${
        view ? "block" : "hidden"
      } flex flex-col border-r border-neutral-300 w-full h-screen bg-neutral-200`}
    >
      <div className="flex w-full items-end bg-[linear-gradient(90deg,_rgba(236,15,227,1)_0%,_rgba(117,223,246,1)_100%)] h-[100px] px-[25px] gap-2">
        <div className="text-white py-5 hover:cursor-pointer">
          <FaArrowLeft onClick={gotoHome} />
        </div>
        <p className="text-2xl text-white pb-3 px-2">Profile</p>
      </div>
      {/* profile picture */}
      <div className="h-[200px] flex justify-center mt-5">
        <div className="rounded-full bg-white relative w-fit h-fit">
          <Image
            src={chat8}
            className="h-[150px] w-[150px] hover:cursor-pointer"
            alt=""
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-full"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-300">
            <FaCamera />
            <p className=" text-sm text-center">Change Profile Picture</p>
          </div>
        </div>
      </div>

      {/* profile name */}
      <div className="bg-white flex flex-col px-5 py-4 gap-5">
        <label className="text-[0.9rem] text-[#8796a1] px-3">Your name</label>
        <div className="flex justify-between ">
          <div className="relative w-full h-full">
            <input
              id="profileName"
              type="text"
              maxLength={30}
              className={`"appearance-none w-full h-full  bg-white  p-3" ${[
                activeInput !== "NAME"
                  ? ""
                  : "focus:bg-white border-b  border-[#a0a0a0] ",
              ]}`}
              // defaultValue="Nayandeep Shrestha"
              value={user.name}
              onChange={(e) => {
                setUserInfo((prev) => ({ ...prev, name: e.target.value }));
              }}
              disabled={activeInput !== "NAME"}
            />
            <div
              className={`absolute inset-y-0 right-0 px-3 mr-3 flex items-center text-[#8796a1] `}
            >
              <IoMdCheckmark
                className={`${
                  activeInput !== "NAME" ? "hidden" : "block"
                } text-2xl hover:cursor-pointer hover:text-[#42494d] h-5 w-5 `}
                onClick={submitName}
              />
              <FaPen
                className={` ${
                  activeInput !== "NAME" ? "block" : "hidden"
                } text-[#8796a1] hover:cursor-pointer`}
                onClick={() => setActiveInput("NAME")}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 px-6">
        <p className="text-[16px] text-[#667781]">
          This is not your username or pin. This name will be visible to your Chit Chat
          contacts.
        </p>
      </div>

      {/* about section */}
      <div className="bg-white flex flex-col px-5 py-4 gap-5">
        <div className="text-[0.9rem] text-[#8796a1] px-3 flex justify-between">
          <label>Bio</label>
          <div className="">
            <IoMdCheckmark
              className={`${
                activeInput !== "BIO" ? "hidden" : "block"
              } text-2xl hover:cursor-pointer hover:text-[#42494d] h-5 w-5 `}
              onClick={submitBio}
            />
            <FaPen
              className={` ${
                activeInput !== "BIO" ? "block" : "hidden"
              }  hover:cursor-pointer`}
              onClick={() => setActiveInput("BIO")}
            />
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="relative w-full h-full">
            <textarea
              id="profileName"
              type="text"
              className={`"appearance-none w-full h-fit bg-white focus:outline-none  p-3" ${[
                activeInput !== "BIO" ? "" : "focus:bg-white border-b  border-[#a0a0a0] ",
              ]}`}
              value={userInfo.bio}
              onChange={(e) => {
                setUserInfo((prev) => ({ ...prev, bio: e.target.value }));
              }}
              disabled={activeInput !== "BIO"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
