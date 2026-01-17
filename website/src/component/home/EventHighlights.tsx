import React from "react";
import SectionTitle from "../SectionTitle";
import AnimateFullButton from "../AnimateFullButton";
import FadeUpWrapper from "../hooks/FadeupWrapper";
import Link from "next/link";

const EventHighlights = () => {
  return (
    <FadeUpWrapper>
      <div className="my-10 md:my-20 px-5 md:p-0">
        <SectionTitle title={"journey will be more interesting"} />
        <div className="grid md:grid-cols-2 gap-6 mt-5 md:mt-10">
          {/* Card 1 */}
          <div
            className="relative rounded-2xl overflow-hidden h-[270px] md:h-[300px] flex items-end p-6"
            style={{
              backgroundImage: "url('/food_and_earn.avif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent z-0" />

            {/* Content */}
            <div className="relative z-10 text-white max-w-sm  h-full">
              <h3 className="text-xl md:text-3xl font-bold mb-2">
                Food And Earn Points
              </h3>
              <p className="md:text-md mb-2 md:mb-4">
                Travel hassle-free within Bali, visit popular attractions, or do
                water activities!
              </p>
              <Link
                href={"/restaurant"}
                className="flex items-start mt-10 md:mt-0 md:items-center h-full"
              >
                <AnimateFullButton text={"View More"} />
              </Link>
            </div>
          </div>
          {/* Card 2 */}
          <div
            className="relative rounded-2xl overflow-hidden h-[270px] md:h-[300px] flex items-end p-6"
            style={{
              backgroundImage: "url('/party.avif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent z-0" />

            {/* Content */}
            <div className="relative z-10 text-white max-w-sm  h-full">
              <h3 className="text-xl md:text-3xl font-bold mb-2">
                The year-end party
              </h3>
              <p className="md:text-md mb-2 md:mb-4">
                Travel hassle-free within Bali, visit popular attractions, or do
                water activities!
              </p>
              <Link
                href={"/restaurant"}
                className="flex items-start mt-10 md:mt-0 md:items-center h-full"
              >
                <AnimateFullButton text={"View More"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </FadeUpWrapper>
  );
};

export default EventHighlights;
