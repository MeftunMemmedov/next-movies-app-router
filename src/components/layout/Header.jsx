'use client'
import { getCurrentUser } from '@/redux/userSlice';
import Link from 'next/link'
import { useEffect } from 'react';
import { BiMoviePlay } from "react-icons/bi";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../header/SearchBar';
import UserDropDown from '../header/UserDropDown';
import BurgerMenu from '../header/BurgerMenu';

const Header = ({}) => {
  const {isLoggedIn, user, watchList}=useSelector(store=>store.user)
  const dispatch=useDispatch()

  const userId=localStorage.getItem('userId')
  useEffect(()=>{
    console.log(watchList)
  },[watchList])
  
  useEffect(()=>{
    dispatch(getCurrentUser(userId))
  },[userId])

  return (
    
    <header className='sticky top-0 z-50'>
      <div className='container m-auto flex justify-between items-center h-16'>
        <div className='w-1/5  flex justify-center items-center'>
          <Link href={'/'}>
            <h2 className={`font-bold md:text-2xl text-xl lg:ml-5 m-0 w-1/5 text-orange-400`}>Movies</h2>
          </Link>
        </div>

        <div className='lg:w-1/4 w-1/3 relative '>
          <SearchBar />
        </div>

        <div className='w-1/3  lg:block hidden'>
          <nav className=' h-full flex items-center flex gap-x-2'>
            <Link href={'/movies'} className=' px-2 rounded-3xl'><BiMoviePlay className='inline mb-1 mx-1' size={20}/>All Movies</Link>
            <Link href={'/genres'} className=' px-2 rounded-3xl'><BsFillCameraReelsFill className='inline mb-1 mx-1' size={20}/>Genres</Link>
          </nav>
        </div>
        
        <div className='w-1/6  lg:block hidden'>
          <div className='w-full py-1 flex justify-center items-center '>
               {
                isLoggedIn?
                 <>
                <div className='relative'>
                   <UserDropDown user={user} isLoggedIn={isLoggedIn}/>
                 </div>
                 </>
                 :
                 <Link 
                 href={'/sign-in'} 
                 className='lg:mr-20 md:mr-10 font-bold bg-zinc-800 w-20 h-10 flex justify-center items-center rounded-3xl'><p>Sign In</p></Link>
               }
            </div>
        </div>

        <div className='lg:hidden block w-[10%]'>
          <div>
            <BurgerMenu />
          </div>
        </div>
      </div>
    </header>


    // <header className='backdrop-blur-xl h-16  z-50 relative'>
    //     <div className='container flex justify-between items-center m-auto h-full'>

    //       <div className='lg:w-4/12 md:w-3/5  flex justify-around items-center '>
    //         <Link href={'/'}>
    //           <h2 className={`font-bold md:text-2xl text-xl lg:ml-5 m-0 w-1/5 text-orange-400`}>Movies</h2>
    //         </Link>
    //         <div className='w-3/5 h-8 relative'>
    //           <SearchBar />
    //         </div>
    //       </div>

    //       <div className='lg:w-2/5 lg:block hidden '>
    //         <nav className=' h-full flex items-center flex gap-x-2'>
    //           <Link href={'/movies'} className='border border-slate-600 p-2 rounded-3xl'><BiMoviePlay className='inline mb-1 mx-1' size={20}/>All Movies</Link>
    //           <Link href={'/genres'} className='border border-slate-600 p-2 rounded-3xl'><BsFillCameraReelsFill className='inline mb-1 mx-1' size={20}/>Categories</Link>
    //         </nav>
    //       </div>
          
    //       <div className=' w-1/4 lg:block hidden'>
    //         <div className='w-full py-1 flex justify-end items-center '>
    //           {
    //             isLoggedIn?
    //             <>
    //             <div className='relative'>
    //               <UserDropDown user={user} isLoggedIn={isLoggedIn}/>
    //             </div>
    //             </>
    //             :
    //             <Link 
    //             href={'/sign-in'} 
    //             className='lg:mr-20 md:mr-10 font-bold bg-zinc-800 w-20 h-10 flex justify-center items-center rounded-3xl'><p>Sign In</p></Link>
    //           }
    //         </div>
    //       </div>
          

    //     </div>        
    //       <div className='w-1/4'>
    //         <div className='w-full'>
    //           <BurgerMenu />
    //         </div>
    //       </div>
    //   </header>
  )
}

export default Header
