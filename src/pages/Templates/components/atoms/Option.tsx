import React from 'react'
import { Question } from '@/type'

type StrictValue = {
  value: Question['type']
}

const Option = ({
  children,
  value,
  ...props
}: Omit<JSX.IntrinsicElements['option'], 'value'> & StrictValue) => {
  return (
    <option value={value} {...props}>
      {children}
    </option>
  )
}

export default Option
