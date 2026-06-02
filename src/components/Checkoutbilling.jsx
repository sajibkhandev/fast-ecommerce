import React from 'react'
import Flex from './Flex'
import Image from './Image'

const Checkoutbilling = ({text,amount,className}) => {
  return (
   <div className={`border-b border-b-black pb-8 ${className}`}>
    <Flex className={`justify-between `}>
    <h2 className='font-pop font-normal text-base text-black'>{text}</h2>
    <p className='font-pop font-normal text-base text-black'>{amount}</p>
   </Flex>
   </div>
   
  )
}

export default Checkoutbilling