import React, { forwardRef } from 'react'

const InfoIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(({ ...props }, ref) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      <rect width="32" height="32" rx="16" fill="#ABB3BB" />
      <g clipPath="url(#clip0_100_728)">
        <path
          d="M17.0987 19.467C17.0556 19.5717 16.9531 19.64 16.84 19.64H16.28H15.72H15.16C15.0469 19.64 14.9444 19.5717 14.9013 19.467C14.8582 19.3622 14.8822 19.2418 14.9623 19.1618L15.44 18.6841V15.5559L14.9623 15.0777C14.8822 14.9976 14.8582 14.8772 14.9013 14.7725C14.9444 14.6677 15.0469 14.6 15.16 14.6H15.72H16H16.28C16.4345 14.6 16.56 14.7249 16.56 14.88V18.6841L17.0382 19.1617C17.1178 19.2418 17.1418 19.3622 17.0987 19.467ZM16 12.36C16.4631 12.36 16.84 12.7363 16.84 13.2C16.84 13.6631 16.4631 14.04 16 14.04C15.5369 14.04 15.16 13.6631 15.16 13.2C15.16 12.7363 15.5369 12.36 16 12.36ZM16 9C12.1405 9 9 12.1399 9 16C9 19.8595 12.1405 23 16 23C19.8601 23 23 19.8595 23 16C23 12.1399 19.8601 9 16 9Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_100_728">
          <rect width="14" height="14" fill="white" transform="translate(9 9)" />
        </clipPath>
      </defs>
    </svg>
  )
})
export default InfoIcon
