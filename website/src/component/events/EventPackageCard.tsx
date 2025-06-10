import Image from "next/image";
import { FaCheck, FaClock } from "react-icons/fa";
import FadeUpWrapper from "../hooks/FadeupWrapper";

const EventPackageCard = ({ item, index }) => {
  return (
    <FadeUpWrapper>
      <div
        className={`flex items-center  gap-16 mb-30
    ${index % 2 === 1 ? "flex-row-reverse" : "flex-row"}
    `}
      >
        <div className="w-[50%] space-y-5">
          <h2 className="text-3xl font-bold">{item.title}</h2>
          <p className="text-[#4F5E71] line-clamp-4">{item.desc}</p>
          <div>
            <p className="text-[#4F5E71] mb-5 ">
              We've crafted our amenities to ensure your event is seamless from
              start to finish:
            </p>
            <div className="grid grid-cols-3 gap-5">
              {item?.service?.map((ser, index) => (
                <p
                  key={index}
                  className="text-[#4F5E71] flex items-center gap-2"
                >
                  <FaCheck color="lightgreen" /> <span>{ser}</span>{" "}
                </p>
              ))}
            </div>
          </div>
          <button className="text-[#B1905E] border border-[#B1905E] cursor-pointer hover:text-white bg-white hover:bg-[#B1905E] px-5 rounded-full py-3 font-semibold">
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

export default EventPackageCard;
