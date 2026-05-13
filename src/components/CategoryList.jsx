import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const CategoryList = ({text,classNameForIcon,type}) => {
  return (
    <li className={`text-base text-black font-pop font-normal list-none cursor-pointer `}>{text}
    {type&&<IoIosArrowForward className={`inline-block ml-13 ${classNameForIcon}`}/>}
    </li>
  )
}

export default CategoryList