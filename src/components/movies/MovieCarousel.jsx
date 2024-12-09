"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import SingleMovie from "./SingleMovie";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const MovieCarousel = ({ movies }) => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <>
      <Swiper
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          425: {
            slidesPerView: 1,
          },
         
        }}
        spaceBetween={30}
        modules={[FreeMode, Navigation]}
        className="movieSLider"
        ref={swiperRef}
        onSlideChange={handleSlideChange}
      >
        {movies.map((topMovie, index) => {
          return (
            <SwiperSlide key={index}>
              <SingleMovie movie={topMovie} movieKey={index} />
            </SwiperSlide>
          );
        })}
        <div className="flex justify-between items-center absolute top-0  w-full h-full ">
          <button
            onClick={handlePrev}
            className="z-50 ml-[-20px]"
            disabled={currentIndex === 0}
          >
            <IoIosArrowBack
              size={70}
              color="orange"
              className={`transition duration-500 ${
                currentIndex === 0 || movies.length <= 1
                  ? "hidden cursor-not-allowed"
                  : "hover:scale-[1.2]"
              }`}
            />
          </button>
          <button
            onClick={handleNext}
            className="z-50 mr-[-20px]"
            disabled={currentIndex === movies.length - 2}
          >
            <IoIosArrowForward
              size={70}
              color="orange"
              className={`${
                currentIndex === movies.length - 4 || movies.length < 4
                  ? "hidden"
                  : "hover:scale-[1.2] transition duration-500"
              }`}
            />
          </button>
        </div>
      </Swiper>
    </>
  );
};

export default MovieCarousel;
