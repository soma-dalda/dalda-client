import clsx from 'clsx'
import React from 'react'

const CancleButton = React.forwardRef<HTMLButtonElement, JSX.IntrinsicElements['button']>(
  ({ className, ...props }, ref) => {
    return (
      <button
        type="button"
        className={clsx(
          'absolute -right-3 top-3 flex h-2 w-2 items-center justify-center rounded-full bg-black p-3 font-bold text-white',
          className
        )}
        {...props}
        ref={ref}
      >
        &times;
      </button>
    )
  }
)

export default CancleButton
