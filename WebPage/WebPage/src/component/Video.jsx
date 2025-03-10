import React from 'react'
import video from "../assets/video.jpg"
import { videoText } from '../data/video'
import { FaPlay } from "react-icons/fa";

const Video = () => {
  return (
    <div className='relative z-10 m-auto backdrop-grayscale-200'>   
      <img src={video} alt="" className='h-[600px] w-[100%] backdrop-grayscale-200'  />
      <div className='border rounded-full bg-deep-orange-300 h-20 w-20 absolute top-40 left-[50%] border-none'>
         <FaPlay className='text-white font-bold m-auto mt-8' />
      </div>
      <p className='absolute top-0 z-20 text-inherit text-7xl w-[50%] text-center m-auto lg:ms-80 lg:mt-60 text-white font-bold'> {videoText} </p>
    </div>
  )
}

export default Video
