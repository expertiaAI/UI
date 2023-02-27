import React from 'react'
import { twMerge } from 'tailwind-merge'

export const H1=({children,className,...rest}) =>{
    const combined = twMerge(" text-[64px] text-[#4E4E4E] font-inter leading-[80px] font-bold",className)
  return (
    <span className={combined} {...rest}>{children}</span>
  )
}
