import { foodItems } from "@/constants/datas";
import React from "react";
import MenuCard from "../MenuCard";
import FadeUpWrapper from "../hooks/FadeupWrapper";

const Menus = () => {
  return (
    <FadeUpWrapper>
      <div className="mt-20">
        <h1 className="text-4xl font-bold text-center mb-16 ">
          Our specials Menu
        </h1>
        <div className="grid grid-cols-4 gap-8">
          {foodItems.map((item, index) => (
            <MenuCard key={index} item={item}></MenuCard>
          ))}
        </div>
      </div>
    </FadeUpWrapper>
  );
};

export default Menus;
