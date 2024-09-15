'use client'
import { addToWatchList, removeFromWatchList } from '@/redux/userSlice'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiBookmark } from 'react-icons/bi'
import { FaBookmark } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const RemoveFromWatchListBTN = ({movie}) => {
    
  return (
    <>
    <button onClick={remove}><BiBookmark size={50} color={`${watchList.some(mov=>mov.id===movie.id)?'red':'white'}`}/></button>
    </>
  )
}

export default RemoveFromWatchListBTN



