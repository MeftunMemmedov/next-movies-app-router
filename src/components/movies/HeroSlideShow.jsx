// ImageSlider.js
'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/effect-fade';
import 'swiper/css/zoom' // Import zoom effect styles

// Import Swiper modules
import { Autoplay, EffectFade, Zoom } from 'swiper/modules';
import Image from 'next/image';

const HeroSlideShow = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Zoom]}
      effect="fade"
      zoom={true} // Enable zoom
      autoplay={{
        delay: 3000, // Delay in ms
        disableOnInteraction: false, // Continue autoplay after user interactions
      }}
      loop={true} // Enable infinite loop
      fadeEffect={{
        crossFade: true, // Cross fade between slides
      }}
      className="mySwiper h-full border border-red"
    >
      <SwiperSlide>
        <div className="swiper-zoom-container relative">
          <Image fill src="https://shonabellainfilm.wordpress.com/wp-content/uploads/2018/12/django-unchained-movie-screencaps.com-4272.jpg" alt="Slide 1" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-zoom-container relative">
          <Image fill src="https://i2.wp.com/screenagewasteland.com/wp-content/uploads/2020/02/Prisoners.jpg?fit=1110%2C555" alt="Slide 1" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-zoom-container relative">
          <Image fill src="https://static01.nyt.com/images/2019/10/09/arts/joker-anatomy2/joker-anatomy2-videoSixteenByNineJumbo1600.jpg" alt="Slide 1" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-zoom-container relative">
          <Image fill src="https://ksqd.org/wp-content/uploads/2022/06/FilmGang-Inglourious-Basterds-MovieScreenshot.jpg" alt="Slide 1" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-zoom-container relative">
          <Image fill src="https://people.com/thmb/UefwP4NnAPAUGhGES4sq1p3KtLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/knives-out-3-122822-1-ed411a236a43424b8ec1751fe4bd6398.jpg" alt="Slide 1" />
        </div>
      </SwiperSlide>

    </Swiper>
  );
};

export default HeroSlideShow;
