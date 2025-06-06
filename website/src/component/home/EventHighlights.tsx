import React from "react";
import SectionTitle from "../SectionTitle";
import AnimateFullButton from "../AnimateFullButton";

const EventHighlights = () => {
  return (
    <div className="my-20">
      <SectionTitle title={"journey will be more interesting"} />
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {/* Card 1 */}
        <div
          className="relative rounded-2xl overflow-hidden h-[300px] flex items-end p-6"
          style={{
            backgroundImage: "url('/banner-min.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent z-0" />

          {/* Content */}
          <div className="relative z-10 text-white max-w-sm  h-full">
            <h3 className="text-3xl font-bold mb-2">Food And Earn Points</h3>
            <p className="text-md  mb-4">
              Travel hassle-free within Bali, visit popular attractions, or do
              water activities!
            </p>
            <div className="flex items-center h-full">
              <AnimateFullButton text={"View More"} />
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div
          className="relative rounded-2xl overflow-hidden h-[300px] flex items-end p-6"
          style={{
            backgroundImage: "url('/banner-min.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent z-0" />

          {/* Content */}
          <div className="relative z-10 text-white max-w-sm  h-full">
            <h3 className="text-3xl font-bold mb-2">The year-end party</h3>
            <p className="text-md  mb-4">
              Travel hassle-free within Bali, visit popular attractions, or do
              water activities!
            </p>
            <div className="flex items-center h-full">
              <AnimateFullButton text={"View More"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHighlights;
