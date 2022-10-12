import React from 'react'
import Img from '../assets/img/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <div className='relative mx-auto p-4 shadow-md'>
      <div className='flex flex-row items-center justify-between'>
        <div className='pt-2 flex flex-row items-center space-x-3'>
          <img className='h-10 w-15'  src={Img} alt="Logo"></img>
          <p>Company Name</p>
        </div>

        <div className='hidden md:flex flex-row items-center justify-end'>
          <div>
            <ul className='flex flex-row items-center space-x-6 pr-10'>
              <li className='decoration-2 
                            hover:underline 
                            hover:underline-offset-8 
                            hover:text-green-500 
                            hover:cursor-pointer 
                            hover:transition duration-300'>
                <Link to="/">Home</Link>
              </li>
              <li className='decoration-2 
                            hover:underline 
                            hover:underline-offset-8 
                            hover:text-green-500 
                            hover:cursor-pointer 
                            hover:transition duration-300'>
                <Link to="/">Service</Link>
              </li>
              <li className='decoration-2 
                            hover:underline 
                            hover:underline-offset-8 
                            hover:text-green-500 
                            hover:cursor-pointer 
                            hover:transition duration-300'>
                <Link to="/">Career</Link>
              </li>
              <li className='decoration-2 
                            hover:underline 
                            hover:underline-offset-8 
                            hover:text-green-500 
                            hover:cursor-pointer 
                            hover:transition duration-300'>
                <Link to="/about">About Us</Link>
              </li>
              <li className='decoration-2 
                            hover:underline 
                            hover:underline-offset-8 
                            hover:text-green-500 
                            hover:cursor-pointer 
                            hover:transition duration-300'>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className='hidden md:flex flex-row items-center space-x-2'>
          <div className='bg-transparent py-2 px-4 
                          border 
                          border-green-500 
                          rounded-full
                          items-center 
                          cursor-pointer 
                          font-semibold 
                          hover:bg-green-500 
                          hover:cursor-pointer 
                          hover:border-green-600 
                          hover:text-white'>
                          <Link to="/login">
                            Login
                          </Link>
          </div>
          <div className='bg-green-500 
                          text-white py-2 px-4 
                          border 
                          border-green-500 
                          rounded-full
                          items-center 
                          cursor-pointer 
                          font-semibold 
                          hover:bg-green-600 
                          hover:cursor-pointer 
                          hover:border-green-600 
                          hover:text-white'>
                          <Link to="/signup">
                            Signup
                          </Link>
          </div>
        </div>
        </div>
      </div>
   </div>
  )
}

export default Navbar