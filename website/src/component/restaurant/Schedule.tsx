import SectionTitleMedium from "@/component/SectionTitleMedium";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import FadeUpWrapper from "../hooks/FadeupWrapper";
const Schedule = () => {
  return (
    <FadeUpWrapper>
      <div className="block md:hidden  mt-10">
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <SectionTitleMedium title={"Contact Us"} />
            <p className="font-medium flex items-center gap-3 mt-2">
              <FaMapMarkerAlt color="black" /> <span>Mirpur Dhaka, 1217</span>{" "}
            </p>
            <p className="font-medium flex items-center gap-3 mt-2">
              <FaClock color="black" /> <span>Open time: 7am - 11pm </span>{" "}
            </p>
          </div>
          <div className="">
            <SectionTitleMedium title={"Address"} />
            <p className="font-medium flex items-start gap-3 mt-2 max-w-64">
              <FaMapMarkerAlt size={32} color="black" />{" "}
              <span>
                S. Ali Tower, plot no-22, Section-6/A, Main road-1, Mirpur-6
                Dhaka, 1217
              </span>{" "}
            </p>
          </div>
          <div className="col-span-2">
            <SectionTitleMedium title={"Open Hours"} />
            <p className="font-medium flex items-center gap-3 mt-4">
              <FaMapMarkerAlt color="black" /> <span>Everyday: 7am - 11pm</span>{" "}
            </p>
            <p className="font-medium flex items-center gap-3 mt-2">
              <FaClock color="black" /> <span>Holiday: 12am - 12pm </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </FadeUpWrapper>
  );
};

export default Schedule;
