'use client'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import SingleMovie from './SingleMovie';
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";



const MovieCarousel = ({movies}) => {
    const swiperRef=useRef(null)

    const handlePrev=()=>{
        if(swiperRef.current){
            swiperRef.current.swiper.slidePrev()
        }
    }

    const handleNext=()=>{
        if(swiperRef.current){
            swiperRef.current.swiper.slideNext()
        }
    }

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[FreeMode, Navigation]}
        className="movieSLider"
        ref={swiperRef}
      >
        {
            movies.map((topMovie, index)=>{
              return <SwiperSlide key={index}><SingleMovie movie={topMovie} movieKey={index}/></SwiperSlide>
              })
              }   
        <div className='flex justify-between items-center absolute top-0  w-full h-full '>
              <button onClick={handlePrev} className='z-50 ml-[-20px]'><IoIosArrowBack size={70} color='orange' className=' hover:scale-[1.2] transition duration-500'/></button>
              <button onClick={handleNext} className='z-50 mr-[-20px]'><IoIosArrowForward size={70} color='orange' className=' hover:scale-[1.2] transition duration-500'/></button>
        </div>   
      </Swiper>
    </>
  )
}

export default MovieCarousel
