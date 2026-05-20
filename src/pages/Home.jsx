import { Link } from 'react-router-dom'
import Promtion from '../assets/promotion.png'
import Image from '../components/Image'
import Bannar from '../layouts/Bannar'
import BestSellingProducts from '../layouts/BestSellingProducts'
import BrowseByCategory from '../layouts/BrowseByCategory'
import ExploreOurProducts from '../layouts/ExploreOurProducts'
import FlashSale from '../layouts/FlashSale'

import NewArrival from '../layouts/NewArrival'
import Customer from '../layouts/Customer'

const Home = () => {
  return (
    <div>
      
        <Bannar/>
        <FlashSale/>
        <BrowseByCategory/>
        <BestSellingProducts/>

       <Link to='/contact'><Image className={`mx-auto py-20`} src={Promtion}/></Link>
       <ExploreOurProducts/>
       <NewArrival/>
       <Customer/>
       
    </div>
  )
}

export default Home