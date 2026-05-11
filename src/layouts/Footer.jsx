import React from 'react'
import Flex from '../components/Flex'
import Container from '../components/Container'
import Image from '../components/Image'
import Logo from '../assets/footerlogo.png'
import { FiSearch } from 'react-icons/fi'
import ListItem from '../components/ListItem'

const Footer = () => {
  return (
    <footer className='pt-15 bg-black'>
        <Container>
            <Flex>
                <div className='w-3/12 '>
                  <Image src={Logo}/>
                  <h5 className='py-6 text-xl text-offwhite font-pop font-medium'>Subscribe</h5>
                  <p className='pb-4 text-base text-offwhite font-pop font-normal'>Get 10% off your first order</p>
                     <div className='relative w-[200px] bg-[#F5F5F5]'>
                                         <input className='w-full py-1 pl-5 pr-9 placeholder:text-xs placeholder:text-[#00000080]' type="text" placeholder='What are you looking for?'/>
                                         <FiSearch className='absolute top-1/2 -translate-y-1/2 right-4'/>
                                     </div>
                </div>
                <div className='w-2/12 '>
                <strong className='inline-block text-offwhite text-xl font-pop font-normal pb-6'>Account</strong>
                  <ul className='flex flex-col gap-y-4'>
                    <ListItem className="text-offwhite" text="My Account"/>
                    <ListItem className="text-offwhite" text="Login / Register"/>
                    <ListItem className="text-offwhite" text="Cart"/>
                    <ListItem className="text-offwhite" text="Wishlist"/>
                    <ListItem className="text-offwhite" text="Shop"/>
                  </ul>
                </div>
                <div className='w-2/12 '>
                <strong className='inline-block text-offwhite text-xl font-pop font-normal pb-6'>Account</strong>
                  <ul className='flex flex-col gap-y-4'>
                    <ListItem className="text-offwhite" text="My Account"/>
                    <ListItem className="text-offwhite" text="Login / Register"/>
                    <ListItem className="text-offwhite" text="Cart"/>
                    <ListItem className="text-offwhite" text="Wishlist"/>
                    <ListItem className="text-offwhite" text="Shop"/>
                  </ul>
                </div>
                <div className='w-2/12 '>
                <strong className='inline-block text-offwhite text-xl font-pop font-normal pb-6'>Account</strong>
                  <ul className='flex flex-col gap-y-4'>
                    <ListItem className="text-offwhite" text="My Account"/>
                    <ListItem className="text-offwhite" text="Login / Register"/>
                    <ListItem className="text-offwhite" text="Cart"/>
                    <ListItem className="text-offwhite" text="Wishlist"/>
                    <ListItem className="text-offwhite" text="Shop"/>
                  </ul>
                </div>
                <div className='w-3/12 '>
                <strong className='inline-block text-offwhite text-xl font-pop font-normal pb-6'>Account</strong>
                  <ul className='flex flex-col gap-y-4'>
                    <ListItem className="text-offwhite" text="My Account"/>
                    <ListItem className="text-offwhite" text="Login / Register"/>
                    <ListItem className="text-offwhite" text="Cart"/>
                    <ListItem className="text-offwhite" text="Wishlist"/>
                    <ListItem className="text-offwhite" text="Shop"/>
                  </ul>
                </div>
                
            </Flex>
        </Container>
        <div className='border-t  border-offwhite pb-5 text-center pt-6 mt-10'>
            <p className='text-white'>Copyright Rimel 2022. All right reserved</p>
        </div>
    </footer>
  )
}

export default Footer