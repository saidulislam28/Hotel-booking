import Image from "next/image";
import React from "react";
const data = [
  {
    id: 1,
    title: "Family Escape",
    short_desc: "Children eat free, exciting fun activities.",
    image: "/banner-min.png",
  },
  {
    id: 2,
    title: "Business Trip",
    short_desc: "Up to 20% off food and services",
    image: "/banner-min.png",
  },
  {
    id: 3,
    title: "Romance",
    short_desc: "Discount room rates, reward points",
    image: "/banner-min.png",
  },
];

const OfferSection = () => {
  return (
    <div className="grid grid-cols-3 gap-10">
      {data.map((d) => (
        <div key={d.id} className="flex flex-col gap-5 h-[455px]">
          <div className="overflow-hidden rounded-xl w-full">
            <Image
              width={400}
              height={400}
              className="transition-transform duration-500 ease-in-out hover:scale-110 w-full h-full object-cover cursor-pointer"
              src={d.image}
              alt="Image"
              prefix="blur"
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h2 className="text-3xl font-bold">{d.title}</h2>
            <p className="text-[#4F5E71]">{d.short_desc}</p>
            <div className="h-12 flex justify-center">
              <button className="hover_text hover:cursor-pointer mb-0 hover:mb-5 transition-all duration-400 ease-in-out">
                Read More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OfferSection;
