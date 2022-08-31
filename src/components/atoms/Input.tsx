import React, { forwardRef } from 'react'
import { clsx } from 'clsx'

const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ value, className, ...props }, ref) => {
    return (
      <input
        value={value}
        ref={ref}
        className={clsx(
          'rounded-xl border border-border-400 bg-white py-3 px-4 text-sm font-normal',
          className
        )}
        {...props}
      />
    )
  }
)

export default Input
