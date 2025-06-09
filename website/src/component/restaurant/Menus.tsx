import { foodItems } from "@/constants/datas";
import React from "react";
import MenuCard from "../MenuCard";

const Menus = () => {
  return (
    <div className="mt-20">
      <h1 className="text-2xl font-bold text-center">Our specials Menu</h1>
      <div className="grid grid-cols-4 gap-8">
        {
          foodItems.map((item, index)=>(
            <MenuCard key={index} item={item}></MenuCard>
          ))

        }
      </div>
    </div>
  );
};

export default Menus;
