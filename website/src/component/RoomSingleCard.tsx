"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const RoomSingleCard = ({ item }) => {
  const router = useRouter();

  return (
    // <Fade direction="up" duration={2000}>
    <div className="bg-[#F2F4F4] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Room Image */}
      <div className="relative h-48 bg-gray-200">
        <div className="overflow-hidden rounded-t-xl w-full">
          <Image
            width={400}
            height={300}
            src={item?.image}
            alt={item?.title}
            className="transition-transform duration-500 ease-in-out hover:scale-110  w-full h-full object-cover cursor-pointer"
          />
        </div>

        <div className="absolute top-4 left-4 flex space-x-2">
          {item?.featured && (
            <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
              Featured
            </span>
          )}
          <span className="px-3 py-1 bg-pink-500 text-white text-xs font-medium rounded-full">
            {item?.category}
          </span>
        </div>
      </div>

      {/* Room Details */}
      <div className="p-4 flex-1">
        <h3 className="hover_text_reverse mb-1 line-clamp-1 cursor-pointer font-semibold">
          {item?.title}
        </h3>
        <div className="mb-1">
          {/* {renderStars(room.rating, room.reviews)} */}
          {item?.rating}
        </div>
        <div className="text-sm text-gray-600 space-y-1">
          <p>Size: {item?.roomSize}</p>
          <p>Beds: {item?.beds}</p>
          <p>Guests: {item?.maxGuests}</p>
        </div>
        <div
          className="my-3"
          style={{ borderTop: "0.5px solid #9CA3AF" }}
        ></div>

        <div className="mt-2 font-bold text-gray-900 flex items-center justify-between">
          <h4>
            {item?.currency}
            {item?.price?.toFixed(2)} /{" "}
            <span className="font-normal text-[#4F5E71]">night</span>
          </h4>

          <div className="h-12 flex justify-center">
            <button
              onClick={() => router.push(`/rooms/${item?.id}`)}
              className="font-medium text-md text-[#B1905E] hover:text-black hover:cursor-pointer  mb-0 hover:mb-5 transition-all duration-400 ease-in-out"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSingleCard;
