import React from 'react'
import { DAYS } from '@/pages/Edit/utils'
import { Company } from '@/type'

type Props = {
  businessHours?: Company['businessHours'] | null
}

const BusinessHourMessage = ({ businessHours }: Props) => {
  return (
    <div className="flex w-full flex-col justify-center">
      {DAYS.map((day, index) => (
        <div className="mt-1 flex w-full items-center justify-center text-base text-grayScale-700">
          <span className="mr-4">{day}</span>
          <div className="flex min-w-[120px] justify-center">
            <div className="">{businessHours?.[index]?.start || 0}:00</div>
            <span>~</span>
            <div>{businessHours?.[index]?.end || 0}:00</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BusinessHourMessage
