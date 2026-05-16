import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import RestaurantBannerButton from "../RestaurantBannerButton";
import SectionTitleMedium from "../SectionTitleMedium";
import Link from "next/link";
import SectionTitle from "../SectionTitle";

export default function RestaurantBanner() {
  return (
    <div
      className="relative h-[300px] md:h-[600px] bg-cover bg-center rounded-xl"
      style={{ backgroundImage: "url('/restaurant_banner.avif')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10 rounded-xl"></div>

      {/* Content goes above the overlay */}

      <div className="relative z-20 block md:hidden  text-white ">
        <div className="w-full h-[300px] flex justify-center items-center">
          <div className="px-2 text-center">
            <SectionTitle title={"Taste Royalty at The King Restaurant"} />
            <p className="font-medium text-white/70 mt-2">
              Enjoy delicious food, a relaxing resort vibe, and unforgettable moments — all in one perfect destination.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 hidden md:flex items-end p-8 text-white h-full  px-4">
        <div className="flex justify-between w-full">
          <div>
            <SectionTitleMedium title={"Contact Us"} />
            <p className="font-medium flex items-center gap-3 mt-4">
              <FaMapMarkerAlt color="white" /> <span>Mirpur Dhaka, 1217</span>{" "}
            </p>
            <p className="font-medium flex items-center gap-3 mt-2">
              <FaClock color="white" /> <span>Open time: 7am - 11pm </span>{" "}
            </p>
          </div>
          <div className="">
            <SectionTitleMedium title={"Address"} />
            <p className="font-medium flex items-start gap-3 mt-4 max-w-64">
              <FaMapMarkerAlt size={24} color="white" />{" "}
              <span>
                S. Ali Tower, plot no-22, Section-6/A, Main road-1, Mirpur-6
                Dhaka, 1217
              </span>{" "}
            </p>
          </div>
          <div>
            <SectionTitleMedium title={"Open Hours"} />
            <p className="font-medium flex items-center gap-3 mt-4">
              <FaMapMarkerAlt color="white" /> <span>Everyday: 7am - 11pm</span>{" "}
            </p>
            <p className="font-medium flex items-center gap-3 mt-2">
              <FaClock color="white" /> <span>Holiday: 12am - 12pm </span>{" "}
            </p>
          </div>

          <div className="flex flex-col  gap-4">
            <Link href="/restaurant#food-reviews" className="w-full">
              <RestaurantBannerButton text={"Food Reviews"} />
            </Link>
            <Link href="/restaurant#menu">
              <button className="text-white  border border-white hover:border-transparent   bg-transparent hover:bg-[#B1905E] px-20 rounded-full py-3 font-semibold cursor-pointer">
                Browse Menus
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
