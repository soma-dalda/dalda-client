import React, { forwardRef } from 'react'

const SliceCakeIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`fill-[#E56FB4] ${className}`}
        {...props}
        ref={ref}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.4903 3.39531C15.2179 3.28299 14.9112 3.29729 14.6516 3.43109L2.666 9.61119C2.26726 9.81679 2 10.3562 2 10.8V19.2C2 19.7523 2.44772 20.2 3 20.2H21C21.5522 20.2 22 19.7523 22 19.2V10.8C22 7.14629 18.5455 4.65509 15.4903 3.39531ZM20.4 11.5H19.845C19.2831 11.5 18.9022 11.8184 18.5481 12.208C17.4367 13.4312 15.5133 13.4312 14.4019 12.208C14.0805 11.8544 13.5802 11.7249 13.1276 11.8781C12.168 12.2031 11.2797 12.1853 10.3122 11.8577C9.71246 11.6546 9.06256 11.6546 8.46284 11.8577C7.5303 12.1735 6.51972 12.1735 5.58716 11.8577C4.91952 11.6316 4.30732 11.5 3.6 11.5V14.8H20.4V11.5ZM5.26826 10.0696L15.1351 4.98199C17.7095 6.09401 19.5911 7.69819 20.223 9.89999H19.845C18.8281 9.89999 18.0241 10.4055 17.364 11.132C16.8874 11.6565 16.0626 11.6565 15.586 11.132C14.8367 10.3074 13.6699 10.0053 12.6145 10.3626C11.9851 10.5758 11.465 10.5588 10.8253 10.3422C9.8928 10.0265 8.88222 10.0265 7.94966 10.3422C7.34996 10.5453 6.70006 10.5453 6.10034 10.3422C5.82422 10.2487 5.54966 10.1464 5.26826 10.0696ZM3.6 18.6V16.4H20.4V18.6H3.6Z"
        />
      </svg>
    )
  }
)

export default SliceCakeIcon