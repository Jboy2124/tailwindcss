import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux';
import { actionStar } from '../store/index';

const AboutUs = () => {
  const counter = useSelector((state) => state.counterStrike);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actionStar.increment());
  };

  const decrement = () => {
    dispatch(actionStar.decrement());
  };

  const addValues = () => {
    dispatch(actionStar.addValues(10));
  };

  return (
    <div>
      <Navbar />
      <div className='flex h-screen bg-green-200 justify-center items-center'>
        <p className='text-4xl'>Counter: { counter }</p>
      </div>

      <div className='flex justify-center items-center rounded-full bg-green-500 text-white py-2 px-10 w-28 hover:cursor-pointer' onClick={increment}>
        Increment
      </div>
      <div className='flex justify-center items-center rounded-full bg-green-500 text-white py-2 px-10 w-28 hover:cursor-pointer' onClick={decrement}>
        Decrement
      </div>
      <div className='flex justify-center items-center rounded-full bg-green-500 text-white py-2 px-10 w-28 hover:cursor-pointer' onClick={addValues}>
        +10
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs