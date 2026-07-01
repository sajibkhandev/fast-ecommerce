import React from 'react'
import Flex from './Flex'
import Image from './Image'

const Checkoutproduct = ({item}) => {
  return (
     
      <div>
        <Flex className={`items-center justify-between w-full pb-8`}>
              <Image className="w-20 h-20" src={item.src}/>
              <p className="font-pop font-normal text-base text-black">{item.title} </p>
              <p className="font-pop font-normal text-base text-black pl-[380px]">${(item.price * item.quantity)}</p>       
        </Flex>
      </div>

  )
}

export default Checkoutproduct