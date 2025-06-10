"use client";
import Image from "next/image";
import React from "react";
import AnimateButton from "./AnimateButton";

const EventCard = ({ item }) => {
  return (
    <div className="bg-[#F2F4F4] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Room Image */}
      <div className="relative h-48 bg-gray-200">
        <div className="overflow-hidden rounded-t-xl w-full">
          <Image
            width={400}
            height={300}
            src={item?.image}
            alt={"banner"}
            className="transition-transform duration-500 ease-in-out hover:scale-110  w-full h-full object-cover cursor-pointer"
          />
        </div>

        <div className="absolute top-4 left-4 flex space-x-2">
          <span className="px-3 py-1 bg-[#F2F4F4] text-[#4F5E71] hover:text-[#B1905E]  text-xs font-medium rounded-full cursor-pointer">
            Gallery
          </span>
        </div>
      </div>

      {/* Room Details */}
      <div className="p-3 flex-1 mt-20 space-y-2">
        <p className="text-[#4F5E71]">7 june, 2024</p>
        <h1 className="text-black hover:text-[#B1905E] text-xl font-bold">
          {item?.title}
        </h1>
        <p className="text-[#4F5E71] line-clamp-2">{item?.short_desc}</p>
        <div className="h-8 flex items-end">
          <AnimateButton text={"Read More"} path={`/blog/${item.id}`} />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
