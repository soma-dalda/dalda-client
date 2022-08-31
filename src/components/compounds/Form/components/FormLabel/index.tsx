import { Label } from '@/components/atoms'
import useFormContext from '@/components/compounds/Form/hooks/useFormContext'
import { getStyleByProps } from '@/components/compounds/Form/utils'
import React, { forwardRef } from 'react'

const FormLabel = forwardRef<
  HTMLLabelElement,
  React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
>(({ className, children, htmlFor, ...props }, ref) => {
  const { isInvalid, isRequired, isDisabled } = useFormContext()

  return (
    <Label
      isRequired={isRequired}
      className={getStyleByProps({ isInvalid, isDisabled })}
      htmlFor={htmlFor}
      {...props}
      ref={ref}
    >
      {children}
    </Label>
  )
})

export default React.memo(FormLabel)
