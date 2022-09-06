import React, { forwardRef } from 'react'

const LeftArrowTailIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M10 5L3 12M3 12L10 19M3 12H21"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
)

export default LeftArrowTailIcon
