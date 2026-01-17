"use client";
import React, { useState } from "react";
import Link from "next/link";
import AnimateButton from "./AnimateButton";

const ActivitiesCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="group relative rounded-lg overflow-hidden h-[400px] flex items-end p-6 cursor-pointer"
      style={{
        backgroundImage: `url(${item?.image ?? "/banner-min.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0" />

      {/* content */}
      <div
        className={`
          relative z-10 text-white max-w-sm transition-all duration-500 ease-in-out
          md:translate-y-32 md:group-hover:translate-y-0
          ${isOpen ? "translate-y-0" : "translate-y-32"}
        `}
      >
        {/* title */}
        <h3
          className="text-3xl font-bold mb-4 md:cursor-default cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {item?.title}
        </h3>

        {/* expandable content */}
        <div
          className={`
            transition-all duration-500 ease-in-out
            md:opacity-0 md:group-hover:opacity-100
            ${isOpen ? "opacity-100" : "opacity-0"}
          `}
        >
          <p className="text-md font-medium mb-4">
            {item?.short_desc}
          </p>

          <Link href={item?.href} className="flex items-center h-12">
            <AnimateButton text="More Info" toTransfer="white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesCard;
