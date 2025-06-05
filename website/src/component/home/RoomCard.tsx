"use client";
import React, { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Maximize2,
  Bed,
  Users,
} from "lucide-react";

// Swiper CSS (you'll need to add these to your Next.js project)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

// Mock Swiper component for demonstration
const Swiper = ({
  children,
  spaceBetween,
  slidesPerView,
  navigation,
  onBeforeInit,
  className,
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="flex transition-transform duration-300"
        style={{ transform: "translateX(0%)" }}
      >
        {children}
      </div>
    </div>
  );
};

const SwiperSlide = ({ children }) => {
  return (
    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2">
      {children}
    </div>
  );
};

// JSON data for hotel rooms
const roomsData = [
  {
    id: 1,
    title: "Tower Deluxe Room W King Bed",
    category: "Deluxe Room",
    featured: false,
    image: "banner-min.png",
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
    image: "banner-min.png",
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
    image: "banner-min.png",
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
    image: "banner-min.png",
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
    image: "/api/placeholder/300/200",
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
    image: "/api/placeholder/300/200",
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
    image: "/api/placeholder/300/200",
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
    image: "/api/placeholder/300/200",
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
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
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
        <h2 className="text-3xl font-bold text-gray-900">Our Rooms & Suites</h2>

        {/* Navigation Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={handlePrevSlide}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={handleNextSlide}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Swiper Container */}
      <div className="relative">
        <Swiper
          ref={swiperRef}
          spaceBetween={20}
          slidesPerView={1}
          navigation={false}
          className="rooms-swiper"
        >
          {roomsData.map((room) => (
            <SwiperSlide key={room.id}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Room Image */}
                <div className="relative h-48 bg-gray-200">
                  {/* <Image
                    width={400}
                    height={300}
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover"
                    prefix="blur"
                  /> */}

                  {/* Category Tags */}
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
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {room.title}
                  </h3>

                  {/* Rating */}
                  <div className="mb-4">
                    {renderStars(room.rating, room.reviews)}
                  </div>

                  {/* Room Features */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Maximize2 className="w-4 h-4 mr-2" />
                      <span>Room Size: {room.roomSize}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Bed className="w-4 h-4 mr-2" />
                      <span>Bed: {room.beds}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      <span>Max: {room.maxGuests}</span>
                    </div>
                  </div>

                  {/* Price and Action */}
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {room.currency}
                      {room.price.toFixed(1)}
                      <span className="text-sm text-gray-500 font-normal">
                        {" "}
                        /night
                      </span>
                    </div>
                    <button className="px-4 py-2 text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200">
                      View Detail
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* View All Rooms Button */}
      <div className="text-center mt-8">
        <button className="px-8 py-3 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white rounded-full font-medium transition-all duration-300">
          View All Rooms
        </button>
      </div>
    </div>
  );
};

export default HotelRoomsSwiper;
