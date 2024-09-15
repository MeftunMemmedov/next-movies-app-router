'use client'
import React from 'react'
import Carousel from "react-multi-carousel";
import Image from 'next/image';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }

const ImageCarousel = ({images, movie}) => {
  return (    
      <Carousel responsive={responsive} ssr className=''>
          {
            images.map((img, index)=>{
              return (
                <div className='w-96 h-56 mx-12 border relative' key={index}>
                      <Image 
                      src={img} 
                      fill 
                      alt={`${movie.title}-scene-image-${index}`}
                      objectFit='cover'/>
                  </div>
              )
            })
              }      
      </Carousel>
  )
}

export default ImageCarousel
