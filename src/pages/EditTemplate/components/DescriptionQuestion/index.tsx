import useUploadImage from '@/features/EditForm/hooks/useUploadImage'
import FormImageUpload from '@/features/EditTemplate/components/FormImageUpload'
import TemplateDeleteButton from '@/features/EditTemplate/components/TemplateDeleteButton'
import useHandleTemplate from '@/features/EditTemplate/hooks/useHandleTemplate'
import { Description } from '@/features/EditTemplate/types'
import React, { useCallback, useState } from 'react'
import TemplateHeader from '../TemplateHeader'

type Props = {
  type?: Description
  index: number
}

const DescriptionQuestion = ({ type: descriptionType, index }: Props) => {
  const [isOpen, setIsOpen] = useState(true)
  const { handleUplodaImage, imgData } = useUploadImage()
  const { deleteTemplate, updateDetailType, setQuestion, template } = useHandleTemplate()

  const handleChangeTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(index, (prev) => {
      return {
        ...prev,
        question: e.target.value,
      }
    })
  }, [])

  return (
    <div className="relative m-2 mt-6 flex flex-col rounded-md border">
      <TemplateDeleteButton onClick={() => deleteTemplate(index)} />
      <TemplateHeader
        title={template?.[index].question ?? ''}
        onChangeTitle={handleChangeTitle}
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
              <option value="shortSubjective">단답형</option>
              <option value="longSubjective">장문형</option>
            </select>
            {descriptionType === 'longSubjective' ? (
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

export default React.memo(DescriptionQuestion)
