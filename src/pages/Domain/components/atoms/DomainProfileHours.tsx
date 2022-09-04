import React, { PropsWithChildren } from 'react'

type Props = JSX.IntrinsicElements['button']

const DomainProfileHours = ({ children, ...props }: PropsWithChildren<Props>) => {
  return (
    <div className="mt-6 flex w-full justify-center border-y p-2 text-sm">
      <button type="button" className="cursor-pointer text-grayScale-700" {...props}>
        {children}
      </button>
    </div>
  )
}

export default DomainProfileHours
