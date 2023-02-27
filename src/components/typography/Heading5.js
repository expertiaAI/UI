import React from 'react'
import { twMerge } from 'tailwind-merge'

export const H5=({children,className,...rest}) =>{
    const combined = twMerge("text-3xl text-[#14102F] font-inter font-semibold",className)
  return (
    <span className={combined} {...rest}>{children}</span>
  )
}