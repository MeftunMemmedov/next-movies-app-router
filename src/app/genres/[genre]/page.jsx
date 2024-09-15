import React from 'react'
import GenreDescription from '@/components/movies/GenreDescription'
import SingleMovie from '@/components/movies/SingleMovie'
import Image from 'next/image'
import Link from 'next/link'

const url='https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/Movies?select=*'
const apiKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs'
const authorization='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs'

const options={
  headers:{
    apikey:apiKey,
    Authorization:authorization
  }
}   

export const generateMetadata=async({params})=>{

  return{
    title:`Movies | ${params.genre.charAt(0).toUpperCase()+params.genre.slice(1)} Movies`,
    description:`${params.genre} movies`,
    keywords:`${params.genre} movies`,
    author:'MFTN',
  }
}


const getMovies=async(title)=>{
  const response=await fetch(url, options).then(res=>res.json())
  return response
}

const MoviesByGenre = async({params}) => {
    const movies=await getMovies()
    const moviesByGenre=movies.filter(mov=>mov.genre.includes(params.genre.charAt(0).toUpperCase()+params.genre.slice(1)))
  return (
    <main>
        <section>
            <div className='h-screen relative overflow-hidden  category-page-banner'>
                <div className='container m-auto  h-full px-10'>
                    <div className='w-1/2 h-full flex flex-col justify-center items-start'>
                        <h2 className='text-5xl font-bold mb-5'>{params.genre.charAt(0).toUpperCase()+params.genre.slice(1)} Movies</h2>
                        <GenreDescription param={params.genre}/>
                    </div>
                </div>
            </div>
        </section>

        <section>
          <div className='container m-auto grid lg:grid-cols-4 md:grid-cols-3 mt-10'>
          {
              moviesByGenre.map((movie, index)=>{
                  return(
                      <SingleMovie movie={movie} key={index}/>
                  )
              })
          }
          </div>
        </section>
    </main>
  )
}

export default MoviesByGenre
