"use client"
import Image from "next/image";
import React from "react";
import AnimateButton from "./AnimateButton";

const Card = ({ item }) => {
  return (
    <div className="flex flex-col gap-5 h-[455px]">
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
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-3xl font-bold">{item?.title}</h2>
        <p className="text-[#4F5E71]">{item?.short_desc}</p>
        <div className="h-12 flex justify-center">
          <AnimateButton text={'Read More'} />
        </div>
      </div>
    </div>
  );
};

export default Card;
