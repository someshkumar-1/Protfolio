import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
       <div className='max-w-[1000px] w-full  grid grid-cols gap-8'>
         <div className=' pb-8 pl-4'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <div></div>
        </div>
        <div className='max-w-[1000px] w-full  grid sm:grid-cols gap-8 px-4 ' >
          <div className=' text-2xl sm:text-4xl font-bold'>
            <p>Design with heart & mind.</p></div>
            <div className='sm:text-lg'>
            <p>I have learned that design is a tool to solve problems for others. Because of that, I put a lot of passion and consideration into what I create, and I am optimistic about the positive impact it can have on people and the planet.</p>
          </div>
          <div className='sm:text-lg'>
            <p> A position where my vision is to bring forth the best of my creative & management skills, and Wealth of knowledge thus making optimum contribution to mutual growth. Designer with 4 years of experience innovative approach to idea and concept development good focus communication, clear understanding of modern technologies and best design practices.</p>
          </div>
      </div>    
      </div>
    </div>
  )
}

export default About