import { FaStar } from 'react-icons/fa'
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'
import { IoEyeOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Image from '../components/Image'
import { useDispatch } from 'react-redux'
import { addtocart } from '../slices/addtocartSlice'
import { useState } from 'react'

const Card = ({id,image,title,regularprice,saleprice ,className}) => {
  let [heart,setHeart]=useState(false)
   let dispatch=useDispatch()

  let handleAddToCart=()=>{
    dispatch(addtocart(
      {
        title:title,
        src:image,
        price:saleprice,
        quantity:1

      }
  ))
    
  }
  return (
     <div className='w-67.5 h-87.5 '>
          <div className='relative overflow-hidden group w-full h-62.5 bg-offwhitedark flex justify-center items-center'>
            <Link to={`/productdetails/${id}`}>
               <Image src={image}/>
            </Link>
            <div className='absolute top-3 left-3'>
              <p className='py-1 px-3 bg-primary rounded text-offwhitedark text-xs font-pop font-normal'>-40%</p>
            </div>

            {
              heart 
              ?
              <div className={`flex justify-center items-center absolute top-3 right-3 w-8.5 h-8.5 bg-white rounded-full ${className}`}>
              <IoIosHeart onClick={()=>setHeart(!heart)} className='text-xl text-primary' />
            </div>
            
               :
               <div className={`flex justify-center items-center absolute top-3 right-3 w-8.5 h-8.5 bg-white rounded-full ${className}`}>
              <IoIosHeartEmpty onClick={()=>setHeart(!heart)} className='text-xl' />
            </div>
            
            }
            



            <div className='flex justify-center items-center absolute top-14 right-3 w-8.5 h-8.5 bg-white rounded-full'>
              <IoEyeOutline className='text-xl' />

              


            </div>
            <div onClick={handleAddToCart} className='absolute -bottom-2/12 left-0 cursor-pointer bg-black w-full group-hover:bottom-0 duration-300'>
                <p className='py-2 text-white text-center text-base font-medium font-pop'>Add To Cart</p>
              </div>



          </div>
          <div>

            <Link to={`/productdetails/${id}`}>
            <h4 className='text-base text-black font-pop font-medium pt-4'>{title}</h4>
            
            </Link>
            
            <p className='text-base text-primary font-pop font-medium py-2'>${saleprice}<span className='text-black/50 pl-3'><del className='text-black/50'>${regularprice}</del></span></p>
            <ul className='flex gap-x-1 items-center'>
              <li><FaStar className='text-[#FFAD33]'/></li>
              <li><FaStar className='text-[#FFAD33]'/></li>
              <li><FaStar className='text-[#FFAD33]'/></li>
              <li><FaStar className='text-[#FFAD33]'/></li>
              <li><FaStar className='text-[#FFAD33]'/></li>
              <p className='text-sm text-black/50 font-pop font-semibold'>(88)</p>
            </ul>
          </div>

        </div>
  )
}

export default Card