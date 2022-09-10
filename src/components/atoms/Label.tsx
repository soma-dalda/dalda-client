import clsx from 'clsx'
import React, { forwardRef } from 'react'

type Props = {
  isRequired?: boolean
}

const Label = forwardRef<
  HTMLLabelElement,
  Props & React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
>(({ className, children, isRequired, htmlFor, ...props }, ref) => {
  return (
    <label
      className={clsx('text-sm text-grayScale-700', className)}
      htmlFor={htmlFor}
      {...props}
      ref={ref}
    >
      {children}
      {isRequired && <span className="pl-1 text-sm text-brand-500">*</span>}
    </label>
  )
})

export default Label
