import React, { forwardRef } from 'react'
import useFormContext from '../../hooks/useFormContext'
import { getHelperColor, getHelperColorByVariant } from '../../utils'

type Props = {
  variant?: 'success' | 'error' | 'normal'
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

const FormHelper = forwardRef<HTMLParagraphElement, Props>(
  ({ className, children, variant, ...props }, ref) => {
    const { isInvalid } = useFormContext()

    return (
      <p
        className={`mt-1 text-xs ${
          variant ? getHelperColorByVariant(variant) : getHelperColor(isInvalid)
        } ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </p>
    )
  }
)

export default React.memo(FormHelper)
