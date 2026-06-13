/* eslint-disable  */
"use client";
import Image from "next/image";
import React from "react";
import AnimateButton from "./AnimateButton";
import FadeUpWrapper from "./hooks/FadeupWrapper";
import Link from "next/link";

interface IItem {
  title: string;
  image: string;
  short_desc: string;
}

const Card = ({ item }: { item: any }) => {
  return (
    <FadeUpWrapper>
      <div className="flex flex-col gap-5 h-[350px] md:h-[405px]">
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
          <h2 className="text-xl md:text-3xl font-bold line-clamp-1">{item?.title}</h2>
          <p className="text-[#4F5E71]">{item?.short_desc}</p>
          <Link href={`/blog/${item._id}`} className="h-5 md:h-12 flex justify-center">
            <AnimateButton text={"Read More"} />
          </Link>
        </div>
      </div>
    </FadeUpWrapper>
  );
};

export default Card;
