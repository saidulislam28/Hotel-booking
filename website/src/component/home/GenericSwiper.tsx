/* eslint-disable  */
"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FadeUpWrapper from "../hooks/FadeupWrapper";
import SectionTitle from "../SectionTitle";
import Link from "next/link";

interface IGenericSwiper {
  data: any;
  CardComponent: any;
  perView: number;
  title: string;
  href?: string;
  isButtonShow: boolean;
  buttonText?: string;
}

// JSON data for hotel rooms

const GenericSwiper = ({
  data,
  CardComponent,
  perView = 3,
  title,
  href,
  isButtonShow = false,
  buttonText = "View All",
}: IGenericSwiper) => {
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

  const repeatedData = data?.length < perView + 1 ? [...data, ...data] : data;
  return (
    <FadeUpWrapper>
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <SectionTitle title={title} />

          {/* Navigation Buttons */}
          <div className="flex space-x-2">
            <button
              onClick={handlePrevSlide}
              className="p-2 rounded-full border-gray-300 transition-colors duration-200 text-[#B1905E] hover:text-white
        bg-white hover:bg-[#B1905E] cursor-pointer border"
            >
              <ChevronLeft className="w-8 md:w-3 h-8 md:h-3  text-black hover:text-white" />
            </button>
            <button
              onClick={handleNextSlide}
              className="p-2 rounded-full border border-gray-300 transition-colors duration-200 text-[#B1905E] hover:text-white
        bg-white hover:bg-[#B1905E] cursor-pointer"
            >
              <ChevronRight className="w-8  md:w-3 h-8 md:h-3 text-black hover:text-white" />
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
          {repeatedData?.map((data: any, index: number) => (
            <SwiperSlide key={index}>
              <CardComponent item={data} />
            </SwiperSlide>
          ))}
        </Swiper>

        {isButtonShow && (
          <Link
            href={isButtonShow && (href as string)}
            className="mt-10 flex justify-center"
          >
            <button
              className="px-5 py-2 md:py-3.5 rounded-full border-2 border-[#B1905E] text-sm md:text-md font-bold text-[#B1905E] hover:text-white
        bg-white hover:bg-[#B1905E] cursor-pointer"
            >
              {buttonText}
            </button>
          </Link>
        )}
      </div>
    </FadeUpWrapper>
  );
};

export default GenericSwiper;
