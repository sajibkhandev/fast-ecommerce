import React, { useState } from 'react'

const Checkoutform = ({text,className,required,placeholder,className2}) => {

    



  return (
    <>
        <label className={`font-pop font-normal text-base block text-black/40 ${className}`}>{text} 
        {required && <span className="text-primary/40">*</span>}
        </label>
        <input type="text" className={`bg-offwhitedark w-full h-12.5 mb-8 rounded-sm ${className2}`} placeholder={placeholder}/>
        
    </>
    
  )
}

export default Checkoutform