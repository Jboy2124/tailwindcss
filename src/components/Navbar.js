import React from 'react'
import Img from '../assets/img/logo2.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='relative shadow-md flex flex-row py-6 p-2 px-10'>
      <div className='w-1/5'>
        <span className='text-green-500 font-bold text-4xl'>RENT</span>
        <span className='text-red-500 font-bold text-4xl'>EXCHANGE</span>
        <span>.com</span>
      </div>
      <div className='flex flex-row justify-end items-center w-3/5'>
        <ul className='flex flex-row items-center space-x-6'>
          <li className='hover:scale-110 hover:transition duration-200 hover:text-green-500'><Link to="/">Home</Link></li>
          <li className='hover:scale-110 hover:transition duration-200 hover:text-green-500'><Link to="/services">Services</Link></li>
          <li className='hover:scale-110 hover:transition duration-200 hover:text-green-500'><Link to="/">Career</Link></li>
          <li className='hover:scale-110 hover:transition duration-200 hover:text-green-500'><Link to="/about">About Us</Link></li>
          <li className='hover:scale-110 hover:transition duration-200 hover:text-green-500'><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
      <div className='flex flex-row justify-end items-center w-1/5 space-x-2'>
        <div className='border border-green-500 rounded-full px-6 py-1 text-semibold hover:bg-green-500 hover:text-white hover:cursor-pointer'>
          <Link to="/login">Login</Link>
        </div>
        <div className='border border-green-500 bg-green-500 rounded-full px-6 py-1 text-white text-semibold hover:bg-white hover:text-black hover:cursor-pointer'>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar