'use client'
import { getAllMovies } from '@/redux/movieSlice'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AdminPage = () => {
    const {movies}=useSelector(store=>store.movie)
    const dispatch=useDispatch()
    
    useEffect(()=>{
        dispatch(getAllMovies())
    },[])
    
  return (
    <main className=''>
        <section>
            <div className=' container m-auto'>
                <div  className='border w-72 h-72 rounded-xl'>
                    <Link href={'/admin/allmovies'}  className=' w-full h-full flex flex-col justify-center items-center'>
                        <h2 className='text-5xl'>Movies</h2>
                        <p>{movies.length}</p>
                    </Link>
                </div>
            </div>
        </section>
    </main>
  )
}

export default AdminPage