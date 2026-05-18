import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import { IoIosPhonePortrait } from 'react-icons/io'
import CategoryCard from '../components/CategoryCard'
import { HiOutlineDesktopComputer } from 'react-icons/hi'

const BrowseByCategory = () => {
  return (
    <section className='pb-17.5'>
        <Container>
            <SubHeading text={`Categories`}/>
            <Heading className="pt-6" text="Browse By Category"/>
           <Flex className={`justify-between py-16 border-b border-black/30`}>
            <CategoryCard text="phone" icon={ <IoIosPhonePortrait className='text-4xl group-hover:text-white duration-300'/>}/>
            <CategoryCard text="Computers" icon={ <HiOutlineDesktopComputer className='text-4xl group-hover:text-white duration-300'/>}/>
            <CategoryCard text="phone" icon={ <IoIosPhonePortrait className='text-4xl group-hover:text-white duration-300'/>}/>
            <CategoryCard text="phone" icon={ <IoIosPhonePortrait className='text-4xl group-hover:text-white duration-300'/>}/>
            <CategoryCard text="phone" icon={ <IoIosPhonePortrait className='text-4xl group-hover:text-white duration-300'/>}/>
            <CategoryCard text="phone" icon={ <IoIosPhonePortrait className='text-4xl group-hover:text-white duration-300'/>}/>
           
           </Flex>
          
        </Container>
    </section>
  )
}

export default BrowseByCategory