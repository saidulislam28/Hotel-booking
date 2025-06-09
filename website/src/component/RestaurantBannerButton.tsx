"use client";
import { useRouter } from "next/navigation";
import React from "react";

const RestaurantBannerButton = ({ text = "View Menu" }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/restaurant")}
      className="text-[#B1905E] cursor-pointer hover:text-white bg-white hover:bg-[#B1905E] px-20 rounded-full py-3 font-semibold "
    >
      {text}
    </button>
  );
};

export default RestaurantBannerButton;
