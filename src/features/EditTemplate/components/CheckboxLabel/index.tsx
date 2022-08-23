import React, { forwardRef } from 'react'

type Props = React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>

const CheckboxLable = forwardRef<HTMLLabelElement, Props>(
  ({ htmlFor, children, ...props }, ref) => {
    return (
      <label {...props} htmlFor={htmlFor} ref={ref}>
        {children}
      </label>
    )
  }
)

export default CheckboxLable
