import React, { forwardRef } from 'react'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const CheckboxInput = forwardRef<HTMLInputElement, Props>(({ ...props }, ref) => {
  return <input {...props} ref={ref} />
})

export default CheckboxInput
