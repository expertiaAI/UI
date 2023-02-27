import React from 'react'
import { twMerge } from 'tailwind-merge'

export const ButtonMd=({children,className,...rest})=> {
    const combined = twMerge(" text-sm font-inter font-semibold",className)
  return (
    <span className={combined} {...rest}>{children}</span>
  )
}
