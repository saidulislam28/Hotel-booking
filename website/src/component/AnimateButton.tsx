"use client"
import { useRouter } from "next/navigation";
import React from "react";

const AnimateButton = ({
  text,
  toTransfer = "black",
  path,
}: {
  text: string;
  toTransfer?: string;
  path: string;
}) => {

  const router = useRouter();

  return (
    <button
    onClick={()=> router.push(path)}
      className={`text-[#B1905E] hover:text-${toTransfer} font-bold hover:cursor-pointer mb-0 hover:mb-3 transition-all duration-400 ease-in-out`}
    >
      {text}
    </button>
  );
};

export default AnimateButton;
