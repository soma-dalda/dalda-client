import CheckboxControl from '@/features/EditTemplate/components/CheckboxControl'
import CheckboxAddButton from '@/features/EditTemplate/components/CheckboxAddButton'
import React, { useCallback, useState } from 'react'
import Checkboxs from '@/features/EditTemplate/components/Checkboxs'
import { Option } from '@/features/EditTemplate/types'
import useUploadImage from '@/features/EditForm/hooks/useUploadImage'
import FormImageUpload from '@/features/EditTemplate/components/FormImageUpload'
import useHandleTemplate from '@/features/EditTemplate/hooks/useHandleTemplate'
import TemplateDeleteButton from '@/features/EditTemplate/components/TemplateDeleteButton'
import TemplateHeader from '../TemplateHeader'

type Props = {
  checkboxType: Option
  index: number
}

const CheckboxQuestion = ({ checkboxType, index }: Props) => {
  const [isOpen, setIsOpen] = useState(true)
  const { handleUplodaImage, imgData } = useUploadImage()
  const { deleteTemplate, updateDetailType, setQuestion, template } = useHandleTemplate()

  const checkboxs = template?.[index]?.options
  const setCheckboxs = useCallback((callback: (params: string[]) => string[]) => {
    setQuestion(index, (prev) => {
      return {
        ...prev,
        options: callback(prev?.options ?? []),
      }
    })
  }, [])

  const handleChangeTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(index, (prev) => {
      return {
        ...prev,
        question: e.target.value,
      }
    })
  }, [])

  return (
    <CheckboxControl
      checkboxs={checkboxs}
      setCheckboxs={setCheckboxs}
      className="relative m-2 mt-6 flex flex-col rounded-md border"
    >
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
              value={checkboxType}
              onChange={updateDetailType(index)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-900"
            >
              <option value="singleObjective">단일선택</option>
              <option value="multiObjective">다중선택</option>
            </select>
          </div>
          <Checkboxs templateIndex={index} />
          <FormImageUpload handleUplodaImage={handleUplodaImage} imgData={imgData} />
          <CheckboxAddButton className="m-2 rounded-lg bg-gray-200 p-3 text-sm">
            옵션 추가하기
          </CheckboxAddButton>
        </div>
      )}
    </CheckboxControl>
  )
}

export default React.memo(CheckboxQuestion)
