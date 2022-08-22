import React, { PropsWithChildren } from 'react'

type Props = {
  title: string
}

const CardContainer = ({ title, children }: PropsWithChildren<Props>) => {
  return (
    <div className="mt-5 min-w-[300px]">
      <p className="px-2 pb-1 text-sm font-thin">{title}</p>
      <div className="flex w-full max-w-[300px] gap-x-2 overflow-scroll pb-4">{children}</div>
    </div>
  )
}

export default CardContainer
