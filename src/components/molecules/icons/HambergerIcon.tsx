import React, { forwardRef } from 'react'

const HambergerIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
        <g clipPath="url(#clip0_247_567)">
          <path
            d="M3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18V18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18V18Z"
            fill="#72787F"
          />
          <path
            d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12V12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12V12Z"
            fill="#72787F"
          />
          <path
            d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6V6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6V6Z"
            fill="#72787F"
          />
        </g>
        <defs>
          <clipPath id="clip0_247_567">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  }
)
export default HambergerIcon
