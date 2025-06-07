import Image from "next/image";
import AnimateFullButton from "../AnimateFullButton";
import FadeUpWrapper from "../hooks/FadeupWrapper";

const DiscountBanner = () => {
  return (
    <FadeUpWrapper>
      <div className="relative w-full h-[420px] rounded-xl overflow-hidden my-10">
        <Image
          src="/banner-min.png"
          alt="Hotel Banner"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
        <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center z-10">
          <div className="text-center text-white px-4">
            <p className="text-xl md:text-base font-bold tracking-wider mb-2">
              BOOKING HOTEL ROOM
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              -10% For Advance Booking
            </h2>
            <p className="text-xl md:text-3xl font-semibold mb-4">
              Use Code:{" "}
              <span
                style={{
                  color: "#B1905E",
                  WebkitTextStroke: "1px white",
                  WebkitTextFillColor: "#B1905E",
                }}
                className="text-3xl font-extrabold  px-2 py-1 rounded-md"
              >
                BEHOTEL
              </span>
            </p>
            <div className="h-20 flex justify-center items-center">
              <AnimateFullButton text={"Book Now"} />
            </div>
          </div>
        </div>
      </div>
    </FadeUpWrapper>
  );
};

export default DiscountBanner;
