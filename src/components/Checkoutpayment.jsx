import React from 'react'
import Flex from './Flex'
import Image from './Image'


const Checkoutpayment = ({ payment, src_one, src_two, src_three, src_four }) => {
    return (
        <div className='flex justify-between pb-8'>
            <div>
                <input type="radio" name="payment" className='accent-black pl-4 font-pop font-normal text-base text-black' />
                <label htmlFor="payment">{payment}</label>
            </div>
            
            <div className='flex gap-x-2'>
            <Image src={src_one} />
            <Image src={src_two} />
            <Image src={src_three} />
            <Image src={src_four} />
            </div>
        </div>
    )
}

export default Checkoutpayment