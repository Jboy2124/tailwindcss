import React from 'react'
import Graph from '../assets/hero/logo2.png';

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center mx-auto min-h-screen py-20 bg-green-200 '>
        <div className='container flex flex-col justify-center items-center text-center space-y-10'>
            <p className='text-green-700
                          text-6xl'>Wide array of choices! Get yours now!</p>
            <p className='text-green-700
                          text-8xl'>
                Guaranteed!
            </p>
            <div className='flex flex-row justify-center items-center space-x-5'>
              <div className='flex
                              flex-row
                              border
                              border-green-500
                              bg-green-500
                              text-white
                              rounded-full
                              px-8 py-2
                              hover:cursor-pointer
                              hover:bg-white
                              hover:border-green-500
                              hover:text-black'>
                  Get Started
              </div>
              {/* <div className='flex
                              flex-row
                              bg-green-500
                              text-white
                              rounded-l-full
                              px-8 py-2
                              hover:cursor-pointer
                              hover:bg-green-600'>
                  Signup
              </div>
              <div className='flex flex-row bg-green-200 text-white rounded-r-full'>
                Fuck you
              </div> */}
            </div>
            
            
        </div>

        <div className='container
                        flex
                        flex-col
                        justify-center
                        items-center'>
            <img src={Graph}></img>
        </div>
    </div>
  )
}

export default Hero