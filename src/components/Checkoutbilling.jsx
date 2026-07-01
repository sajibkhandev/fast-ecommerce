import React from 'react'
import Flex from './Flex'
import Image from './Image'

const Checkoutbilling = ({item}) => {
  return (
   <div className={`border-b border-b-black pb-8 ${item.className}`}>
    <Flex className={`justify-between `}>
    <h2 className='font-pop font-normal text-base text-black'>{item.text}</h2>
    <p className='font-pop font-normal text-base text-black'>{item.subtotal}</p>
   </Flex>
   </div>
   
  )
}

export default Checkoutbilling