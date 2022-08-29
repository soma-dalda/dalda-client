import LocationIcon from '@/components/icons/LocationIcon'
import React, { PropsWithChildren } from 'react'

const DomainProfileLocation = ({ children }: PropsWithChildren) => {
  return (
    <div className="mt-4 flex items-center justify-center gap-2 text-xs font-light text-grayScale-600">
      <LocationIcon />
      <span>{children}</span>
    </div>
  )
}

export default DomainProfileLocation
