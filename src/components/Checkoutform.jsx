import React, { useState } from 'react'

const Checkoutform = ({text,className,required}) => {

    



  return (
    <>
        <label className={`font-pop font-normal text-base block text-black/40 ${className}`}>{text} 
        {required && <span className="text-primary/40">*</span>}
        </label>
        <input type="text" className={`bg-offwhitedark w-full h-12.5 mb-8 pl-4 rounded-sm`}/>
        
    </>
    
  )
}

export default Checkoutform