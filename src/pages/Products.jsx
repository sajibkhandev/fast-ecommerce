import { useState } from "react"
import CategoryList from "../components/CategoryList"
import Container from "../components/Container"
import Flex from "../components/Flex"
import Pagination from "../components/Pagination"
const Products = () => {

  let [count,setCount] = useState(9)
  let countHandle = (e)=>{
    setCount(e.target.value)
  }
  return (
    <section className="py-20">
      <Container>
        <Flex className="justify-between pb-7">
          <h2 className="font-pop font-bold text-xl text-black">Shop By Category</h2>


          <div><p className="font-normal font-pop text-black text-base">Show : <input onChange={countHandle} type="number" className="w-20 border rounded text-center"/> </p></div>


        </Flex>
        <Flex>
          <div className="w-3/12">

          <div className="flex flex-col gap-y-4">
            <CategoryList text="Woman's Fashoin"/>
            <CategoryList text="Men's Fashoin"/>
            <CategoryList text="Electronics"/>
            <CategoryList text="Home and Lifestyle"/>
            <CategoryList text="Medicine"/>
            <CategoryList text="Sports & Outdoor"/>
            <CategoryList text="Baby's & Toys"/>
            <CategoryList text="Groceries & Pets"/>
            <CategoryList text="Health & Beauty"/>
          </div>

          <div>
            <h2 className="font-pop font-bold text-xl text-black pt-6 pb-4">Shop By Color</h2>
            <p className="font-pop font-normal text-base text-[#767676]">Color 1</p>
            <p className="font-pop font-normal text-base text-[#767676] py-4.5">Color 2</p>
            <p className="font-pop font-normal text-base text-[#767676]">Color 3</p>
          </div>
          </div>



          <div className="w-9/12">

             <Pagination itemsPerPage={count} />


          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Products
