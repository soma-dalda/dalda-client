import { User } from '@/type'
import React, { PropsWithChildren } from 'react'

type Props = {
  businessHours?: User['businessHours']
}

const DomainProfileHours = ({ businessHours, children }: PropsWithChildren<Props>) => {
  return (
    <div className="mt-6 flex w-full justify-center border-y p-2 text-sm">
      <button
        type="button"
        className="cursor-pointer text-grayScale-700"
        onClick={() => console.log(businessHours)}
      >
        {children}
      </button>
    </div>
  )
}

export default DomainProfileHours
