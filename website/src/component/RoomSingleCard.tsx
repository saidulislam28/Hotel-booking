"use client"
import Image from "next/image";
import React from "react";

const RoomSingleCard = ({ item  }) => {
  // console.log("single card ", item)
  return (
    <div className="bg-[#F2F4F4] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Room Image */}
      <div className="relative h-48 bg-gray-200">
        <div className="overflow-hidden rounded-t-xl w-full">
          <Image
            width={400}
            height={300}
            src={item?.image}
            alt={item?.title}
            className="transition-transform duration-500 ease-in-out hover:scale-110  w-full h-full object-cover cursor-pointer"
          />
        </div>

        <div className="absolute top-4 left-4 flex space-x-2">
          {item?.featured && (
            <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
              Featured
            </span>
          )}
          <span className="px-3 py-1 bg-pink-500 text-white text-xs font-medium rounded-full">
            {item?.category}
          </span>
        </div>
      </div>

      {/* Room Details */}
      <div className="p-6 flex-1">
        <h3 className="hover_text mb-3 line-clamp-1 cursor-pointer">
          {item?.title}
        </h3>
        <div className="mb-4">
          {/* {renderStars(room.rating, room.reviews)} */}
          {item?.rating}
        </div>
        <div className="text-sm text-gray-600 space-y-1">
          <p>Size: {item?.roomSize}</p>
          <p>Beds: {item?.beds}</p>
          <p>Guests: {item?.maxGuests}</p>
        </div>
        <div
          className="my-5"
          style={{ borderTop: "0.5px solid #9CA3AF" }}
        ></div>

        <div className="mt-4 font-bold text-gray-900 flex items-center justify-between">
          <h4>
            {item?.currency}
            {item?.price?.toFixed(2)} /{" "}
            <span className="font-normal text-[#4F5E71]">night</span>
          </h4>
          <div className="h-12 flex justify-center">
            <button className="font-medium text-md text-[#B1905E] hover:text-black hover:cursor-pointer  mb-0 hover:mb-5 transition-all duration-400 ease-in-out">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSingleCard;
