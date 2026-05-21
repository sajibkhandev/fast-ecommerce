import React from 'react'

const SubHeading = ({text,className}) => {
  return (
    <div className={`flex items-center gap-x-4 ${className}`}>
        <div className='w-5 h-10 bg-primary rounded '></div>
        <p className='text-base text-primary font-semibold font-pop'>{text}</p>
    </div>
  )
}

export default SubHeading
