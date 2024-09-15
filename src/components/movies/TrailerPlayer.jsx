'use client'
import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'


const TrailerPlayer = ({trailerUrl}) => {
  const {trailerVisible}=useSelector(store=>store.movie)

  
  return (
    <>
    
      <div className={`${trailerVisible?'block':'hidden'} video my-10`}> 
        <ReactPlayer controls url={trailerUrl} width='100%' height={600}/>
      </div>

    </>
  )
}

export default TrailerPlayer