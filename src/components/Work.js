import React from 'react'
import { useState } from 'react'
import a4 from '../assets/A4.jpg'
import a5 from '../assets/A5.jpg'
import flax from '../assets/FlaxSeed.jpg'
import gym from '../assets/gym.jpg'
import hospital2 from '../assets/hospital2.jpg'
import mw from '../assets/mw.jpg'
import newYear from '../assets/Newyear.jpg'
import sabja from '../assets/Sabja.jpg'
import vl from '../assets/VL.jpg'
import logo6 from '../assets/Chemical.jpg'
import web1 from '../assets/web1.png'
import web2 from '../assets/web2.png'
import web3 from '../assets/web3.png'
import web4 from '../assets/web4.png'
import web5 from '../assets/web5.png'
import web6 from '../assets/web6.png'
import logo1 from '../assets/logo1.jpg'
import logo2 from '../assets/logo2.jpg'
import logo3 from '../assets/logo3.jpg'
import logo4 from '../assets/logo4.jpg'
import logo5 from '../assets/logo5.jpg'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaPlus, FaWindowClose } from 'react-icons/fa'



const Work = () => {

const [slide, setSlide] = useState(0)
const [open, setOpen] = useState(false)

const photos = [
  {
    src: a5,
  },
  
  {
    src: vl,
  },

  {
    src: flax
  },
  {
    src: gym
  },
  
  {
    src: hospital2
  },
  {
    src: sabja
  },
  {
    src: mw
  },
  {
    src: newYear
  },
  {
    src: a4,
  },

]

const websites = [
  {
    src: web1,
    href: "https://pickurcar.com/"
  },
  {
    src: web2,
    href: "http://oldmuscattourism.com/"
  },
  {
    src: web3,
    href: "http://abetcoalbadigroup.com/"
  },
  {
    src: web4,
    href:"https://alqanoobi.net/"
  },
  {
    src: web5,
    href: "http://haifaoman.com/"
  },
  {
    src: web6,
    href:"http://seehalsarya.com/"
  }
]

const logos = [
  {
    src: logo1
  },
  {
    src: logo2
  },
  {
    src: logo3
  },
  {
    src: logo4
  },
  {
    src: logo5
  },
  {
    src: logo6
  }
]


const handleClick = (i) => {
  setSlide(i);
  setOpen(true);
}

const handleMove = (direction) => {
   let newSlideNum;

   if(direction==="l"){
    newSlideNum = slide === 0 ? 8 : slide - 1;
   }else{
    newSlideNum = slide === 8 ? 0 : slide + 1;
   }

   setSlide(newSlideNum)
}

  return (
  
    <div name="work" className='w-full md:h-full text-gray-300 bg-gradient-to-b from-gray-800 to-black py-16' >
         
         
         {open && <div className='slider invisible lg:visible '>
       <FaWindowClose className='close' onClick={() => setOpen(false)} />
       <FaArrowAltCircleLeft className='arrow' onClick={() => handleMove("l")} />
       <div className='slideWrapper'>
        <img src={photos[slide].src} alt="" className='slideImg'/>
       </div>
       <FaArrowAltCircleRight className='arrow' onClick={() => handleMove("r")} />
     </div>}

     

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-gray-300 '>Work</p>
            <p className='py-6'>Check out some of my recent work</p>
        </div>


           {/* container */}
           <div
        className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-0'>

       { websites.map((website) => (
      <>  <div style={{backgroundImage: `url(${website.src})`}}
        className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
          <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
          Demo
          </span>
            <div className='pt-8 text-center'>
              <a target="_blank" rel="noreferrer noopener" href={website.href}>
                <button className='text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'><FaPlus /></button>
              </a>  
            </div>
          </div> 
        </div>
          </>

       ))
          
          }


          {logos.map((logo) =>(

              <div  style={{backgroundImage: `url(${logo.src})`}}
              className='shadow-lg shadow-black group container rounded-md duration-200  hover:scale-105 flex justify-center items-center mx-auto logo'>   
              
              </div>
              ))
              }


        {/* grid item for photos */}

        {photos.map((photo, i) =>(

          <div onClick={() => handleClick(i)} style={{backgroundImage: `url(${photo.src})`}}
          className='shadow-lg shadow-black group container rounded-md duration-200  hover:scale-105 flex justify-center items-center mx-auto content'>   
           
          </div>
        ))}
          
        </div>
    </div>
    </div>   




  )

 
}


    




      // <div name="work" className='bg-gradient-to-b from-gray-800 to-black w-full text-gray-300 md:h-screen'>
    //   <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
    //     <div className='pb-8'>
    //       <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Work</p>
    //       <p className='py-6'>Check out some of my recent work right here</p>
    //     </div>
        
    //     <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

           
    //         <div  className='shadow-md  shadow-gray-600 rounded-md '>
    //         <img src={a5} alt="" className='rounded-md duration-200 hover:scale-105'/>
    //         <div className='group flex items-center justify-center'>
    //           <button className='invisible group-hover:visible  px-6 py-3 m-auto text-gray-300'><FaPlus size={20}  /></button>
    //         </div>
    //       </div>

    
    //     </div>
    //   </div>
    // </div>
export default Work