"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";


const ImageCarousel = ({ images, movie }) => {
  return (
    <Swiper
    breakpoints={{
      1024:{
        slidesPerView:3
      },
      768:{
        slidesPerView:2
      },
      // 425:{
      //   slidesPerView:2
      // },
      320:{
        slidesPerView:1
      }
    }}
      // slidesPerView={3}
      spaceBetween={10}
      freeMode={true}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      {images.map((img, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="w-96 h-56 border relative" >
              <Image
                src={img}
                fill
                alt={`${movie.title}-scene-image-${index}`}
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ImageCarousel;
