import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import RestaurantBannerButton from "../RestaurantBannerButton";
import SectionTitleMedium from "../SectionTitleMedium";

export default function RestaurantBanner() {
  return (
    <div
      className="relative h-[600px] bg-cover bg-center rounded-xl"
      style={{ backgroundImage: "url('/banner-min.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10 rounded-xl"></div>

      {/* Content goes above the overlay */}

      <div className="relative z-20 flex items-end p-8 text-white h-full  px-4">
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
            <RestaurantBannerButton text={"Book a Table"} />
            <a href="https://maps.app.goo.gl/yo8vJPC9ocG3FXNT6" target="_blank">
              <button className="text-white  border border-white hover:border-transparent   bg-transparent hover:bg-[#B1905E] px-20 rounded-full py-3 font-semibold cursor-pointer">
                Browse Menus
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
