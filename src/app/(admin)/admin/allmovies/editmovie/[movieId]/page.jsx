'use client'
import { getAllMovies } from '@/redux/movieSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const EditMovie = ({params}) => {
    const {movies}=useSelector(store=>store.movie)
    const dispatch=useDispatch()
    const movie=movies.find(mov=>mov.id===params.movieId)

    const [imageUrl, setImageUrl]=useState('')
    const [directorInput,setDirectorInput]=useState('')
    const [castInput,setCastInput]=useState({
        characterName:'',
        realName:''
    })
    const [updatedMovieData, setUpdatedMovieData]=useState({
        title:'',
        type:'',
        year:'',
        rating:'',
        description:'',
        poster:'',
        poster_bg:'',
        trailer_url:'',
        genre:[],
        images:[],
        director:[],
        cast:[]
    })

    const handleChange=(e)=>{
        setNewMovieData(prevState=>{
            return {...prevState,[e.target.name]:e.target.value}
        })
    }

    const handleCastInputChange=(e)=>{
        setCastInput(prevState=>{
            return {...prevState,[e.target.name]:e.target.value}
        })
    }

    const addCast=(cast)=>{
        setNewMovieData(prevData=>({...prevData, cast:[...newMovieData.cast, cast]}))
    }
    
    const genres=['Crime','Drama','Thriller','Adventure', 'Mystery','Fantasy','Horror','Comedy','Action','Sport']

    const selectGenres=(selectedgenre)=>{
        setNewMovieData(prevData=>({...prevData, genre:[...newMovieData.genre, selectedgenre]}))
    }

    const addImages=(selectedimage)=>{
        setNewMovieData(prevData=>({...prevData, images:[...newMovieData.images, selectedimage]}))
    }

    const addDirectors=(selecteddirector)=>{
        setNewMovieData(prevData=>({...prevData, director:[...newMovieData.director, selecteddirector]}))
    }


    const sendNewMovie=async(e)=>{
        e.preventDefault()
        axios.post(postUrl, newMovieData, postHeader)
    }



    useEffect(()=>{
        dispatch(getAllMovies())
    },[])
  return (
    <main>
        <section>
            <form className='flex flex-col' onSubmit={''}>
                <div className='grid grid-cols-3'>

                    <div className='border flex justify-between items-center'>
                        <div className='w-1/5'>
                            <label>Title</label>
                        </div>
                        <div className='w-4/5'>
                            <input type='text' name='title' defaultValue={movie?.title} className='border my-2' onChange={handleChange}/>
                        </div>
                    </div>

                    <div className='border flex justify-between items-center'>
                        <div className='w-1/5'>
                            <label>Type</label> 
                        </div>
                        <div className='w-4/5'>
                            <select className='border my-2' defaultValue={'Movie'} onChange={handleChange}>
                                <option>Movie</option>
                            </select>
                        </div>
                    
                    </div>

                    <div className='border flex justify-between items-center'>
                        <div className='w-1/5'>
                            <label>Year</label>
                        </div>
                        <div className='w-4/5'>
                            <input type='text' name='year' defaultValue={movie?.year} className='border my-2' onChange={handleChange}/>
                        </div>
                    </div>

                    <div className='border flex justify-between items-center'>
                        <div className='w-1/5'>
                            <label>Rating</label>
                        </div>
                        <div className='w-4/5'>
                            <input type='text' name='rating' defaultValue={movie?.rating} className='border my-2' onChange={handleChange}/>
                        </div>
                    </div>

                    <div className='border flex justify-between items-center'>
                        <div className='w-1/5'>
                            <label>Description</label>
                        </div>
                        <div className='w-4/5'>
                            <input type='text' name='description' defaultValue={movie?.description} className='border my-2' onChange={handleChange}/>
                        </div>
                    </div>

                    <div className='border flex justify-between items-center'>
                        <div className='w-1/5'>
                            <label>Poster</label>
                        </div>
                        <div className='w-4/5'>
                            <input type='text' name='poster' className='border my-2' onChange={handleChange}/>
                        </div>
                    </div>

                    <div className='border flex justify-between items-center'>
                        <div className='w-1/5'>
                            <label>Poster_bg</label>
                        </div>
                        <div className='w-4/5'>
                            <input type='text' name='poster_bg' className='border my-2' onChange={handleChange}/>
                        </div>
                    </div>

                    <div className='border flex justify-between items-center'>
                        <div className='w-1/5'>
                            <label>Trailer_url</label>
                        </div>
                        <div className='w-4/5'>
                            <input type='text' name='trailer_url' className='border my-2' onChange={handleChange}/>
                        </div>
                    </div>
                </div>

                <div>
                    
                </div>

                

            </form>
        </section>
        <section>
            
                          
        </section>
    </main>
  )
}

export default EditMovie