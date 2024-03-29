import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Caption2=({children,className,...rest})=> {
    const combined = twMerge(" text-xs font-inter font-bold",className)
  return (
    <span className={combined} {...rest}>{children}</span>
  )
}
