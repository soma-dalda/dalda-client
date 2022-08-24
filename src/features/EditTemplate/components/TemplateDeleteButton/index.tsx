import React, { forwardRef } from 'react'

const TemplateDeleteButton = forwardRef<HTMLButtonElement, JSX.IntrinsicElements['button']>(
  ({ className, ...props }, ref) => {
    return (
      <button
        type="button"
        className={`absolute right-0 bottom-[calc(100%+5px)] cursor-pointer text-gray-800 hover:text-gray-500 ${className}`}
        {...props}
        ref={ref}
      >
        &times;
      </button>
    )
  }
)

export default TemplateDeleteButton
