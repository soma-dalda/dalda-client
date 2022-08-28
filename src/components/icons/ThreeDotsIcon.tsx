import React, { forwardRef } from 'react'

const ThreeDotsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ ...props }, ref) => {
    return (
      <svg
        width="15"
        height="2"
        viewBox="0 0 15 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 1C0 0.447715 0.447715 0 1 0H2.77778C3.33006 0 3.77778 0.447715 3.77778 1C3.77778 1.55228 3.33006 2 2.77778 2H1C0.447715 2 0 1.55228 0 1ZM5.33333 1C5.33333 0.447715 5.78105 0 6.33333 0H8.11111C8.6634 0 9.11111 0.447715 9.11111 1C9.11111 1.55228 8.6634 2 8.11111 2H6.33333C5.78105 2 5.33333 1.55228 5.33333 1ZM10.6667 1C10.6667 0.447715 11.1144 0 11.6667 0H13.5556C14.1078 0 14.5556 0.447715 14.5556 1C14.5556 1.55228 14.1078 2 13.5556 2H11.6667C11.1144 2 10.6667 1.55228 10.6667 1Z"
          fill="#9DA7B0"
        />
      </svg>
    )
  }
)

export default ThreeDotsIcon
