import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className='flex justify-center items-center bg-green-200 h-screen'>
        <p className='text-4xl'>Sign up Here!!!</p>
      </div>
      <Footer />
    </div>
  )
}

export default Signup