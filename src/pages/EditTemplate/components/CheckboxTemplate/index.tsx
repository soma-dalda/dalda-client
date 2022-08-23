import CheckboxControl from '@/features/EditTemplate/components/CheckboxControl'
import CheckboxAddButton from '@/features/EditTemplate/components/CheckboxAddButton'
import React, { useState } from 'react'
import Checkboxs from '@/features/EditTemplate/components/Checkboxs'
import { Checkbox } from '@/features/EditTemplate/types'
import useUploadImage from '@/features/EditForm/hooks/useUploadImage'
import FormImageUpload from '@/features/EditTemplate/components/FormImageUpload'
import useInput from '@/features/EditForm/hooks/useInput'
import TemplateHeader from '../TemplateHeader'

const CheckboxTemplate = () => {
  const [checkboxs, setCheckBoxs] = useState<Checkbox[]>([])
  const [isOpen, setIsOpen] = useState(true)
  const { handleUplodaImage, imgData } = useUploadImage()
  const [title, , onChangeTitle] = useInput()
  const [type, setType] = useState<string>()

  return (
    <CheckboxControl
      checkboxs={checkboxs}
      setCheckboxs={setCheckBoxs}
      className="m-2 flex flex-col rounded-md border"
    >
      <TemplateHeader
        title={title}
        onChangeTitle={onChangeTitle}
        isOpen={isOpen}
        toggleOpen={() => setIsOpen((prev) => !prev)}
      />
      {isOpen && (
        <div className="flex animate-fade-in-down flex-col">
          <div className="p-2">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-900"
            >
              <option value="single">단답형</option>
              <option value="multi">장문형</option>
            </select>
          </div>
          <Checkboxs />
          <FormImageUpload handleUplodaImage={handleUplodaImage} imgData={imgData} />
          <CheckboxAddButton className="m-2 rounded-lg bg-gray-200 p-3 text-sm">
            옵션 추가하기
          </CheckboxAddButton>
        </div>
      )}
    </CheckboxControl>
  )
}

export default CheckboxTemplate
