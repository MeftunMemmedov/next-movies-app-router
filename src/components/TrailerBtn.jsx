'use client'

import { toggleTrailerVisible } from '@/redux/movieSlice';
import React from 'react'
import { FaRegBookmark, FaPlay } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';


const TrailerBtn = () => {
  const dispatch=useDispatch()
  return (
    <>
        <button onClick={()=>dispatch(toggleTrailerVisible())} className='showTrailerBtn flex items-center md:mb-0 mb-3 md:mr-3 mr-0 hover:text-orange-400 transition duration-400 hover:scale-105'><FaPlay size={30} className='inline mx-1'/><p className='font-semibold'>Watch Trailer</p></button>
    </>
  )
}

export default TrailerBtn