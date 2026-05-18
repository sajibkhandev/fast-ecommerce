import React from 'react'

const Heading = ({text,className}) => {
  return (
    <h2 className={`text-3xl text-black font-inter font-semibold ${className}`}>{text}</h2>
  )
}

export default Heading