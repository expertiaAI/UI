import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Body1=({children,className,...rest}) =>{
    const combined = twMerge(" text-md font-inter font-normal",className)
  return (
    <span className={combined} {...rest}>{children}</span>
  )
}
