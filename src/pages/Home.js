import React from 'react'
import Card from '../components/Card'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import testimonials from '../data/testi'


const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <div className='container flex flex-row space-x-5 py-20 justify-center items-center mx-auto'> 
          {
            testimonials.map(payload => {
              return(
                <Card image={payload.image } 
                      name={payload.name} 
                      context={payload.context} />
              )
            })
          }
        </div>
    </div>
  )
}

export default Home