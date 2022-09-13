import React, { useState } from 'react'
import {FaBars, FaTimes,  FaLinkedin,  FaBehance} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs"
import { Link } from 'react-scroll';

const Navbar = () => {

  const[nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav)




  
  return (
    <div className='fixed w-full h-20 flex justify-between items-center px-4 bg-black text-gray-500'>
      <div>
        <h1 className='text-5xl font-signature ml-2 text-gray-500'>Ak</h1>
      </div>

      {/*  menu  */}
        <ul className='hidden md:flex '>
         <li className='hover:scale-110 duration-500'>
           <Link  to="home"  smooth={true} duration={500} >
              Home 
           </Link>
         </li>
         <li className='hover:scale-110 duration-500'>
           <Link  to="about"  smooth={true} duration={500} >
              About 
           </Link>
         </li>
         <li className='hover:scale-110 duration-500'>
           <Link  to="skills"  smooth={true} duration={500} >
              Skills 
           </Link>
         </li>
         <li className='hover:scale-110 duration-500'>
           <Link  to="work"  smooth={true} duration={500} >
              Work 
           </Link>
         </li>
         <li className='hover:scale-110 duration-500'>
           <Link  to="contact"  smooth={true} duration={500} >
              Contact 
           </Link>
         </li>
        </ul>
  
       {/* Hamburger  */}
      <div onClick={handleClick} className=' md:hidden z-10 '>
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>

      {/* mobile menu  */}
      <ul className={!nav ? "hidden" : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 flex flex-col  justify-center items-center'}>
        
        <li className='py-6 text-4xl'>
           <Link onClick={handleClick} to="home"  smooth={true} duration={500} >
             Home 
           </Link></li>
        <li className='py-6 text-4xl'>   
           <Link onClick={handleClick} to="about"  smooth={true} duration={500} >
              About 
           </Link></li>
        <li className='py-6 text-4xl'> 
           <Link onClick={handleClick}  to="skills"  smooth={true} duration={500} >
              Skills 
           </Link></li>
        <li className='py-6 text-4xl'>
           <Link onClick={handleClick}  to="work"  smooth={true} duration={500} >
              Work 
           </Link></li>
        <li className='py-6 text-4xl'>
           <Link onClick={handleClick} to="contact"  smooth={true} duration={500} >
              Contact 
           </Link></li>
      </ul>

      {/* social icons */}
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500 rounded-tr-md'>
          <a target="_blank" rel="noreferrer noopener" className='flex justify-between items-center w-full text-white'
          href="https://www.linkedin.com/in/ananda-krishnan-8485b3248">Linkedin <FaLinkedin size={30} /></a>
        </li>
      </ul>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500'>
          <a target="_blank" rel="noreferrer noopener" className='flex justify-between items-center w-full text-white'
          href="https://www.behance.net/chottuji">Behance <FaBehance size={30} /></a>
        </li>
      </ul>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500'>
          <a target="_blank" rel="noreferrer noopener" className='flex justify-between items-center w-full text-white'
          href="design2anand@gmail.com">Email <HiOutlineMail size={30} /></a>
        </li>
      </ul>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500 rounded-br-md'>
          <a target="_blank" rel="noreferrer noopener" className='flex justify-between items-center w-full text-white'
          href="/resume.pdf" download>Resume <BsFillPersonLinesFill size={30} /></a>
        </li>
      </ul>
    </div>

    </div>
  )
}

export default Navbar