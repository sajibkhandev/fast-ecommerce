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
  let [show,setShow]=useState(4)

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
            alldata.slice(0,show).map((item,index)=>(
              
              <Card id={item.id} title={item.title} image={item.thumbnail} regularprice={item.regularprice} saleprice={item.price}/> 

            ))
          }
          
              
          
         </Flex>

        <div onClick={()=>setShow(show+4)}  className='text-center border-b border-black/30 pb-15 mb-20'>
            {
             show> alldata.length?  <p className='text-red-500 text-4xl'>No More Data</p>  :<Button text="View More Products"/>
            }
        </div>

        </Container>
    </section>
  )
}

export default FlashSale