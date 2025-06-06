import React from "react";

const AnimateButton = ({ text, toTransfer= "black" }) => {
  return (
    <button
      className={`text-[#B1905E] hover:text-${toTransfer} font-bold hover:cursor-pointer mb-0 hover:mb-5 transition-all duration-400 ease-in-out`}
    >
      {text}
    </button>
  );
};

export default AnimateButton;
