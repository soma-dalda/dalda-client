import useInput from '@/features/EditForm/hooks/useInput'
import useUploadImage from '@/features/EditForm/hooks/useUploadImage'
import FormImageUpload from '@/features/EditTemplate/components/FormImageUpload'
import TemplateDeleteButton from '@/features/EditTemplate/components/TemplateDeleteButton'
import useHandleTemplates from '@/features/EditTemplate/hooks/useHandleTemplates'
import { Description } from '@/features/EditTemplate/types'
import React, { useState } from 'react'
import TemplateHeader from '../TemplateHeader'

type Props = {
  type?: Description
  index: number
}

const DescriptionTemplate = ({ type: descriptionType, index }: Props) => {
  const [isOpen, setIsOpen] = useState(true)
  const { handleUplodaImage, imgData } = useUploadImage()
  const [title, , onChangeTitle] = useInput()
  const { deleteTemplate, updateDetailType } = useHandleTemplates()

  return (
    <div className="relative m-2 mt-6 flex flex-col rounded-md border">
      <TemplateDeleteButton onClick={() => deleteTemplate(index)} />
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
              value={descriptionType}
              onChange={updateDetailType(index)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-900"
            >
              <option value="ShortDescription">단답형</option>
              <option value="LongDescription">장문형</option>
            </select>
            {descriptionType === 'LongDescription' ? (
              <textarea
                className="mt-4 block w-full rounded-lg border bg-gray-50 p-2 text-sm text-gray-900"
                disabled
                rows={6}
                placeholder="입력하세요."
              />
            ) : (
              <input
                className="mt-4 w-full border-b px-2 py-1 text-sm placeholder:text-sm disabled:bg-transparent"
                placeholder="입력하세요."
                disabled
              />
            )}
          </div>
          <FormImageUpload handleUplodaImage={handleUplodaImage} imgData={imgData} />
        </div>
      )}
    </div>
  )
}

export default React.memo(DescriptionTemplate)
