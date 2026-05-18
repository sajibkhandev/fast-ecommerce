import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import Button from '../components/Button'
import Card from '../components/Card'
import ProductOne from '../assets/product1.png'


const BestSellingProducts = () => {
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

          <Flex className={`justify-between pt-15`}>
            <Card title="Product One" image={ProductOne} regularprice="300"saleprice="200"/>
            <Card title="Product One" image={ProductOne} regularprice="300"saleprice="200"/>
            <Card title="Product One" image={ProductOne} regularprice="300"saleprice="200"/>
            <Card title="Product One" image={ProductOne} regularprice="300"saleprice="200"/>

          </Flex>
        </Container>
    </section>
  )
}

export default BestSellingProducts