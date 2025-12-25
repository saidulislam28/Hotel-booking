/* eslint-disable */
import { IoIosArrowForward } from "react-icons/io";

const PackageCard = ({ item }: any) => {
  return (
    <div className="p-7 flex flex-col bg-white hover:bg-[#B1905E] group transition-all duration-1000 hover:cursor-pointer rounded-xl mt-10 h-full ">
      {/* Title */}
      <h1 className="text-2xl font-bold min-h-[64px] group-hover:text-white">
        {item.title}
      </h1>

      {/* Spacer */}
      <div className="flex-grow my-2 min-h-[240px] text-[#4F5E71] group-hover:text-white">
        {item?.features.map((feature: any, index: any) => (
          <div key={index} className="flex my-2 items-start gap-3 ">
            <IoIosArrowForward className="min-w-[24px]" size={20} />
            <p>{feature?.feature}</p>
          </div>
        ))}
      </div>

      {/* Bottom border (optional footer separator) */}
      <div className="border-t border-gray-300 mt-auto pt-3" />
      <div className="flex items-center justify-between h-12">
        <h5 className="text-2xl font-bold text-[#B1905E] group-hover:text-white">
          ${item.price}
        </h5>
        <button
          className="px-4 py-2 rounded-full border-1 border-[#B1905E] text-md font-medium text-[#B1905E]
        bg-white cursor-pointer mb-0 hover:mb-5 transition-all duration-400 ease-in-out"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
