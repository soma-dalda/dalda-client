import React from 'react'
import { FormDay } from '@/components/compounds/Form/components'
import { DAYS } from '../../utils'
import useCompanyEditValue from '../../hooks/useCompanyEditValue'
import useCompanyEditAction from '../../hooks/useCompanyEditAction'

type Props = {
  handleSaveButtonClick?: (e: React.FormEvent<React.ElementType<any> | HTMLFormElement>) => void
}

const EditDays = ({ handleSaveButtonClick }: Props) => {
  const { businessHours } = useCompanyEditValue()
  const { handleOpenChange, handleEndChange } = useCompanyEditAction()

  return (
    <form
      onSubmit={handleSaveButtonClick}
      id="profile"
      className="mt-2 grid w-full animate-fade-in-left grid-cols-1 gap-2 p-2"
    >
      <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
        <span className="flex justify-center">오픈</span>
        <span className="flex justify-center">마감</span>
      </div>
      {DAYS.map((DAY, index) => (
        <FormDay
          key={DAY}
          openValue={businessHours?.[index]?.start ?? '0'}
          endValue={businessHours?.[index]?.end ?? '0'}
          onChangeOpenValue={handleOpenChange(index)}
          onChangeEndValue={handleEndChange(index)}
          id={DAY}
        >
          {DAY}
        </FormDay>
      ))}
    </form>
  )
}

export default EditDays
