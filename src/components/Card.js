import React from 'react'

const Card = (props) => {
  return (
    <div className='flex flex-col 
                    items-center 
                    p-6 
                    space-y-6 
                    rounded-lg 
                    bg-green-100 
                    md:w-1/3'>
        <img className='rounded-full w-16 -mt-14' src={props.image} alt='Testimonial1'></img>
        <h1 className='text-bold'>{props.name}</h1>
        <p className='text-sm'>{props.context}</p>
    </div>
  )
}

export default Card