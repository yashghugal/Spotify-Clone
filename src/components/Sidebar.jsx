import React from 'react'
import {assets} from "../assets/assets"
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex bg'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            <div onClick={()=>navigate('/Spotify-Clone')} className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.home_icon} alt="" />
                <p className='font-bold'>Home</p>
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.search_icon} alt="" />
                <p className='font-bold'>Home</p>
            </div>
        </div>
        <div className='bg-[#121212] h-[85%] rounded'>
          <div className='p-4 flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <img className='w-8' src={assets.stack_icon} alt="" />
                <p className='font-semibold'>Your Library</p>
              </div>
              <div className='flex items-center gap-3'>
                <img src={assets.arrow_icon} className='w-5'alt="" />
                <img src={assets.plus_icon} className='w-5'alt="" />
              </div>
          </div>
          <div className='p-4 bg-[#242424] m-2 rounded flex flex-col font-semibold items-start justify-start gap-1 pl-4'>
              <h1 className=''>Create your first Playlist</h1>
              <p className='font-light'>Its Easy we will help you</p>
              <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
          </div>
          <div className='p-4 bg-[#242424] m-2 rounded flex flex-col font-semibold items-start justify-start gap-1 pl-4 mt-4'>
              <h1 className=''>Let's find some podcast to follow</h1>
              <p className='font-light'>We will keep you update on new podcast</p>
              <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse podcast</button>
          </div>
        </div>
    </div>
  )
}

export default Sidebar