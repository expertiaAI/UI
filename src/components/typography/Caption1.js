import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Caption1=({children,className,...rest})=> {
    const combined = twMerge(" text-xs font-inter font-normal",className)
  return (
    <span className={combined} {...rest}>{children}</span>
  )
}
