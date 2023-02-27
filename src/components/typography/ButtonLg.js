import React from 'react'
import { twMerge } from 'tailwind-merge'

export const ButtonLg=({children,className,...rest})=> {
    const combined = twMerge(" text-md font-inter font-semibold",className)
  return (
    <span className={combined} {...rest}>{children}</span>
  )
}
