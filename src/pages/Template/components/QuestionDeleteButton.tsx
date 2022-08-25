import React from 'react'

const QuestionDeleteButton = React.forwardRef<HTMLButtonElement, JSX.IntrinsicElements['button']>(
  ({ className, ...props }, ref) => {
    return (
      <button
        type="button"
        className={`absolute -right-2 -top-3 flex h-2 w-2 items-center justify-center rounded-full bg-black p-3 font-bold text-white ${className}`}
        {...props}
        ref={ref}
      >
        &times;
      </button>
    )
  }
)

export default QuestionDeleteButton
