"use client"
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ item }) => {
  return (
    <div className="bg-[#F2F4F4] p-6 rounded-xl shadow-sm">
      {/* Star Ratings */}
      <div className="flex items-center gap-1 mb-4 text-[#B1905E]">
        {[...Array(item?.rating)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-[#000000] text-sm leading-relaxed mb-6">
        {item?.comment}
      </p>

      {/* Profile Section */}
      <div className="flex items-center gap-3">
        <Image
          width={10}
          height={10}
          src="/globe.svg"
          alt="Avatar"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold text-sm text-black">
            {item?.profile_name}
          </p>
          <p className="text-sm text-gray-600">{item?.address}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
