'use client'
import { getAllMovies } from '@/redux/movieSlice'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AllMovies = () => {
  const {movies}=useSelector(store=>store.movie)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getAllMovies())
  },[])
  return (
    <main>
        <section>
            <div className='h-16 flex items-center'>
                <Link className='p-5 bg-white text-black rounded-xl' href={'/admin/allmovies/addmovie'}>Add new Movie</Link>
            </div>
        </section>
        <section>
          <div className='container m-auto'>
              {
                movies.map((movie, index)=>{
                  return (
                    <div className='border flex justify-between my-3 rounded-xl px-3' key={index}>
                      <div className='flex justify-between items-center  w-1/3'>
                        <img src={movie.poster} width='50'/>
                        <h3>{movie.title}</h3>
                      </div>                      
                      <div className='w-1/3 flex justify-around items-center'>
                        <button onClick={''}>Delete</button>
                        <Link href={`/admin/allmovies/editmovie/${movie.id}`}>Edit</Link>
                      </div>                      
                    </div>
                  )
                })
              }
          </div>
        </section>

    </main>
  )
}

export default AllMovies