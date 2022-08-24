import React, { PropsWithChildren } from 'react'

type Props = {
  openValue: string
  onChangeOpenValue: React.ChangeEventHandler<HTMLInputElement>
  endValue: string
  onChangeEndValue: React.ChangeEventHandler<HTMLInputElement>
  id: string
}

const FormDay = ({
  endValue,
  openValue,
  onChangeEndValue,
  onChangeOpenValue,
  id,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <label htmlFor={id} className="flex w-full items-center gap-1">
      <span className="p-2 text-sm text-gray-500">{children}</span>
      <input
        id={id}
        className="w-full rounded-xl border bg-gray-50 p-2"
        type="time"
        value={openValue}
        onChange={onChangeOpenValue}
      />
      <input
        id={id}
        className="w-full rounded-xl border bg-gray-50 p-2"
        type="time"
        value={endValue}
        onChange={onChangeEndValue}
      />
    </label>
  )
}

export default FormDay
