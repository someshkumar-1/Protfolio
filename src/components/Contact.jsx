import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen  bg-gradient-to-b from-black to-gray-800 flex flex-col justify-center items-center p-4'>
    <form method='POST' action="https://getform.io/f/13cc7f3f-ac09-4dfe-8b5e-6ee83dac96f0" className='flex flex-col max-w-[600px] w-full'>
    <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-gray-300'>Contact</p>
        <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - design2anand@gmail.com</p>
    </div>
     <input className='bg-transparent text-white focus:outline-none border-2 p-2 rounded-md' required='true' type="text" placeholder='Enter Your Name' name="name" />
     <input className='my-4 p-2 bg-transparent text-white focus:outline-none border-2 rounded-md' required='true' type="email" placeholder='Enter Your Email' name="email" />
     <textarea className='bg-transparent text-white focus:outline-none border-2 p-2 rounded-md' required='true' name="message"  rows="10" placeholder='Enter Your Message'></textarea>
     <button className='text-white  rounded-md bg-gradient-to-r from-cyan-500 to-blue-500   px-4 py-3 my-8 mx-auto flex items-center'>Hire me</button>

    </form>
   
    </div>



  )
}

export default Contact