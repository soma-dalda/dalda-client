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
    <div className="flex w-full items-center gap-1">
      <span className="p-2 text-sm text-gray-500">{children}</span>
      <label htmlFor={`${id}open`} className="relative w-full">
        <input
          id={`${id}open`}
          className="w-full rounded-xl border bg-white p-2"
          value={openValue}
          type="number"
          max={24}
          min={0}
          onChange={onChangeOpenValue}
        />
        <span className="absolute left-[1px] top-[1px] flex items-center p-2">
          <span className="z-0 opacity-0">{openValue}</span>
          <span>:00</span>
        </span>
      </label>
      <label htmlFor={`${id}end`} className="relative w-full">
        <input
          id={`${id}end`}
          className="w-full rounded-xl border bg-white p-2"
          value={endValue}
          type="number"
          max={24}
          min={0}
          onChange={onChangeEndValue}
        />
        <span className="absolute left-[1px] top-[1px] flex items-center p-2">
          <span className="z-0 opacity-0">{endValue}</span>
          <span>:00</span>
        </span>
      </label>
    </div>
  )
}

export default FormDay
