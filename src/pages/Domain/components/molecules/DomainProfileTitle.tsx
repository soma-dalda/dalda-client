import React, { PropsWithChildren } from 'react'

const DomainProfileTitle = ({ children }: PropsWithChildren) => {
  return <h2 className="mt-4 text-lg font-semibold text-grayScale-700">{children}</h2>
}

export default DomainProfileTitle
