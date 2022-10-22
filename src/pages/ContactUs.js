import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className='flex justify-center items-center h-screen bg-green-200'>
        <p className='text-4xl'>Contact Us</p>
      </div>
      <Footer />
    </div>
  )
}

export default ContactUs