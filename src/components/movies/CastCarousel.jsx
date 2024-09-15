'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function CastCarousel({cast}) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={24}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {
            cast.map((actor,i)=>{
                return(
                    <SwiperSlide className='' key={i}>
                        <div className='flex flex-col w-36 m-auto text-center' >
                            <div className=''>
                            <img src='https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg' className='w-full rounded-full'/>
                            </div>
                            <div>
                            <h2>{actor.realName}</h2>
                            <h2 className='text-gray-700'>{actor.characterName}</h2>
                            </div>
                        </div>
                    </SwiperSlide>

                )
            })
        }
      </Swiper>
    </>
  );
}
