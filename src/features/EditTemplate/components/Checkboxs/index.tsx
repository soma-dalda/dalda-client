import React from 'react'
import useCheckboxControlContext from '../../hooks/useCheckboxControlContext'
import CheckboxInput from '../CheckboxInput'
import CheckboxLable from '../CheckboxLabel'
import CheckboxUpdateInput from '../CheckboxUpdateInput'

const Checkboxs = () => {
  const { checkboxs, updateCheckbox, deleteCheckbox } = useCheckboxControlContext()

  return (
    <div className="flex w-full flex-col gap-2 p-2">
      {checkboxs.map((checkbox, index) => (
        <div key={`${checkbox.value}-${+index}`} className="flex w-full items-center">
          {checkbox.isUpdate ? (
            <CheckboxUpdateInput value={checkbox.value} checkboxId={index} />
          ) : (
            <div className="flex w-full items-center justify-between rounded-lg border bg-gray-50 p-3 text-center text-sm font-medium text-gray-900">
              <div className="flex items-center">
                <CheckboxInput
                  checked={checkbox.isChecked}
                  id={`checkbox-${index}`}
                  type="checkbox"
                  disabled
                  value=""
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-blue-500"
                />
                <CheckboxLable
                  htmlFor={`checkbox-${index}`}
                  className="ml-2 text-center text-sm font-medium text-gray-900"
                >
                  {checkbox.value}
                </CheckboxLable>
              </div>
              <div className="flex items-center">
                <button
                  type="button"
                  className="mr-2 text-xs text-black"
                  onClick={() => updateCheckbox(index)}
                >
                  수정
                </button>
                <button
                  className="text-xs text-red-400"
                  type="button"
                  onClick={() => deleteCheckbox(index)}
                >
                  &times;
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Checkboxs
