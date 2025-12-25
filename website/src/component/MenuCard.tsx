import Image from "next/image";
import React from "react";

const MenuCard = ({ item }) => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-64 p-8 bg-white hover:bg-[#F2F4F4] rounded-xl cursor-pointer hover:text-[#B1905E]">
      <div className="">
        <Image
          width={150}
          height={250}
          src={item?.image}
          alt="menus coming"
          prefix="blur"
          className="object-cover"
        />
      </div>
      <h4 className="text-xl font-bold">{item?.title}</h4>
      <h5 className="text-lg font-bold primary_text">${item?.price}</h5>
    </div>
  );
};

export default MenuCard;
