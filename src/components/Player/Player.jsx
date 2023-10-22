import React from 'react'
import {BsArrowLeft} from 'react-icons/bs';
import {useNavigate} from 'react-router-dom'
import video from '../../assets/video/test.mp4'

const Player = () => {
    const navigate = useNavigate();
  return (
    <div className='w-[100vw] h-[100vh]'>
        <div className='absolute p-4 z-[999]  text-white text-5xl'>
            <BsArrowLeft onClick={()=> navigate(-1) }
            className='hover:cursor-pointer cursor-pointer'
            />
        </div>
        <video className='h-[100%] w-[100%] object-cover' src={video} autoPlay loop controls></video>
    </div>
  )
}

export default Player