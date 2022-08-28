import React, { forwardRef } from 'react'

const UserIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(({ ...props }, ref) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C9.20406 2 6.9375 4.26656 6.9375 7.0625C6.9375 9.85844 9.20406 12.125 12 12.125C14.7959 12.125 17.0625 9.85844 17.0625 7.0625C17.0625 4.26656 14.7959 2 12 2ZM12 13.25C9.81916 13.25 7.60258 14.0426 5.91693 15.3963C4.22359 16.7562 3 18.7441 3 21.125C3 21.7463 3.50368 22.25 4.125 22.25H19.875C20.4963 22.25 21 21.7463 21 21.125C21 18.7441 19.7764 16.7562 18.0831 15.3963C16.3974 14.0426 14.1808 13.25 12 13.25Z"
        fill="#72787F"
      />
    </svg>
  )
})
export default UserIcon
