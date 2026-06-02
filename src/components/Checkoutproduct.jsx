import React from 'react'
import Flex from './Flex'
import Image from './Image'

const Checkoutproduct = ({src,text,amount}) => {
  return (
     
      <div>
        <Flex className={`items-center justify-between w-full pb-8`}>
              <Image src={src}/>
              <p className="font-pop font-normal text-base text-black">{text} </p>
              <p className="font-pop font-normal text-base text-black pl-[270px]">{amount}</p>       
        </Flex>
      </div>

  )
}

export default Checkoutproduct