"use client"
import React from "react";
import AnimateButton from "./AnimateButton";

const ActivitiesCard = ({ item }) => {
  return (
    <div
      className="relative rounded-lg overflow-hidden h-[400px] flex items-end p-6"
      style={{
        backgroundImage: "url('/banner-min.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0" />
      {/* content */}

      <div className="relative z-10 text-white max-w-sm -bottom-35 hover:-bottom-2 transition-all duration-500 ease-in-out cursor-pointer">
        <h3 className="text-3xl font-bold mb-4">{item?.title}</h3>
        <p className="text-md font-medium  mb-4">
         {item?.short_desc}
        </p>
        <div className="flex items-center h-12">
          <AnimateButton text={"More Info"} toTransfer="white" />
        </div>
      </div>
    </div>
  );
};

export default ActivitiesCard;
