'use client'
import { addToWatchList, removeFromWatchList } from '@/redux/userSlice'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiBookmark } from 'react-icons/bi'
import { FaBookmark, FaRegBookmark } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { IoBookmarkSharp } from "react-icons/io5";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Link from 'next/link'


const WatchListBTN = ({movie, setTriggered2, btnTitle, styles, iconSize}) => {
    const [open, setOpen] = useState(false);
    const [triggered, setTriggered]=useState(false)
    const {watchList, isLoggedIn}=useSelector(store=>store.user)
    const dispatch=useDispatch()
    const userId=localStorage.getItem('userId')

    const toggleWatchList=()=>{
        if(!isLoggedIn){
            setOpen(true)
        }else if(watchList.some(mov=>mov.id==movie.id)){
            dispatch(removeFromWatchList(movie))
        }else{
            dispatch(addToWatchList(movie))
        }
        setTriggered(true)
        if(setTriggered2)setTriggered2(true) 
    }

    const send=async()=>{
        try {
            const data={
                watchlist:watchList
            }
            await axios.patch(`https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/Movies-Users?id=eq.${userId}`, data,{
                headers:{
                    apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
                    Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
                    "Content-Type": "application/json"
                }
            })
        } catch (error) {
            console.log(error, 'fuck')
        } finally {
            setTriggered(false)

        }
        
    }

    useEffect(()=>{
        if(triggered){
           send()
        }
    }, [triggered, watchList])

  return (
    <>
    <button 
    onClick={toggleWatchList}
    className={`flex items-center md:ml-2 m-0 ${styles}`}
    >   
        {
            watchList?.some(mov=>mov.id===movie.id)?
            <FaBookmark size={iconSize} />
            :
            <FaRegBookmark size={iconSize}/>
        }
            {btnTitle?<p className='ml-2 font-semibold'>{watchList?.some(mov=>mov.id===movie.id)?'Remove from WatchList':'Add To WatchList'}</p>:''} 
        </button>
        <Modal open={open} onClose={()=>setOpen(false)} className='p-0' center>
            <div className='text-black'>
                <div className=''>
                    <p className='my-3'>Please Sign-in to add movie to WatchList</p>
                    <Link href={'/sign-in'} className='rounded-2xl bg-gray-800 py-2 px-3 text-white font-semibold'>Sign In</Link>
                </div>
            </div>    
        </Modal>
    </>
  )
}

export default WatchListBTN



