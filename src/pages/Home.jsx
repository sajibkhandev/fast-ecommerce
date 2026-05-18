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
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import FlashSale from '../layouts/FlashSale'
import BrowseByCategory from '../layouts/BrowseByCategory'
import BestSellingProducts from '../layouts/BestSellingProducts'
import Promtion from '../assets/promotion.png'
import { Link } from 'react-router-dom'
import ExploreOurProducts from '../layouts/ExploreOurProducts'

const Home = () => {
  return (
    <div>
        <Offer/>
        <Navber/>
        <Bannar/>
        <FlashSale/>
        <BrowseByCategory/>
        <BestSellingProducts/>

       <Link to='/contact'><Image className={`mx-auto py-20`} src={Promtion}/></Link>
       <ExploreOurProducts/>
        


    





        <Footer/>
    </div>
  )
}

export default Home