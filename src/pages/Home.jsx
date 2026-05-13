import React from 'react'
import Offer from '../layouts/Offer'
import Footer from '../layouts/Footer'
import Navber from '../layouts/Navber'
import Bannar from '../layouts/Bannar'
import Image from '../components/Image'
import Product1 from '../assets/product1.png'
import { FaStar } from 'react-icons/fa'
import { IoIosHeartEmpty } from 'react-icons/io'
import { IoEyeOutline } from 'react-icons/io5'
import Card from '../components/Card'

const Home = () => {
  return (
    <div>
        <Offer/>
        <Navber/>
        <Bannar/>


       
    <Card image={Product1} title="Product One" regularprice="200" saleprice="150"/>
    <Card image={Product1} title="Product One" regularprice="200" saleprice="150"/>
    <Card image={Product1} title="Product One" regularprice="200" saleprice="150"/>





        <Footer/>
    </div>
  )
}

export default Home