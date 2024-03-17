'use client';
import Image from 'next/image';
import LeftSidebar from '../../components/LeftMenu'
import ChatDetail from '../../components/ChatDetail'
// import pp from '../../assets/images/chat1.png'

export default function Chats(){
    return(
        <>
             <div className="w-screen h-screen overflow-hidden bg-[#111a21]">
          {/* 2 components cointainer */}
          <div className="flex justify-start whatsapp-bp:justify-center content-center items-center bg-[#111a21] h-screen  w-[96%] shadow-xl mx-auto">
            {/* LeftMenu */}
            <div className="bg-[#111a21]  w-full flex-2">
              <LeftSidebar />
              {/* <Image src={pp} alt="" /> */}
            </div>

            {/* ChatDetail */}
            <div className="bg-[#222f35]  w-full">
              <ChatDetail />
            </div>
          </div>
        </div>
        </>
    )
}