import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { MdKeyboardArrowDown } from 'react-icons/md'

const Offer = () => {
  return (
    <section className='bg-black py-3'>
        <Container>
          <Flex>
              <div className='w-10/12  flex justify-center items-center'>
              <p className='text-offwhite text-sm font-normal font-pop'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <u><span className='font-semibold'>ShopNow</span></u></p></div>

            <div className='w-2/12 flex items-center justify-end space-x-1'>
            <p className='text-offwhite text-sm font-normal font-pop'>English </p><MdKeyboardArrowDown className='text-offwhite' />
            </div>
          </Flex>

        </Container>
    </section>
  )
}

export default Offer