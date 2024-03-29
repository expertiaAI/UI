import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Body2=({children,className,...rest})=> {
    const combined = twMerge(" text-sm font-inter font-normal",className)
  return (
    <span className={combined} {...rest}>{children}</span>
  )
}
