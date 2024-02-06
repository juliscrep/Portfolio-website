'use client'
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-200'>
                        Hello, I'm {" "}
                    </span> 
                    <br></br>
                  <TypeAnimation
                    sequence={[
                    'Julieta',
                    1000, 
                    'Quality Assurance Analyst',
                    1000,
                    'Systems Engineer',
                    1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                       
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                  Thank you for visiting. Welcome to my portfolio!
                </p>
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-700 via-blue-500 to-blue-300 hover:bg-slate-200 text-white'>Hire me</button>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-700 via-blue-500 to-blue-200 hover:bg-slate-800 text-white mt-3 '>
                    <a className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2' href="/images/cv.pdf" target="_blank">Download CV</a>
                    </button>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[240px] h-[240px] lg:w-[400px] lg:h-[400px] relative'>
                  <Image 
                    src="/images/retrato5.png"
                    alt="hero image"
                    className='absolute transform  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
                    width={440}
                    height={440}
                  />
                </div>
                
            </div>
            
        </div>
        
    </section>
  )
}

export default HeroSection;