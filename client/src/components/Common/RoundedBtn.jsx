import React from "react";

function RoundedBtn({ icon, onClick }) {
  return (
    <button
      className="text-[#8796a1] text-xl p-2  hover:text-[#42494d]"
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

export default RoundedBtn;
