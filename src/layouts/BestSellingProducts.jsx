import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import Button from '../components/Button'
import Card from '../components/Card'
import ProductOne from '../assets/product1.png'




const BestSellingProducts = () => {
  let [alldata,setAlldata]=useState([])

  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then(res=>res.json())
    .then(data=>setAlldata(data.products))

  },[])


  return (
    <section >
        <Container>
          <Flex className={`justify-between items-end`}>
           <div>
             <SubHeading text={`This Month`}/>
            <Heading className="pt-6" text="Best Selling Products"/>
           </div>
           <Button text="View All"/>
          </Flex>

          <Flex className={`flex-wrap justify-between pt-15`}>
            {
              alldata.map((item,index)=>(
                (index>4 && index<9) &&

                <Card title={item.title} image={item.thumbnail} regularprice="300"saleprice="200"/>
                
              ))
            }

          </Flex>
        </Container>
    </section>
  )
}

export default BestSellingProducts