'use client';
import { useState, useEffect } from "react";
import LeftSidebar from '../../components/LeftMenu'
import ChatDetail from '../../components/ChatDetail'
// import LoadingScreen from "../../components/LoadingScreen";

export default function Chats(){
  // const [progress, setProgress] = useState(0);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const id = setTimeout(() => {
  //     if (progress >= 100) setLoading(false);
  //     else {
  //       const increment = Math.floor(Math.random() * (10 + 1)) + 7;
  //       setProgress(progress + increment);
  //     }
  //   }, 300);

  //   return () => clearTimeout(id);
  // }, [progress]);

    return(
        <>
        {/* {loading ? (
        <LoadingScreen progress={progress} />
      ) : ( */}
             <div className="w-screen h-screen overflow-hidden bg-[#e3e1dd]">
          {/* 2 components cointainer */}
          <div className="flex justify-start whatsapp-bp:justify-center content-center items-center bg-[#e3e1dd] h-screen  w-[96%] shadow-xl mx-auto">
            {/* LeftMenu */}
            <div className="bg-[#e3e1dd]  w-full flex-2">
              <LeftSidebar />
              {/* <Image src={pp} alt="" /> */}
            </div>

            {/* ChatDetail */}
            <div className="bg-[#222f35]  w-full">
              <ChatDetail />
            </div>
          </div>
        </div>
           {/* )} */}
        </>
    )
}