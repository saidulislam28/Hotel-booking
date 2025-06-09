import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import SectionTitle from "../SectionTitle";

export default function RestaurantBanner() {
  return (
    <div
      className="relative h-[800px] bg-cover bg-center w-full"
      style={{ backgroundImage: "url('/banner-min.png')" }}
    >
      {/* Dark Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,2,0), rgba(0,0,0,0.8))",
        }}
      ></div>

      {/* Content goes above the overlay */}

      <div className="relative z-20 flex items-end max-w-7xl mx-auto text-white h-[90%]  px-4">
        <div className="flex justify-between w-full">
          <div>
            <SectionTitle title={"The King Restaurant"} />
            <p className="font-semibold flex items-center gap-3 mt-8">
              <FaMapMarkerAlt color="white" />{" "}
              <span>
                S. Ali Tower, plot no-22, Section-6/A, Mirpur Dhaka, 1217
              </span>{" "}
            </p>
            <p className="font-semibold flex items-center gap-3 mt-2">
              <FaClock color="white" /> <span>Open time: 7am - 11pm </span>{" "}
            </p>
          </div>
          <div className="flex flex-col  gap-6">
            <button className="text-[#B1905E] cursor-pointer hover:text-white bg-white hover:bg-[#B1905E] px-20 rounded-full py-3 font-semibold ">
              View Menu
            </button>
            <a href="https://maps.app.goo.gl/yo8vJPC9ocG3FXNT6" target="_blank">
              <button className="text-white  border border-white hover:border-transparent   bg-transparent hover:bg-[#B1905E] px-20 rounded-full py-3 font-semibold cursor-pointer">
                View Map
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
