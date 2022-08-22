import React, { forwardRef } from 'react'

const ProfileImage = forwardRef<
  HTMLImageElement,
  React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
>(({ ...props }, ref) => {
  return (
    <div className="relative mt-5 flex aspect-square h-auto w-[30%] items-center justify-center overflow-hidden rounded-full border">
      <img src="" alt="" {...props} ref={ref} />
    </div>
  )
})

export default ProfileImage
