import React, { forwardRef } from 'react'
import useFormContext from '@/components/compounds/Form/hooks/useFormContext'
import { getStyleByProps } from '@/components/compounds/Form/utils'

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
      className={`"block w-full rounded-xl border border-border-400 bg-white p-2 text-sm text-gray-900 ${getStyleByProps(
        { isInvalid, isRequired, isDisabled }
      )} ${className}`}
      {...props}
    />
  )
})

export default React.memo(FormTextarea)
