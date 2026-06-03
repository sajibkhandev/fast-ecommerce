import Container from "../components/Container"
import Wcard from "../components/Wcard"
import product4 from "../assets/product4.png"
import Wcard1 from "../assets/wcard1.png"
import Wcard3 from "../assets/wcard3.png"
import Wcard2 from "../assets/wcard2.png"
import SubHeading from '../components/SubHeading'
import Card from "../components/Card"




const Wishlist = () => {
  return (

    <div>

      <Container>

        <div className="flex justify-between items-center mt-17.5 mb-15"> 

          <p>Wishlists <span>(4)</span> </p>

          <button className="px-12 py-4 border  bg-transparent border-black/50 font-pop font-medium text-base text-black rounded hover:bg-black hover:text-white hover:border-transparent duration-300 cursor-pointer ">Move All To Bag</button>


          
          </div>


          <div className="flex justify-between">
            <Wcard image={Wcard1} title="Gucci duffle bag" saleprice='960' regularprice='1160'/>
            <Wcard image={product4} title="Gucci duffle bag" saleprice='960' regularprice='1160'/>
            <Wcard image={Wcard3} title="Gucci duffle bag" saleprice='960' regularprice='1160'/>
            <Wcard image={Wcard2} title="Gucci duffle bag" saleprice='960' regularprice='1160'/>
          </div>

          <div className="flex justify-between items-center mt-20 mb-15">
            <SubHeading text='Just For You'/>
            

          <button className="px-12 py-4 border  bg-transparent border-black/50 font-pop font-medium text-base text-black rounded hover:bg-black hover:text-white hover:border-transparent duration-300 cursor-pointer ">See All</button>

          </div>

        

          <div className="flex justify-between mb-36">
          <Card image={Wcard1} className='hidden' title="Gucci duffle bag" saleprice='960' regularprice='1160'/>
            <Card image={Wcard1} className='hidden' title="Gucci duffle bag" saleprice='960' regularprice='1160'/>
              <Card image={Wcard1} className='hidden' title="Gucci duffle bag" saleprice='960' regularprice='1160'/>
                <Card image={Wcard1} className='hidden' title="Gucci duffle bag" saleprice='960' regularprice='1160'/>

          </div>

      </Container>


    </div>
  )
}

export default Wishlist