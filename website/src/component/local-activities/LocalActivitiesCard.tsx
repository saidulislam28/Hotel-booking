"use client";
import Image from "next/image";
import React from "react";
import AnimateButton from "../AnimateButton";

const LocalActivitiesCard = ({ item }) => {
  return (
    <div className="flex flex-col gap-5 mb-10 h-[440px]">
      <div className="overflow-hidden rounded-xl w-full">
        <Image
          width={400}
          height={400}
          className="transition-transform duration-500 ease-in-out hover:scale-110 w-full h-full object-cover cursor-pointer"
          src={item?.image}
          alt="Image"
          prefix="blur"
        />
      </div>
      <div className="flex flex-col gap-2 px-5">
        <h2 className="text-2xl font-bold hover_text_reverse text-left">
          {item?.title}
        </h2>
        <p className="text-[#4F5E71] line-clamp-2">{item?.short_desc}</p>
        <div
          className="my-1"
          style={{ borderTop: "0.5px solid #9CA3AF" }}
        ></div>
        <div className="h-12 flex items-center justify-between">
          <p className="text-[#4F5E71]">London SE16 3TP, UK</p>
          <AnimateButton text={"More Info"} />
        </div>
      </div>
    </div>
  );
};

export default LocalActivitiesCard;
