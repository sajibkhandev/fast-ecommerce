import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Card from '../components/Card'
import Flex from '../components/Flex'
import Button from '../components/Button'
import ProductOne from '../assets/product1.png'


const FlashSale = () => {
  let [alldata,setAlldata]=useState([])

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res=>res.json())
    .then(data=>setAlldata(data.products))

  },[])
  
  return (
    <section>
        <Container>
           <SubHeading text={`Our Products`}/>
          <Heading className="pt-6" text="Flash Sale"/>

         <Flex className='flex-wrap gap-x-7.5 pt-10 pb-15'>
          {
            alldata.map((item,index)=>(
              index<4 &&
              <Card title={item.title} image={item.thumbnail} regularprice={item.regularprice} saleprice={item.saleprice}/> 

            ))
          }
          
              
          
         </Flex>

        <div className='text-center border-b border-black/30 pb-15 mb-20'>
             <Button text="View All Products"/>
        </div>

        </Container>
    </section>
  )
}

export default FlashSale