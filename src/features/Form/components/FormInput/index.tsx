import React, { forwardRef } from 'react'
import useFormContext from '../../hooks/useFormContext'
import { getStyleByProps } from '../../utils'

const FormInput = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ value, className, ...props }, ref) => {
    const { isInvalid, isRequired, isDisabled } = useFormContext()

    return (
      <input
        value={value}
        ref={ref}
        aria-invalid={isInvalid}
        disabled={isDisabled}
        required={isRequired}
        className={`block w-full rounded-lg border bg-gray-50 p-2 text-sm text-gray-900 ${getStyleByProps(
          { isInvalid, isRequired, isDisabled }
        )} ${className}`}
        {...props}
      />
    )
  }
)

export default React.memo(FormInput)
