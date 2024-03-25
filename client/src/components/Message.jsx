'use client';
import { useState } from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Picker from 'emoji-picker-react';

function Message({ msg, time, isLink, file, sent }) {
  const [showReaction, setShowReaction] = useState(false)
  const [reactEmoji, setReactEmoji] = useState('')
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleReaction = (e) => {
    setShowReaction(false)
    setReactEmoji(e.emoji)
  }

  return (
    <div className={`${reactEmoji?"mb-7" : ""}`}>
      {/*Message container */}
      <div
        className={`relative flex justify-center items-center rounded-md w-fit my-1 ${sent ? "bg-[#e9bffd] ml-auto" : "bg-[#ffffff] mr-auto"
          }`}
      >

        {/* Image message */}
        {file ? (
          <div key="file" className="relative w-full p-2">
            {/* Image */}
            <Image
              src={file}
              alt="img_message"
              width={200}
              height={200}
              className="rounded-md w-full max-w-[300px]"
            // fill={true}
            />
            {/* Time */}
            <p className="absolute right-1 bottom-2 text-white text-[10px] min-w-[50px]">
              {time}
            </p>
            <div className="rounded-full bg-white w-fit h-fit flex items-center absolute top-[98%] right-[-15px]">
              {reactEmoji}
            </div>
          </div>
        ) : (<></>)}

        {/* // Text (link/normal) message */}
        {msg ? (
          <div
          key="messaage"
            className="flex justify-between items-end max-w-[410px] px-2 pt-2 pb-4 relative"
            style={{ wordBreak: "break-word" }}
          >
            {/* Link */}
            {isLink ? (
              <a
                href={msg}
                target="blank"
                className="text-[#4989C0] hover:text-[#53beec] focus:text-[#53beec] active:text-[#53beec] text-sm underline hover:underline mr-2"
              >
                {msg}
              </a>
            ) : (
              // Normal text
              <p className="text-[#5e5960] text-sm mr-2">{msg}</p>
            )}
            <p className="text-[#8796a1] text-[12px] min-w-[50px] absolute right-[-10px] bottom-0 mt-3">{time}</p>
            <div>
              <div className="rounded-full bg-white w-fit h-fit flex items-center absolute top-[92%] right-[-15px]">
                {reactEmoji}
              </div>
            </div>
          </div>
        )
          : (<></>)}

        <div className=" items-start p-1">
          {/* <BsThreeDotsVertical id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick} className="text-[#8796a1] hover:text-[#42494d] hover:cursor-pointer text-xs" /> */}

        </div>

        <div className={`${showReaction ? 'block' : 'hidden'} z-10 top-full absolute ${sent ? "right-2/3" : "left-3/4"}`}>
          {/* <Picker reactionsDefaultOpen={true} onReactionClick={handleReaction}></Picker> */}
        </div>
      </div>

      {/* <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} className="text-sm">Reply</MenuItem>
        <MenuItem onClick={() => { setShowReaction(true); setAnchorEl(null); }}>React</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu> */}
    </div>
  );
}

export default Message;
