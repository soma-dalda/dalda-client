import React, { PropsWithChildren } from 'react'

const DomainProfileDescription = ({ children }: PropsWithChildren) => {
  return (
    <span className="mt-3 flex w-full justify-center break-all text-sm font-light text-grayScale-600">
      {children}
    </span>
  )
}

export default DomainProfileDescription
