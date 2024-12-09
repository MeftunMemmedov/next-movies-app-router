'use client'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers=createAsyncThunk("getUsers",async()=>{
    const response=await axios.get('https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/Movies-Users?select=*',{
        headers:{
            apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
            Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
        }
    })

    return response.data
})

export const getCurrentUser=createAsyncThunk("getCurrentUser", async(userId)=>{
    const {data}=await axios.get('https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/Movies-Users?select=*',{
        headers:{
            apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
            Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
        }
    })

    const user=data.find((user)=>user.id==userId)
    return user
})

    export const getWatchList=createAsyncThunk("getWatchList", async(userId)=>{
        const {data}=await axios.get(`https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/Movies-Users?id=eq.${userId}&select=*`,{
            headers:{
              apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
              Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
            }
          })
          const wlist=data[0].watch_list
          return wlist
    })
    
// curl -X PATCH 'https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/Movies-Users?some_column=eq.someValue' \
// -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs" \
// -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs" \
// -H "Content-Type: application/json" \
// -H "Prefer: return=minimal" \
// -d '{ "other_column": "otherValue" }'
          
    // export const send=createAsyncThunk("send", async(userId, wl)=>{
        
    // })



export const userSlice=createSlice({
    name:"user",
    initialState:{
        isLoggedIn:localStorage.getItem('isLoggedIn')?JSON.parse(localStorage.getItem('isLoggedIn')):false,
        users:[],
        user:{},
        watchList:[],
        watchlistTriggered:false
    },
    reducers:{
        setIsLoggedIn:(state,action)=>{
            state.isLoggedIn=!state.isLoggedIn
            localStorage.setItem('isLoggedIn',state.isLoggedIn)
        },
        addToWatchList:(state, action)=>{
            state.watchList=[...state.watchList, action.payload]
        },
        removeFromWatchList:(state, action)=>{
            const filtered=state.watchList.filter(mov=>mov.id!==action.payload.id)
            state.watchList=filtered
        },
        setWLTriggeredTrue:(state)=>{
            state.watchlistTriggered=true
        },
        setWLTriggeredFalse:(state)=>{
            state.watchlistTriggered=false
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getUsers.fulfilled, (state, action)=>{
            state.users=action.payload
        })
        builder.addCase(getCurrentUser.fulfilled, (state, action)=>{
            state.user=action.payload
            state.watchList=action.payload?.watchlist
        })
        // builder.addCase(getWatchList.fulfilled, (state, action)=>{
        //     state.watchList=action.payload
        // })
    }
})

export const {setIsLoggedIn, addToWatchList, removeFromWatchList, setWLTriggeredTrue, setWLTriggeredFalse}=userSlice.actions

export default userSlice.reducer


