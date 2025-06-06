"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../SectionTitle";

// JSON data for hotel rooms

const GenericSwiper = ({ data, CardComponent, perView = 3 , title}: any) => {
  const swiperRef = useRef(null);

  const breakpoints = {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1280: { slidesPerView: perView },
  };

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

  // const renderStars = (rating, reviews) => {
  //   if (rating === 0) {
  //     return (
  //       <div className="flex items-center text-gray-400">
  //         <Star className="w-4 h-4 mr-1" />
  //         <span className="text-sm">0/5</span>
  //       </div>
  //     );
  //   }

  //   const stars = [];
  //   const fullStars = Math.floor(rating);
  //   const hasHalfStar = rating % 1 !== 0;

  //   for (let i = 0; i < fullStars; i++) {
  //     stars.push(
  //       <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
  //     );
  //   }

  //   if (hasHalfStar) {
  //     stars.push(
  //       <Star
  //         key="half"
  //         className="w-4 h-4 fill-yellow-400/50 text-yellow-400"
  //       />
  //     );
  //   }

  //   const emptyStars = 5 - Math.ceil(rating);
  //   for (let i = 0; i < emptyStars; i++) {
  //     stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
  //   }

  //   return (
  //     <div className="flex items-center">
  //       <div className="flex mr-2">{stars}</div>
  //       <span className="text-sm text-gray-600">
  //         {rating}/5{" "}
  //         {reviews > 0 && `(${reviews} review${reviews > 1 ? "s" : ""})`}
  //       </span>
  //     </div>
  //   );
  // };
  const repeatedData = data.length < perView + 1 ? [...data, ...data] : data;
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <SectionTitle title={title} />

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
        breakpoints={breakpoints}
        loop={true}
      >
        {repeatedData?.map((room, index) => (
          <SwiperSlide key={index}>
            <CardComponent item={room} />
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

export default GenericSwiper;
