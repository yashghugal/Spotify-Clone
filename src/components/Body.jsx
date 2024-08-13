import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import Displayalbum from './Displayalbum'
import { albumsData } from '../assets/assets'

const Body = () => {
 const displayref= useRef();
 const location =useLocation();
 const isalbum = location.pathname.includes("album")
 const albumId = isalbum ? location.pathname.slice(-1): "";

 const bgColor=albumsData[Number(albumId)].bgColor;


 useEffect(()=>{
  if(isalbum){
    displayref.current.style.background=`linear-gradient(${bgColor},#121212)`
  }
  else{
    displayref.current.style.background=`#121212`
  }
 })
  return (
    <div ref={displayref} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] overflow-auto lg:w-[75%] lg:ml-0 text-white'>
        <Routes>
            <Route path='/' element={<DisplayHome/>}/>
            <Route path='/album/:id' element={<Displayalbum/>}/>

        </Routes>
    </div>
  )
}

export default Body