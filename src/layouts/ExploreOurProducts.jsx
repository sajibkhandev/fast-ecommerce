
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import Button from '../components/Button'
import Card from '../components/Card'
import ProductOne from '../assets/product1.png'




const ExploreOurProducts = () => {
  return (
  <section className='pb-[168px]'>
        <Container>
          <Flex className={`justify-between items-end`}>
           <div>
             <SubHeading text={`Our Products`}/>
            <Heading className="pt-6" text="Explore Our Products"/>
           </div>
           <Button text="View All"/>
          </Flex>

          <Flex className={`justify-between flex-wrap gap-y-15 pt-15`}>
            <Card title="Product One" image={ProductOne} regularprice="300"saleprice="200"/>
            <Card title="Product One" image={ProductOne} regularprice="300"saleprice="200"/>
            <Card title="Product One" image={ProductOne} regularprice="300"saleprice="200"/>
            <Card title="Product One" image={ProductOne} regularprice="300"saleprice="200"/>
            <Card title="Product One" image={ProductOne} regularprice="300"saleprice="200"/>
            <Card title="Product One" image={ProductOne} regularprice="300"saleprice="200"/>
            <Card title="Product One" image={ProductOne} regularprice="300"saleprice="200"/>
            <Card title="Product One" image={ProductOne} regularprice="300"saleprice="200"/>

          </Flex>
          <div className='text-center pt-16'>
            <Button text={`View All Products`}/>
          </div>
        </Container>
    </section>
    
  )
}

export default ExploreOurProducts