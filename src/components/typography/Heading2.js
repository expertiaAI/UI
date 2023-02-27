import React from 'react'
import { twMerge } from 'tailwind-merge'

export const H2=({children,className,...rest})=> {
    const combined = twMerge("text-[56px] text-[#4E4E4E] font-inter font-bold",className)
  return (
    <span className={combined} {...rest}>{children}</span>
  )
}