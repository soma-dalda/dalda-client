import React, { forwardRef } from 'react'

const GoogleIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(({ ...props }, ref) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 10.2273C20 9.51824 19.9351 8.83642 19.8145 8.18188H10.2041V12.0501H15.6958C15.4592 13.3001 14.7403 14.3592 13.6596 15.0682V17.5773H16.9574C18.8869 15.8364 20 13.2728 20 10.2273Z"
        fill="#4285F4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2041 20C12.9592 20 15.269 19.1046 16.9574 17.5773L13.6596 15.0682C12.7458 15.6682 11.577 16.0227 10.2041 16.0227C7.54641 16.0227 5.29686 14.2636 4.49445 11.9H1.08535V14.4909C2.76439 17.7591 6.21523 20 10.2041 20Z"
        fill="#34A853"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.49445 11.9C4.29037 11.3 4.17441 10.6591 4.17441 10.0001C4.17441 9.34097 4.29036 8.70006 4.49444 8.10006V5.50915H1.08535C0.394249 6.85915 0 8.38642 0 10.0001C0 11.6137 0.394254 13.1409 1.08535 14.4909L4.49445 11.9Z"
        fill="#FBBC05"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2041 3.97727C11.7023 3.97727 13.0473 4.48182 14.1049 5.47273L17.0316 2.60455C15.2644 0.99091 12.9546 0 10.2041 0C6.21523 0 2.76439 2.24096 1.08535 5.50915L4.49444 8.10006C5.29686 5.73642 7.54641 3.97727 10.2041 3.97727Z"
        fill="#EA4335"
      />
    </svg>
  )
})

export default GoogleIcon
