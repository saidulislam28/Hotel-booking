import { formatMoney } from "@/utility/formatMoney";
import Image from "next/image";
import React from "react";

const MenuCard = ({ item }) => {
  return (
    <div className="flex flex-col gap-1 md:gap-5 items-center justify-center p-2 md:p-8 bg-white hover:bg-[#F2F4F4] rounded-xl cursor-pointer hover:text-[#B1905E] ">
      <div className="">
        <Image
          width={150}
          height={250}
          src={"/Food.png"}
          alt="menus coming"
          prefix="blur"
          className="object-cover"
        />
      </div>
      <h4 className="text-lg md:text-xl text-center md:text-start font-bold">{item?.title}</h4>
      <h5 className="text-base md:text-lg font-bold primary_text">
        {formatMoney(item?.price)}
      </h5>
    </div>
  );
};

export default MenuCard;
