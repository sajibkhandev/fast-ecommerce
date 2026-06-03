import Image from '../components/Image'
import Product1 from '../assets/product1.png'
import { FaStar } from 'react-icons/fa'
import { IoTrashOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";

const Card = ({image,title,regularprice,saleprice , className}) => {
  return (
     <div className='w-67.5 h-87.5 '>
          <div className='relative overflow-hidden group w-full h-62.5 bg-offwhitedark flex justify-center items-center'>
            <Image src={image}/>
            <div className='absolute top-3 left-3'>
              <p className={`py-1 px-3 bg-primary rounded text-offwhitedark text-xs font-pop font-normal ${className}`}>-35%</p>
            </div>
            <div className='flex justify-center items-center absolute top-3 right-3 w-8.5 h-8.5 bg-white rounded-full'>
              <IoTrashOutline className='text-xl'/>
            </div>
         
            <div className='absolute -bottom-2/12 left-0 bg-black w-full group-hover:bottom-0 duration-300 flex justify-center items-center'>
            <BsCart3 className='text-white text-2xl mr-2' />
                <p className='py-2 text-white text-center text-base font-medium font-pop'>  Add To Cart</p>
              
              </div>



          </div>
          <div>
            <h4 className='text-base text-black font-pop font-medium pt-4'>{title}</h4>
            <p className='text-base text-primary font-pop font-medium py-2'>${saleprice}<span className='text-black/50 pl-3'><del className='text-black/50'>${regularprice}</del></span></p></div>

        </div>
  )
}

export default Card