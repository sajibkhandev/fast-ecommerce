import React from 'react'

const CategoryCard = ({text,icon}) => {
  return (
      <div className='group hover:bg-primary hover:border-transparent duration-300 flex flex-col justify-center items-center gap-y-4 w-[170px]  h-[145px] border border-black/30 rounded'>
             {icon}
              <p className='group-hover:text-white text-base text-black font-pop font-normal duration-300'>{text}</p>

            </div>
  )
}

export default CategoryCard