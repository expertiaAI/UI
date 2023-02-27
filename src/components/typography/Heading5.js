import React from 'react'
import { twMerge } from 'tailwind-merge'

export const H5=({children,className,...rest}) =>{
    const combined = twMerge("text-3xl font-inter font-semibold",className)
  return (
    <div className={combined} {...rest}>{children}</div>
  )
}