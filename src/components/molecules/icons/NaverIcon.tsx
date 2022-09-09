import React from 'react'

const NaverIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ ...props }, ref) => {
    return (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path
          d="M12.9752 10.5834L6.79064 1.66669H1.66667V18.3334H7.03857V9.41669L13.2094 18.3334H18.3333V1.66669H12.9752V10.5834Z"
          fill="white"
        />
      </svg>
    )
  }
)

export default NaverIcon
