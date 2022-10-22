import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Searchbar = () => {
  return (
    <div className='flex flex-row justify-center items-center bg-green-100 py-6 m-auto space-x-3'>
      <div className='flex flex-row justify-center items-center space-x-1 py-1 px-2 rounded-full bg-white border border-green-500'>
        <FaSearch className='text-gray-300' />
        <input className='w-80 px-1 text-sm py-1 outline-none bg-transparent' type="text" placeholder='Search items' />
      </div>
      <div className='rounded-full flex justify-center items-center px-6 py-1 border bg-green-500 text-white text-semibold hover:bg-white hover:text-green-500 hover:cursor-pointer hover:border-green-500'>Search</div>
    </div>
  )
}

export default Searchbar