import React from 'react'
import useCheckboxControlContext from '../../hooks/useCheckboxControlContext'
import CheckboxUpdateInput from '../CheckboxUpdateInput'

type Props = {
  templateIndex: number
}

const Checkboxs = ({ templateIndex }: Props) => {
  const { checkboxs } = useCheckboxControlContext()

  return (
    <div className="flex w-full flex-col gap-2 p-2">
      {checkboxs?.map((_, index) => (
        <div key={`checkbox-${+index}`} className="flex w-full items-center">
          <CheckboxUpdateInput templateIndex={templateIndex} index={index} />
        </div>
      ))}
    </div>
  )
}

export default Checkboxs
