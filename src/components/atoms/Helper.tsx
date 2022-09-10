import { getHelperColor, getHelperColorByVariant } from '@/components/compounds/Form/utils'
import clsx from 'clsx'
import React, { forwardRef } from 'react'

type Props = {
  variant?: 'success' | 'error' | 'normal'
  invalid?: boolean
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

const Helper = forwardRef<HTMLParagraphElement, Props>(
  ({ className, children, variant, invalid, ...props }, ref) => {
    return (
      <p
        className={clsx(
          `mt-1 text-xs ${variant ? getHelperColorByVariant(variant) : getHelperColor(invalid)}`,
          className
        )}
        {...props}
        ref={ref}
      >
        {children}
      </p>
    )
  }
)

export default Helper
