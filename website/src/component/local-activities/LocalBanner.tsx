import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import SectionTitleMedium from "../SectionTitleMedium";
import SectionTitle from "../SectionTitle";

export default function LocalBanner() {
  return (
    <div
      className="relative h-[450px] bg-cover bg-center rounded-xl"
      style={{ backgroundImage: "url('/banner-min.png')" }}
    >
      {/* Dark Overlay */}
      <div className="relative z-20 flex p-8 text-white h-full px-4">
        <div className="flex flex-col w-full justify-center pl-8 gap-8">
          <div>
            <SectionTitleMedium title={"Booking Hotel Room"} />
            <div className="max-w-sm mt-5 ">
              <SectionTitle title={"Running & Walking along the beach"} />
            </div>
          </div>

          <div className="flex flex-col  gap-4">
            <a href="https://maps.app.goo.gl/yo8vJPC9ocG3FXNT6" target="_blank">
              <button className="primary_text hover:text-white  bg-white hover:bg-[#B1905E] px-4 rounded-full py-2 font-semibold cursor-pointer">
                Book Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
