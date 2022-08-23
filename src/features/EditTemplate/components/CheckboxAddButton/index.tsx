import React, { forwardRef } from 'react'
import useCheckboxControlContext from '../../hooks/useCheckboxControlContext'

const CheckboxAddButton = forwardRef<
  HTMLButtonElement,
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>(({ children, ...props }, ref) => {
  const { addCheckbox } = useCheckboxControlContext()

  return (
    <button onClick={addCheckbox} type="button" {...props} ref={ref}>
      {children}
    </button>
  )
})

export default CheckboxAddButton
