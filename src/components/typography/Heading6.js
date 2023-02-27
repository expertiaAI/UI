import React from 'react'
import { twMerge } from 'tailwind-merge'

export const H6=({children,className,...rest})=> {
    const combined = twMerge("text-2xl font-inter font-semibold",className)
  return (
    <div className={combined} {...rest}>{children}</div>
  )
}