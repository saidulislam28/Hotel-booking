import React from "react";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import { FaClock } from "react-icons/fa";
import FadeUpWrapper from "../hooks/FadeupWrapper";

const AmenityCard = ({ item, index }) => {
  return (
    <FadeUpWrapper>
      <div
        className={`flex items-center  gap-16 mb-30
    ${index % 2 === 1 ? "flex-row-reverse" : "flex-row"}
    `}
      >
        <div className="w-[50%] space-y-5">
          <SectionTitle title={item.title} className="mb-5" />
          <p className="text-[#4F5E71] line-clamp-3">{item.desc}</p>
          <div>
            <h2 className="text-[#4F5E71] mb-5 text-2xl font-bold">
              Opening Hours
            </h2>

            {item?.schedule?.map((time, index) => (
              <p
                key={index}
                className="text-[#4F5E71] my-3 flex items-center gap-5"
              >
                <FaClock /> <span>{time}</span>{" "}
              </p>
            ))}
          </div>
          <button className="text-[#B1905E] border border-[#B1905E] cursor-pointer hover:text-white bg-white hover:bg-[#B1905E] px-5 rounded-full py-3 font-semibold ">
            Make an Appointment
          </button>
        </div>
        <div className="w-[50%]">
          <Image
            width={500}
            height={400}
            src={"/kids.png"}
            alt="kids"
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>
      </div>
    </FadeUpWrapper>
  );
};

export default AmenityCard;
