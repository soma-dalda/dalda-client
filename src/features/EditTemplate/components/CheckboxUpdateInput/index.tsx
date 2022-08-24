import React from 'react'
import useCheckboxControlContext from '../../hooks/useCheckboxControlContext'

type Props = {
  index: number
  templateIndex: number
}

const CheckboxUpdateInput = ({ templateIndex, index }: Props) => {
  const { getCheckbox, updateCheckboxValue, deleteCheckbox } = useCheckboxControlContext()

  return (
    <div className="mb-2 flex w-full justify-between rounded-lg border bg-gray-50">
      <input
        className="block w-[calc(100%)] bg-transparent p-2 text-sm text-gray-900"
        type="text"
        placeholder="옵션"
        value={getCheckbox(index) ?? ''}
        onChange={(e) =>
          updateCheckboxValue(templateIndex, { optionIndex: index, value: e.target.value })
        }
      />
      <button
        className="mr-2 bg-transparent text-center text-xs text-red-400"
        type="button"
        onClick={() => deleteCheckbox(index)}
      >
        &times;
      </button>
    </div>
  )
}

export default CheckboxUpdateInput
