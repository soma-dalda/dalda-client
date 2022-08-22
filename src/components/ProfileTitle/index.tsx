import React, { forwardRef } from 'react'

const ProfileTitle = forwardRef<
  HTMLHeadingElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
>(({ children, ...props }, ref) => {
  return (
    <h2 className="mb-2 text-2xl font-light" ref={ref} {...props}>
      {children}
    </h2>
  )
})

export default ProfileTitle
