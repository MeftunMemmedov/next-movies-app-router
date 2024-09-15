// 'use client'
import React from 'react'
// import localFont from 'next/font/local'
import { LiaImdb } from "react-icons/lia";
import Link from 'next/link';
import Image from 'next/image';
import WatchListBTN from './WatchListBTN';



// const titleFont = localFont({ src: '../public/fonts/ArchivoBlack-Regular.ttf' })

const SingleMovie = ({movie, setTriggered2}) => {
  return (
<div className='flex justify-center items-center'>
    <div className='w-11/12 my-5 relative overflow-hidden border border-slate-600 hover:border-white hover:border-dashed transition duration-500'>
        {movie.poster?<Image src={movie.poster} width={1920} height={1080} alt={`${movie.title}-poster`} className='w-full h-full object-cover movie-image'/>:null}

        <div className={` absolute top-0  w-full h-full flex flex-col justify-center items-center movie-info opacity-0 hover:opacity-100 transition duration-500 px-1`}>
            <div className=' w-full flex justify-end absolute top-0 py-2 pr-1'>
                <WatchListBTN movie={movie} setTriggered2={setTriggered2} iconSize={40}/>
            </div>
            <Link href={`/movies/${movie.title}`} scroll>
                <h2 className={` text-3xl font-bold text-center h-[150px] `}>{movie.title}</h2>
            </Link>
        
                <div className='flex justify-center h-10'>
                    {movie.genre?.slice(0,3).map((genre,i)=>{
                        return <h3 key={i} className={`border border-black text-xl font-bold bg-amber-600 px-1 h-[30px] text-black ${movie.genre.length<2?'mx-1':'mx-0'}`}>{genre}</h3>
                    })}                               
                </div>

                <h3>{movie.year}</h3>
                <div className='flex my-3 font-bold'>
                    <LiaImdb size={40} color='gold' className='inline mx-1'/><h3 className='mt-2'>{movie.rating}</h3>
                </div>
        </div>
    </div>
</div>
  )
}

export default SingleMovie



