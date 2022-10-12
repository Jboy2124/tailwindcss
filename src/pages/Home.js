import React from 'react'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Searchbar />
        <div className='flex flex-row items-center'>
          <h1>Home page1</h1>
        </div>
    </div>
  )
}

export default Home