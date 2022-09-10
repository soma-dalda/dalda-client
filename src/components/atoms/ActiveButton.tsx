import clsx from 'clsx'
import React from 'react'

type Props = {
  active?: boolean
}

const ActiveButton = React.forwardRef<HTMLButtonElement, Props & JSX.IntrinsicElements['button']>(
  ({ active, className, children, ...props }, ref) => {
    return (
      <button
        className={clsx(active && 'text-brand-500', className)}
        type="button"
        {...props}
        ref={ref}
      >
        {children}
      </button>
    )
  }
)

export default ActiveButton
