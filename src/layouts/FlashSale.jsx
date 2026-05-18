import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Card from '../components/Card'
import Flex from '../components/Flex'
import Button from '../components/Button'
import ProductOne from '../assets/product1.png'

const FlashSale = () => {
  return (
    <section>
        <Container>
           <SubHeading text={`Our Products`}/>
          <Heading className="pt-6" text="Explore Our Products"/>

         <Flex className='justify-between pt-10 pb-15'>
          <Card title="Product One" image={ProductOne} regularprice="300"saleprice="200"/>
          <Card title="Product One" image={ProductOne} regularprice="300"saleprice="200"/>
          <Card title="Product One" image={ProductOne} regularprice="300"saleprice="200"/>
          <Card title="Product One" image={ProductOne} regularprice="300"saleprice="200"/>
         </Flex>

        <div className='text-center border-b border-black/30 pb-15 mb-20'>
             <Button text="View All Products"/>
        </div>

        </Container>
    </section>
  )
}

export default FlashSale