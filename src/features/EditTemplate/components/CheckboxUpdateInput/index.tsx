import useInput from '@/features/EditForm/hooks/useInput'
import React from 'react'
import useCheckboxControlContext from '../../hooks/useCheckboxControlContext'

type Props = {
  value: string
  checkboxId: number
}

const CheckboxUpdateInput = ({ value: checkboxValue, checkboxId }: Props) => {
  const [value, , onChangeValue] = useInput(checkboxValue)
  const { updateCheckboxValue } = useCheckboxControlContext()

  return (
    <div className="mb-2 flex w-full justify-between">
      <input
        className="block w-[calc(100%-50px)] rounded-lg border bg-gray-50 p-2 text-sm text-gray-900"
        type="text"
        placeholder="옵션 변경하기"
        value={value}
        onChange={onChangeValue}
      />
      <button
        type="button"
        className="h-[40px] w-[40px] rounded-lg bg-blue-500 text-xs text-white "
        onClick={() => updateCheckboxValue(checkboxId, { value })}
      >
        변경
      </button>
    </div>
  )
}

export default CheckboxUpdateInput
