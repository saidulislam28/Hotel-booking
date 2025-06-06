import Image from "next/image";
import React from "react";

const Card = ({data}) => {
  return (
    <div className="flex flex-col gap-5 h-[455px]">
      <div className="overflow-hidden rounded-xl w-full">
        <Image
          width={400}
          height={400}
          className="transition-transform duration-500 ease-in-out hover:scale-110 w-full h-full object-cover cursor-pointer"
          src={data?.image}
          alt="Image"
          prefix="blur"
        />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-3xl font-bold">{data?.title}</h2>
        <p className="text-[#4F5E71]">{data?.short_desc}</p>
        <div className="h-12 flex justify-center">
          <button className="hover_text hover:cursor-pointer mb-0 hover:mb-5 transition-all duration-400 ease-in-out">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
