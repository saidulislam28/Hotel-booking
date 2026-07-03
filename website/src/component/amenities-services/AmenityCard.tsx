import React from "react";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import { FaClock } from "react-icons/fa";
import FadeUpWrapper from "../hooks/FadeupWrapper";

const AmenityCard = ({ item, index }: any) => {
  return (
    <FadeUpWrapper>
      <div
        className={`flex items-center  gap-16 mb-30
    ${index % 2 === 1 ? "flex-col-reverse md:flex-row-reverse" : "flex-col-reverse md:flex-row"}
    `}
      >
        <div className="w-full md:w-[50%] space-y-5">
          <SectionTitle title={item.title} className="mb-5" />
          <p className="text-[#4F5E71] line-clamp-3">{item.desc}</p>
          <div>
            <h2 className="text-[#4F5E71] mb-5 text-2xl font-bold">
              Opening Hours
            </h2>

            {item?.schedule?.map((time: any, index: number) => (
              <p
                key={index}
                className="text-[#4F5E71] my-3 flex items-center gap-5"
              >
                <FaClock /> <span>{time}</span>{" "}
              </p>
            ))}
          </div>
          <h5 className="border w-fit border-[#B1905E] text-white  bg-[#B1905E] px-5 rounded-full py-3 font-semibold ">
            Call: 01639124568
          </h5>
        </div>
        <div className="w-full md:w-[50%]">
          <Image
            width={500}
            height={400}
            src={item?.image}
            alt="kids"
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>
      </div>
    </FadeUpWrapper>
  );
};

export default AmenityCard;
