'use client'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const ConsoleWL = () => {

    const {watchList}=useSelector(store=>store.user)

    useEffect(()=>{
        console.log(watchList)
    },[watchList])
  return (
    <>
      
    </>
  )
}

export default ConsoleWL
