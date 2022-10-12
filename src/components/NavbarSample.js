import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <div className='bg-white shadow-md'>
            <div className='max-w-6xl mx-auto px-4'>
                <div className='flex justify-between'>
                    <div className='flex space-x-7'>
                        <div className='flex items-center py-6 px-2'>
                            <h1 className='font-bold'>Brandname</h1>
                        </div>
                        <div className='hidden md:flex items-center space-x-1'>
                            <ul className='flex flex-row justify-end space-x-5'>
                                <li className='py-6 px-2 
                                    hover:text-green-500 
                                    hover:cursor-pointer
                                    hover:underline 
                                    hover:underline-offset-8 
                                    hover:decoration-2 
                                    hover:transition duration-300'>
                                    <Link to="/">Home</Link></li>
                                <li className='py-6 px-2 
                                    hover:text-green-500
                                    hover:cursor-pointer
                                    hover:underline 
                                    hover:underline-offset-8 
                                    hover:decoration-2 
                                    hover:transition duration-300'>
                                    <Link to="/about">About Us</Link></li>
                                <li className='py-6 px-2 
                                    hover:text-green-500
                                    hover:cursor-pointer
                                    hover:underline 
                                    hover:underline-offset-8 
                                    hover:decoration-2 
                                    hover:transition duration-300'>
                                    <Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='hidden md:flex items-center justify-end space-x-3'>
                        <ul className='flex flex-row justify-end space-x-5'>
                            <li className='bg-transparent hover:bg-green-500 font-semibold hover:text-white hover:cursor-pointer py-2 px-4 border border-green-500 hover:border-transparent rounded'>
                                <Link to="/login">Login</Link>
                            </li>
                            <li className='bg-green-500 hover:bg-green-700 hover:cursor-pointer text-white font-semibold py-2 px-4 rounded'>
                                <Link to="/signup">Signup</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar