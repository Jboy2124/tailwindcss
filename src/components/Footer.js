import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center items-center w-full bg-green-100 h-40'>
        <div className='flex w-1/3 bg-red-500 justify-center items-center'>
            <h1 className='text-4xl text-black font-bold'>What the Heck!!!</h1>
        </div>
        <div className='flex w-1/3 bg-green-500 justify-center items-center'>
            <h1 className='text-4xl text-black font-bold'>What are you doink!!!</h1>
        </div>
        <div className='flex w-1/3 bg-blue-500 justify-center items-center'>
            <h1 className='text-4xl text-black font-bold'>What is goin on?!!!</h1>
        </div>
    </div>
  )
}

export default Footer