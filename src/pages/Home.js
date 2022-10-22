import React, { Suspense } from 'react'
// import Card from '../components/Card'
import Footer from '../components/Footer'
// import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import testimonials from '../data/testi'
const Hero = React.lazy(() => import('../components/Hero'));
const Card = React.lazy(() => import('../components/Card'));


const Home = () => {
  return (
    <div>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Hero />
        <div className='container flex space-x-5 min-h-screen justify-center items-center mx-auto'> 
          {testimonials.map(payload => {
              return(
                <Card image={payload.image } 
                      name={payload.name} 
                      context={payload.context} />
              )
            })
          }
        </div>
        </Suspense>
        <Footer />
    </div>
  )
}

export default Home