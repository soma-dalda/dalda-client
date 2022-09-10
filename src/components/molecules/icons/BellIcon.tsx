import React, { forwardRef } from 'react'

const BellIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(({ ...props }, ref) => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <g clipPath="url(#clip0_100_751)">
        <path
          d="M20 16H20.5C21.3284 16 22 16.6716 22 17.5C22 18.3284 21.3284 19 20.5 19H3.5C2.67157 19 2 18.3284 2 17.5C2 16.6716 2.67157 16 3.5 16H4V10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10V16ZM9 22C9 21.4477 9.44772 21 10 21H14C14.5523 21 15 21.4477 15 22C15 22.5523 14.5523 23 14 23H10C9.44772 23 9 22.5523 9 22Z"
          fill="inhreit"
          stroke="#131415"
          strokeWidth={2}
        />
      </g>
      <defs>
        <clipPath id="clip0_100_751">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
})

export default BellIcon
