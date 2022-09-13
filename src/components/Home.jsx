import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800'>
        
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
            <p className='text-gray-500'>Hi, I'm</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>Ananda Krishnan</h1>
            <h2 className='text-4xl sm:text-5xl font-bold text-gray-500'>I'm a UX/UI Designer.</h2>
            <p className='text-gray-500 sm:text-xl py-4 max-w-[700px]'>Multidisciplinary designer who hacks at, makes and occasionally breaks things.</p>
            <div>
                <button className='text-white w-fit group  px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                <Link  to="work"  smooth={true} duration={500} >
                View Work
                </Link>
                 <span className='group-hover:rotate-90 duration-300'>
                 <Link  to="work"  smooth={true} duration={500} >
                 <HiArrowNarrowRight className='ml-2' />
                </Link> 
                 </span>
                 </button>
            </div>
        </div>
    </div>
  )
}

export default Home