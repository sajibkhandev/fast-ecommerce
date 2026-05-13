import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import BannarImage from '../assets/bannar.jpg'
import { IoIosArrowForward } from 'react-icons/io'
import CategoryList from '../components/CategoryList'

const Bannar = () => {
  return (
    <section className=' pb-35'>
        <Container>
            <Flex>
                <div className='w-3/12'>

                <ul className='flex flex-col gap-y-4 border-r border-black/30 pt-10 mr-10'>
                    <CategoryList type={true} classNameForIcon="" text="Woman’s Fashion"/>
                    <CategoryList type={true} classNameForIcon="ml-19" text="Men’s Fashion"/>
                    <CategoryList  classNameForIcon="" text="Electronics"/>
                    <CategoryList classNameForIcon="ml-24" text="Home & Lifestyle"/>
                    <CategoryList classNameForIcon="" text="Medicine"/>
                    <CategoryList classNameForIcon="ml-24" text="Sports & Outdoor"/>
                    <CategoryList classNameForIcon="ml-24" text="Baby’s & Toys"/>
                    <CategoryList classNameForIcon="ml-24" text="Groceries & Pets"/>
                    <CategoryList classNameForIcon="ml-24" text="Health & Beauty"/>
                    
                </ul>
                









                </div>
                <div className='w-9/12 pt-10'>
                <Image src={BannarImage}/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Bannar