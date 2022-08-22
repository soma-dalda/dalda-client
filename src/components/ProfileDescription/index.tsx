import React, { forwardRef } from 'react'

const ProfileDescription = forwardRef<
  HTMLParagraphElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
>(({ children, className, ...props }, ref) => {
  return (
    <p className={`max-w-[300px] text-lg font-thin ${className}`} {...props} ref={ref}>
      {children}
    </p>
  )
})

export default ProfileDescription
