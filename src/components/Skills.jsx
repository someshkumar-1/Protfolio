import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import photoshop from "../assets/photoshop.png"
import ai from "../assets/ai.png"
import xd from "../assets/xd.png"
import figma from "../assets/figma.png"



const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300 '>
        {/* container */}  
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-gray-300 '>Skills</p>
                <p className='py-4 '>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={html} alt=" " />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={css} alt=" " />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={photoshop} alt=" " />
                    <p className='my-4'>PHOTOSHOP</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ai} alt=" " />
                    <p className='my-4'>ILLUSTRATOR</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={xd} alt="" />
                    <p className='my-4'>XD</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={figma} alt="" />
                    <p className='my-4'>FIGMA</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/4_Indesign_Adobe_logo_logos-512.png" alt="" />
                    <p className='my-4'>INDESIGN</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src="https://www.freeiconspng.com/thumbs/corel-draw-icon/corel-draw-icon--0.png" alt="" />
                    <p className='my-4'>COREl DRAW</p>
                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default Skills