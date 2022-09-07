import React, { PropsWithChildren } from 'react'

type Props = {
  id: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const TemplateRadio = ({ id, onChange, children }: PropsWithChildren<Props>) => {
  return (
    <label htmlFor={id} className="flex w-full justify-between rounded-xl border bg-white p-3">
      <div className="flex gap-3">
        <input name="form" type="radio" id={id} onChange={onChange} />
        <span>{children}</span>
      </div>
      <button type="button" className="text-red-500">
        &times;
      </button>
    </label>
  )
}

export default TemplateRadio
