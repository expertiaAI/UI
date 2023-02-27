import React from 'react'
import { twMerge } from 'tailwind-merge'

export const H3=({children,className,...rest}) =>{
    const combined = twMerge("text-[42px] text-[#4E4E4E] font-inter font-bold",className)
  return (
    <span className={combined} {...rest}>{children}</span>
  )
}