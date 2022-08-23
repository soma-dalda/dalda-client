import useInput from '@/features/EditForm/hooks/useInput'
import useUploadImage from '@/features/EditForm/hooks/useUploadImage'
import FormImageUpload from '@/features/EditTemplate/components/FormImageUpload'
import React, { useState } from 'react'
import TemplateHeader from '../TemplateHeader'

// type Props = {
//   isMulti?: boolean
// }

const DescriptionTemplate = () => {
  const [isOpen, setIsOpen] = useState(true)
  const { handleUplodaImage, imgData } = useUploadImage()
  const [title, , onChangeTitle] = useInput()
  const [type, setType] = useState<string>()

  return (
    <div className="m-2 flex flex-col rounded-md border">
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
            <input
              className="mt-4 w-full border-b px-2 py-1 text-sm placeholder:text-sm disabled:bg-transparent"
              placeholder="입력하세요."
              disabled
            />
          </div>
          <FormImageUpload handleUplodaImage={handleUplodaImage} imgData={imgData} />
        </div>
      )}
    </div>
  )
}

export default DescriptionTemplate
