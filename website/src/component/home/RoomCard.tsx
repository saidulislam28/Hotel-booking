"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import SectionTitle from "../SectionTitle";

// JSON data for hotel rooms
const roomsData = [
  {
    id: 1,
    title: "Tower Deluxe Room W King Bed",
    category: "Deluxe Room",
    featured: false,
    image: "/banner-min.png",
    rating: 0,
    reviews: 0,
    roomSize: "50sqm",
    beds: "1 beds",
    maxGuests: "1 adults",
    price: 88.0,
    currency: "$",
  },
  {
    id: 2,
    title: "Deluxe King Room With Balcony",
    category: "Double Room",
    featured: true,
    image: "/banner-min.png",
    rating: 4.5,
    reviews: 2,
    roomSize: "50sqm",
    beds: "1 beds",
    maxGuests: "6 adults",
    price: 110.0,
    currency: "$",
  },
  {
    id: 3,
    title: "American Parks Trail End Rapid City",
    category: "Double Room",
    featured: true,
    image: "/banner-min.png",
    rating: 4.7,
    reviews: 3,
    roomSize: "50sqm",
    beds: "2 beds",
    maxGuests: "2 adults",
    price: 308.0,
    currency: "$",
  },
  {
    id: 4,
    title: "Hotel Deluxe Room W King Bed",
    category: "Deluxe Room",
    featured: false,
    image: "/banner-min.png",
    rating: 1,
    reviews: 1,
    roomSize: "50sqm",
    beds: "1 beds",
    maxGuests: "1 adults",
    price: 198.0,
    currency: "$",
  },
  {
    id: 5,
    title: "Premium Suite With Ocean View",
    category: "Suite",
    featured: true,
    image: "/banner-min.png",
    rating: 4.8,
    reviews: 5,
    roomSize: "75sqm",
    beds: "1 beds",
    maxGuests: "4 adults",
    price: 450.0,
    currency: "$",
  },
  {
    id: 6,
    title: "Executive Business Room",
    category: "Executive Room",
    featured: false,
    image: "/banner-min.png",
    rating: 4.2,
    reviews: 8,
    roomSize: "45sqm",
    beds: "1 beds",
    maxGuests: "2 adults",
    price: 275.0,
    currency: "$",
  },
  {
    id: 7,
    title: "Executive Business Room",
    category: "Executive Room",
    featured: false,
    image: "/banner-min.png",
    rating: 4.2,
    reviews: 8,
    roomSize: "45sqm",
    beds: "1 beds",
    maxGuests: "2 adults",
    price: 275.0,
    currency: "$",
  },
  {
    id: 8,
    title: "Executive Business Room",
    category: "Executive Room",
    featured: false,
    image: "/banner-min.png",
    rating: 4.2,
    reviews: 8,
    roomSize: "45sqm",
    beds: "1 beds",
    maxGuests: "2 adults",
    price: 275.0,
    currency: "$",
  },
];

const HotelRoomsSwiper = () => {
  const swiperRef = useRef(null);

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const renderStars = (rating, reviews) => {
    if (rating === 0) {
      return (
        <div className="flex items-center text-gray-400">
          <Star className="w-4 h-4 mr-1" />
          <span className="text-sm">0/5</span>
        </div>
      );
    }

    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star
          key="half"
          className="w-4 h-4 fill-yellow-400/50 text-yellow-400"
        />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return (
      <div className="flex items-center">
        <div className="flex mr-2">{stars}</div>
        <span className="text-sm text-gray-600">
          {rating}/5{" "}
          {reviews > 0 && `(${reviews} review${reviews > 1 ? "s" : ""})`}
        </span>
      </div>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <SectionTitle title={"Our rooms & suites"} />

        {/* Navigation Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={handlePrevSlide}
            className="p-2 rounded-full border border-gray-300 transition-colors duration-200 text-[#B1905E] hover:text-white
        bg-white hover:bg-[#B1905E] cursor-pointer"
          >
            <ChevronLeft className="w-8 h-8 text-black hover:text-white" />
          </button>
          <button
            onClick={handleNextSlide}
            className="p-2 rounded-full border border-gray-300 transition-colors duration-200 text-[#B1905E] hover:text-white
        bg-white hover:bg-[#B1905E] cursor-pointer"
          >
            <ChevronRight className="w-8 h-8 text-black hover:text-white" />
          </button>
        </div>
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {roomsData.map((room) => (
          <SwiperSlide key={room.id}>
            <div className="bg-[#F2F4F4] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Room Image */}
              <div className="relative h-48 bg-gray-200">
                <div className="overflow-hidden rounded-t-xl w-full">
                  <Image
                    width={400}
                    height={300}
                    src={room.image}
                    alt={room.title}
                    className="transition-transform duration-500 ease-in-out hover:scale-110  w-full h-full object-cover cursor-pointer"
                  />
                </div>

                <div className="absolute top-4 left-4 flex space-x-2">
                  {room.featured && (
                    <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  )}
                  <span className="px-3 py-1 bg-pink-500 text-white text-xs font-medium rounded-full">
                    {room.category}
                  </span>
                </div>
              </div>

              {/* Room Details */}
              <div className="p-6 flex-1">
                <h3 className="hover_text mb-3 line-clamp-1 cursor-pointer">
                  {room.title}
                </h3>
                <div className="mb-4">
                  {renderStars(room.rating, room.reviews)}
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Size: {room.roomSize}</p>
                  <p>Beds: {room.beds}</p>
                  <p>Guests: {room.maxGuests}</p>
                </div>
                <div
                  className="my-5"
                  style={{ borderTop: "0.5px solid #9CA3AF" }}
                ></div>

                <div className="mt-4 font-bold text-gray-900 flex items-center justify-between">
                  <h4>
                    {room.currency}
                    {room.price.toFixed(2)} /{" "}
                    <span className="font-normal text-[#4F5E71]">night</span>
                  </h4>
                  <div className="h-12 flex justify-center">
                    <button className="font-medium text-md text-[#B1905E] hover:text-black hover:cursor-pointer  mb-0 hover:mb-5 transition-all duration-400 ease-in-out">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-10 flex justify-center">
        <button
          className="px-5 py-3.5 rounded-full border-2 border-[#B1905E] text-md font-bold text-[#B1905E] hover:text-white
        bg-white hover:bg-[#B1905E] cursor-pointer"
        >
          View All Rooms
        </button>
      </div>
    </div>
  );
};

export default HotelRoomsSwiper;
