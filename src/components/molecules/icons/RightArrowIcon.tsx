import React, { forwardRef } from 'react'

const RightArrowIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ ...props }, ref) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          d="M14 18.9988L21 11.9988M21 11.9988L14 4.99878M21 11.9988L3 11.9988"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
)
export default RightArrowIcon
