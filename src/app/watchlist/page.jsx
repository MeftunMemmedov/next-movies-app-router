'use client'
import React, { useEffect, useState } from 'react'
import SingleMovie from '@/components/movies/SingleMovie'
import { getAllMovies } from '@/redux/movieSlice'
import { getCurrentUser, removeFromWatchList, setWLTriggeredFalse } from '@/redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

const WatchList = () => {
  const [triggered2, setTriggered2]=useState(false)
  const {watchList}=useSelector(store=>store.user)
  const dispatch=useDispatch()
  const userId=localStorage.getItem('userId')


  const remove=(mov)=>{
    dispatch(removeFromWatchList(mov))
    setTriggered2(true)
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
    }finally{
        setTriggered2(false)
    }

}

useEffect(()=>{
   if(triggered2){
    send()
   }

   console.log(triggered2)
  },[triggered2, watchList])

  return (
    <main>
      <section>
        <div className={`container m-auto ${watchList.length==0?'h-screen flex justify-center items-center':'grid lg:grid-cols-4 md:grid-cols-3'}`} >
        {
          watchList.length==0?
          <>
          <h2>No Movies</h2>
          </>
          :
          watchList.map((mov, index)=>{
            return(
              <SingleMovie movie={mov} key={index} triggered2={triggered2} setTriggered2={setTriggered2}/>
            )
          })
        }
        </div>
      </section>
    </main>
  )
}

export default WatchList


