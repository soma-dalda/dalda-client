import React, { forwardRef } from 'react'

const KakaoIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(({ ...props }, ref) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      <path
        d="M9.99429 2C5.56888 2 2 4.89573 2 8.41119C2 10.6931 3.48465 12.6911 5.71164 13.8321L4.95789 16.6873C4.94368 16.7301 4.94149 16.776 4.95158 16.82C4.96166 16.864 4.98362 16.9043 5.01499 16.9363C5.06073 16.9772 5.11959 16.9999 5.18059 17C5.23116 16.9959 5.27914 16.9756 5.31763 16.9421L8.56103 14.724C9.03979 14.791 9.52241 14.8258 10.0057 14.8282C14.4254 14.8282 18 11.9324 18 8.41119C18 4.88994 14.414 2 9.99429 2Z"
        fill="#392020"
      />
    </svg>
  )
})

export default KakaoIcon
