import React from "react";

const AnimateFullButton = ({text}) => {
  return (
    <button
      className="px-2 py-2 rounded-full border-2 border-[#B1905E] text-md font-bold text-[#B1905E] hover:text-white
        bg-white hover:bg-[#B1905E] cursor-pointer mb-0 hover:mb-5 transition-all duration-400 ease-in-out"
    >
      {text}
    </button>
  );
};

export default AnimateFullButton;
