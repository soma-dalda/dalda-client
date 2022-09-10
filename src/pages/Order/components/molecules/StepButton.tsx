import React from 'react'

type Props = {
  active?: boolean
}

const getStepButtonStyle = (isActive?: boolean) => {
  if (isActive) {
    return 'bg-brand-500 text-white'
  }
  return 'border border-grayScale-500'
}

const StepButton = React.forwardRef<HTMLButtonElement, Props & JSX.IntrinsicElements['button']>(
  ({ children, className, active, ...props }, ref) => {
    return (
      <button
        type="button"
        aria-label="step"
        className={`flex aspect-square h-4 w-4 items-center justify-center rounded-full p-3 text-xs ${getStepButtonStyle(
          active
        )} ${className}`}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    )
  }
)

export default StepButton
