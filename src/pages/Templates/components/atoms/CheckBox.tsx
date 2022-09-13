import React from 'react'

const CheckBox = ({ id, children, ...props }: JSX.IntrinsicElements['input']) => {
  return (
    <label htmlFor={id} className="flex items-center justify-end gap-1 p-2 text-xs">
      <input id={id} type="checkbox" {...props} />
      <p>{children}</p>
    </label>
  )
}

export default CheckBox
