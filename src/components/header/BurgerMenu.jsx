'use client'
import React, { useState } from "react";
import { Menu, SubMenu, Item } from "burger-menu";
import 'burger-menu/lib/index.css';
import Link from "next/link";
import { BiMoviePlay } from "react-icons/bi";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn } from "@/redux/userSlice";
import { useRouter } from "next/navigation";
import SubmenuAccordion from "./SubMenuAccordion";


const BurgerMenu = () => {
  const {user,isLoggedIn}=useSelector(store=>store.user)
  const dispatch=useDispatch()
  const [isOpen, setIsOpen] = useState(false);
  const router=useRouter()

  const logOut=()=>{
    dispatch(setIsLoggedIn())
    localStorage.removeItem('userId')
    localStorage.removeItem('isLoggedIn')
  }


  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}>< FaBarsStaggered size={30}/></div>
      <Menu className="burger-menu h-[900px] text-white bg-black relative" isOpen={isOpen} selectedKey={'entry'} onClose={() => setIsOpen(false)}>
        <h2 className="text-orange-400 absolute top-2 left-3 text-3xl">Movies</h2>
        <nav className="flex flex-col">
            <Link href={'/movies'} onClick={()=>setIsOpen(false)} className='my-3'><BiMoviePlay className='inline mb-1 ml-4 mr-2' size={15}/>All Movies</Link>
            <Link href={'/genres'} onClick={()=>setIsOpen(false)} className='my-3'><BsFillCameraReelsFill className='inline mb-1 ml-4 mr-2' size={15}/>Genres</Link>
        </nav>
        <SubmenuAccordion setIsOpen={setIsOpen} logOut={logOut}/>
      </Menu>
    </>
)}

export default BurgerMenu