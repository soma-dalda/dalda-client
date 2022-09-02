import { Input } from '@/components/atoms'
import useFormContext from '@/components/compounds/Form/hooks/useFormContext'
import { getStyleByProps } from '@/components/compounds/Form/utils'
import clsx from 'clsx'
import React, { forwardRef } from 'react'

const FormInput = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ value, className, ...props }, ref) => {
    const { isInvalid, isRequired, isDisabled, isError } = useFormContext()
    return (
      <Input
        value={value}
        ref={ref}
        aria-invalid={isInvalid}
        disabled={isDisabled}
        required={isRequired}
        className={clsx(getStyleByProps({ isInvalid, isDisabled, isError }), className)}
        {...props}
      />
    )
  }
)

export default React.memo(FormInput)
