import React from 'react'
import { twMerge } from 'tailwind-merge'

export const ButtonSm=({children,className,...rest}) =>{
    const combined = twMerge(" text-xs font-inter font-semibold",className)
  return (
    <span className={combined} {...rest}>{children}</span>
  )
}
