
import Flex from '../components/Flex'
import Image from '../components/Image'

const CustomerCard = ({title,text,icon}) => {
  return (
    <Flex className='flex-col items-center justify-center'>
                    <Image src={icon}/>
                    <h4 className='text-xl text-black font-semibold font-pop pt-6 pb-2'>{title}</h4>
                    <p className='text-sm text-black font-normal font-pop'>{text}</p>
               
            </Flex>
  )
}

export default CustomerCard