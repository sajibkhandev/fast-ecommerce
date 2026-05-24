import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import Flex from '../components/Flex'
import ListItem from '../components/ListItem'
import { FiSearch } from 'react-icons/fi'
import { IoIosHeartEmpty } from 'react-icons/io'
import { IoCartOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'


const Navber = () => {
  return (
    <nav className='pt-10 pb-4 border border-[#00000080]'>
        <Container>
            <Flex>
                <div className='w-4/12'>
               <Link to='/'> <Image src={Logo} alt={"logo"}/></Link>
                </div>
                <div className='w-5/12'>
                <ul className='flex gap-x-12 cursor-pointer'>
                  <Link to="/"> <ListItem text="Home"/> </Link>
                  <Link to="/contact"> <ListItem text="Contact"/> </Link>
                  <Link to="/about"> <ListItem text="About"/> </Link>
                  <Link to="/signup"> <ListItem text="Sign Up"/> </Link>
                  <Link to="/login"> <ListItem text="Login"/> </Link>
                 
                   
                   
                   
                </ul>
                    
                    </div>
                <div className='w-4/12 flex justify-between items-center pl-10'>
                   <div className='relative w-[243px] bg-[#F5F5F5]'>
                       <input className='w-full py-1 pl-5 pr-9 placeholder:text-xs placeholder:text-[#00000080]' type="text" placeholder='What are you looking for?'/>
                       <FiSearch className='absolute top-1/2 -translate-y-1/2 right-4'/>
                   </div>

                  <Flex className='gap-x-5'>
                     <IoIosHeartEmpty className='text-2xl' />
                    <IoCartOutline className='text-2xl' />
                  </Flex>



                </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navber