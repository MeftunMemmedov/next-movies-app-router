'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { setIsLoggedIn } from '@/redux/userSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

export default function UserDropDown({user, isLoggedIn}) {
  const dispatch=useDispatch()
  const router=useRouter()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut=()=>{
          dispatch(setIsLoggedIn())
          localStorage.removeItem('userId')
          localStorage.removeItem('isLoggedIn')
        }
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>{user?.name?user.name[0]:''}</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {/* <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem> */}
        <MenuItem onClick={()=>router.push('/watchlist')}>
          <Avatar /> WatchList
        </MenuItem>
        <Divider />
        <MenuItem onClick={logOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

// import { setIsLoggedIn } from "@/redux/userSlice";
// import React, { useEffect, useRef, useState } from "react";
// import { useDispatch } from "react-redux";

// // Handler hook for when Outside click dropdown close
// let useClickOutside = (handler) => {
//   let domNode = useRef();

//   useEffect(() => {
//     let maybeHandler = (event) => {
//       if (!domNode.current.contains(event.target)) {
//         handler();
//       }
//     };

//     document.addEventListener("mousedown", maybeHandler);

//     return () => {
//       document.removeEventListener("mousedown", maybeHandler);
//     };
//   });

//   return domNode;
// };
// // Handler hook for when Outside click dropdown close End Code====>>

// const UserDropDown = ({user, isLoggeedIn}) => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [ddIsOpen, setddIsOpen]=useState(false)
//     const dispatch=useDispatch()
//     const userId=localStorage.getItem('userId')
//     const userWL=JSON.parse(localStorage.getItem(`watchListofuser${user?.id}`))
  
//     const logOut=()=>{
//       dispatch(setIsLoggedIn())
//       localStorage.removeItem('userId')
//       localStorage.removeItem('isLoggedIn')
//     }
//   let domNode = useClickOutside(() => {
//     setDropdownOpen(false);
//   });
  

//   return (
//     <>
//       {/* <!-- ====== Dropdowns Section Start --> */}
//       <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 dark:bg-dark">
//         <div className='container'>
//           <div className='flex flex-wrap -mx-4'>
//             {/* one */}
//             <div ref={domNode} className='w-full px-4 sm:w-1/2 lg:w-1/4'>
//               <div className='py-8 text-center'>
//                 <div className='relative inline-block mb-8 text-left'>
//                   <button
//                     onClick={() => setDropdownOpen(!dropdownOpen)}
//                     className={`flex items-center rounded-[5px] px-5 py-[13px] bg-dark dark:bg-dark-2 text-base font-medium text-white`}
//                   >
//                     {user?.name}
//                     <span className="pl-4">
//                       <svg
//                         width={20}
//                         height={20}
//                         viewBox="0 0 20 20"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="fill-current"
//                       >
//                         <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4063 5.65625 17.6875 5.9375C17.9687 6.21875 17.9687 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1563 10.1875 14.25 10 14.25Z" />
//                       </svg>
//                     </span>
//                   </button>
//                   <div
//                     className={`shadow-1 dark:shadow-box-dark absolute left-0 z-40 mt-2 w-full rounded-md bg-dark dark:bg-dark-2 py-[10px] transition-all ${
//                       dropdownOpen
//                         ? 'top-full opacity-100 visible'
//                         : 'top-[110%] invisible opacity-0'
//                     }`}
//                   >
//                     {
//                       user?.isAdmin&&<DropdownItem label='Admin' href='/admin' />
//                     }
//                     <DropdownItem label='Watchlist' href='/watchlist' />
//                     <DropdownButton label='Logout' event={logOut}/>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* End */}
//           </div>
//         </div>
//       </section>
//       {/* <!-- ====== Dropdowns Section End -->    */}
//     </>
//   )
// };

// export default UserDropDown;

// const DropdownItem = ({ label, href }) => {
//   return (
//     <a
//       href={href}
//       className='block py-2 px-5 text-base text-dark-5 hover:text-white'
//     >
//       {label}
//     </a>
//   )
// };

// const DropdownButton=({label, event})=>{
//   return(
//     <button
//     className='block py-2 px-5 text-base text-dark-5 hover:text-white'
//     onClick={event}
//     >
//       {label}
//     </button>
//   )
// }


// // import { setIsLoggedIn } from '@/redux/userSlice'
// // import Link from 'next/link'
// // import React, { useEffect, useState } from 'react'
// // import { useDispatch } from 'react-redux'

// // const UserDropDown = ({user, isLoggedIn}) => {
// //   const [ddIsOpen, setddIsOpen]=useState(false)
// //   const dispatch=useDispatch()
// //   const userId=localStorage.getItem('userId')
// //   const userWL=JSON.parse(localStorage.getItem(`watchListofuser${user?.id}`))

// //   const logOut=()=>{
// //     dispatch(setIsLoggedIn())
// //     localStorage.removeItem('userId')
// //     localStorage.removeItem('isLoggedIn')
// //   }

 

 
  
// //   return (
// //     <div>
// //       <button className='relative' onClick={()=>setddIsOpen(!ddIsOpen)}>{user?.name}</button>
// //       <div className={`absolute border ${ddIsOpen?'block':'hidden'} w-32 right-2`}>
// //         {
// //           user?.isAdmin?
// //           <Link className='text-white w-full' href={'/admin'}>Admin</Link>
// //           :
// //           null
// //         }
// //         <Link href={'/watchlist'}>WatchList</Link>
// //         <button className='' onClick={logOut}>LogOut</button>
// //       </div>
// //     </div>
// //   )
// // }

// // export default UserDropDown
