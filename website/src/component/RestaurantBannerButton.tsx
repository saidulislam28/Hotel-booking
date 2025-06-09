"use client"
import { useRouter } from "next/navigation";
import React from "react";

const RestaurantBannerButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/restaurant")}
      className="text-[#B1905E] cursor-pointer hover:text-white bg-white hover:bg-[#B1905E] px-20 rounded-full py-3 font-semibold "
    >
      View Menu
    </button>
  );
};

export default RestaurantBannerButton;
