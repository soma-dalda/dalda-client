import clsx from 'clsx'
import React from 'react'

const CheckBox = ({
  id,
  children,
  labelClassName,
  ...props
}: JSX.IntrinsicElements['input'] & { labelClassName?: string }) => {
  return (
    <label
      htmlFor={id}
      className={clsx('flex items-center justify-end gap-1 p-2 text-xs', labelClassName)}
    >
      <input id={id} type="checkbox" {...props} />
      <p>{children}</p>
    </label>
  )
}

export default CheckBox
