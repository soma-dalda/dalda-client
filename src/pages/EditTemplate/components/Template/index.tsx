import { Description, Option } from '@/features/EditTemplate/types'
import React from 'react'
import CheckboxTemplate from '../CheckboxTemplate'
import DescriptionTemplate from '../DescriptionTemplate'

type Props = {
  type: string | Option | Description
  index: number
}

const Template = ({ type, index }: Props) => {
  if (type === 'LongDescription' || type === 'ShortDescription') {
    return <DescriptionTemplate type={type} index={index} />
  }

  if (type === 'MultiOption' || type === 'SingleOption') {
    return <CheckboxTemplate checkboxType={type} index={index} />
  }

  return null
}

export default React.memo(Template)
