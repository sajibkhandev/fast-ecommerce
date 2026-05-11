import React from 'react'

const ListItem = ({className,text}) => {
  return (
    <li className={`text-base text-black font-pop font-normal border-b border-transparent hover:border-black duration-300 ${className}`}>{text}</li>
  )
}

export default ListItem