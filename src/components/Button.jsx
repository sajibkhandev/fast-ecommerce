import React from 'react'

const Button = ({text,className, type}) => {
  return (
    <button type={type} className={`text-offwhite text-base font-medium font-pop bg-primary py-4 px-12 rounded border border-transparent hover:bg-transparent hover:text-primary hover:border-primary duration-300 ${className}`}>{text}</button>
  )
}

export default Button