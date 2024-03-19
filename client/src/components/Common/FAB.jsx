export default function FAB({icon}) {
    return (
        <button
            className="p-0 w-12 h-12 bg-[#d06ffe] rounded-full hover:bg-[#9744be] active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
            {icon}
        </button>
    )
}