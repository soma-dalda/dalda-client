import React, { forwardRef } from 'react'
import useFormContext from '../../hooks/useFormContext'
import { getStyleByProps } from '../../utils'

const FormLabel = forwardRef<
  HTMLLabelElement,
  React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
>(({ className, children, htmlFor, ...props }, ref) => {
  const { isDisabled, isRequired } = useFormContext()

  return (
    <label
      ref={ref}
      className={`text-sm font-light text-gray-900 ${getStyleByProps({ isDisabled })} ${className}`}
      htmlFor={htmlFor}
      {...props}
    >
      {children}
      {isRequired && <span className="pl-1 text-sm text-red-600">*</span>}
    </label>
  )
})

export default React.memo(FormLabel)
