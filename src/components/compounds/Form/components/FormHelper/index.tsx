import Helper from '@/components/atoms/Helper'
import React, { forwardRef } from 'react'
import useFormContext from '../../hooks/useFormContext'

type Props = {
  variant?: 'success' | 'error' | 'normal'
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

const FormHelper = forwardRef<HTMLParagraphElement, Props>(
  ({ className, children, variant, ...props }, ref) => {
    const { isInvalid } = useFormContext()

    return (
      <Helper {...props} variant={variant} invalid={isInvalid} ref={ref}>
        {children}
      </Helper>
    )
  }
)

export default React.memo(FormHelper)
