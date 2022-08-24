import { Description, Option } from '@/features/EditTemplate/types'
import React from 'react'
import CheckboxQuestion from '../CheckboxQuestion'
import DescriptionQuestion from '../DescriptionQuestion'

type Props = {
  type: Option | Description | string
  index: number
}

const Question = ({ type, index }: Props) => {
  if (type === 'longSubjective' || type === 'shortSubjective') {
    return <DescriptionQuestion type={type} index={index} />
  }

  if (type === 'multiObjective' || type === 'singleObjective') {
    return <CheckboxQuestion checkboxType={type} index={index} />
  }

  return null
}

export default React.memo(Question)
