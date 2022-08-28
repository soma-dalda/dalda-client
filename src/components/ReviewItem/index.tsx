import React, { PropsWithChildren } from 'react'

export type ReviewItemProps = { nickname: string }

const ReviewItem = ({ children, nickname }: PropsWithChildren<ReviewItemProps>) => {
  return (
    <div className="flex h-10 w-full shrink-0 items-center justify-center gap-2 overflow-scroll rounded-xl bg-brand-100">
      <div className="flex aspect-square h-fit w-auto shrink-0 items-center justify-center">
        {nickname}
      </div>
      <p className="text-sm font-thin">{children}</p>
    </div>
  )
}

export default ReviewItem
