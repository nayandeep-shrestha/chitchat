import { FaArrowLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { chatColor, sView } from '../reducers/settings.slicer'
import { setColor } from "../reducers/color.slicer";
export default function ChatColor() {
    const colorOptions = ['#f1ece5', '#bae4e5', '#cbdaec', '#66d2d5', '#feefa9', '#fed297', '#dc6e4f', '#644d52', '#1D2326', '#3190bb', '#922040', '#517e7e'];
    const dispatch = useDispatch()
    const view = useSelector((state) => { return state.settings.chatcolor })
    const selectedColor = useSelector((state) => { return state.colors.selectedColor })
    const handleClick = () => {
        dispatch(chatColor(false))
        dispatch(sView(true))
    }
    const handleColor = (color) => {
        dispatch(setColor(color))
    }
    return (
        <>
            <div className={`${view ? 'block' : 'hidden'} flex flex-col border-r border-neutral-300 w-full h-screen bg-white`}>
                <div className="flex w-full items-end bg-[linear-gradient(90deg,_rgba(236,15,227,1)_0%,_rgba(117,223,246,1)_100%)] h-[100px] px-[25px] gap-2">
                    <div className="text-white py-5 hover:cursor-pointer">
                        <FaArrowLeft onClick={handleClick} />
                    </div>
                    <p className="text-xl text-white pb-3 px-2">
                        Select Chat Background
                    </p>
                </div>

                <div className="flex flex-row flex-wrap justify-center px-10 py-12">

                    {colorOptions.map((color, index) => (
                        // console.log(color)
                        <span key={index}
                            className={`flex justify-center items-center float-left w-[82px] h-[82px] mb-[15px] ml-[15px] hover:cursor-pointer hover:rounded-lg transition duration-300`}
                            style={{ backgroundColor: color, border: color === selectedColor ? '4px solid gray' : 'none', }}
                            onClick={() => handleColor(color)}>
                                {color === '#f1ece5'?
                                 <>
                                    <span className="text-sm text-gray-500">Default</span>
                                 </> : <></>}
                        </span>
                    ))}
                </div>
            </div>
        </>
    )
}


