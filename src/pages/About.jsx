import React from 'react'
import Offer from '../layouts/Offer'
import Footer from '../layouts/Footer'
import Navber from '../layouts/Navber'

const About = () => {
  return (
    <div>
        <Offer/>
        <Navber/>
        <h1 className='py-20'>About page</h1>
        <Footer/>
    </div>
  )
}

export default About