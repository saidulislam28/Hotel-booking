import React from "react";

const AnimateButton = ({text}) => {
  return (
    <button className="hover_text hover:cursor-pointer mb-0 hover:mb-5 transition-all duration-400 ease-in-out">
      {text}
    </button>
  );
};

export default AnimateButton;
