import React, { forwardRef } from 'react'
import useFormContext from '../../hooks/useFormContext'
import { getStyleByProps } from '../../utils'

const FormTextarea = forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ value, className, ...props }, ref) => {
  const { isInvalid, isRequired, isDisabled } = useFormContext()

  return (
    <textarea
      value={value}
      ref={ref}
      aria-invalid={isInvalid}
      disabled={isDisabled}
      required={isRequired}
      className={`"block w-full rounded-lg border bg-gray-50 p-2 text-sm text-gray-900 ${getStyleByProps(
        { isInvalid, isRequired, isDisabled }
      )} ${className}`}
      {...props}
    />
  )
})

export default React.memo(FormTextarea)
