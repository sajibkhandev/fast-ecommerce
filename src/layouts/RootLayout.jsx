
import Offer from '../layouts/Offer'
import Footer from '../layouts/Footer'
import Navber from '../layouts/Navber'
import { Outlet } from 'react-router-dom'


const RootLayout = () => {
  return (
    <div>
        <Offer/>
        <Navber/>
           <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout