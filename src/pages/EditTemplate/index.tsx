import React from 'react'
import LeftArrowIcon from '@/components/icons/LeftArrowIcon'
import PlusCircleIcon from '@/components/icons/PlusCircleIcon'
import { useNavigate } from 'react-router-dom'
import useHandleTemplates from '@/features/EditTemplate/hooks/useHandleTemplates'
import Template from './components/Template'

const EditTemplate = () => {
  const navigation = useNavigate()
  const { onChangeType, addTemplate, templates, type } = useHandleTemplates()

  return (
    <div className="flex w-full flex-col">
      <div className="m-2 grid grid-cols-3 items-center">
        <LeftArrowIcon onClick={() => navigation(-1)} cursor="pointer" />
        <h1 className="flex justify-center">내 주문서 관리</h1>
      </div>
      <div className="flex items-center">
        <input
          className="ml-2 w-full rounded-xl border bg-gray-50 p-2 text-sm"
          placeholder="나만의 주문서"
        />
        <div className="m-2 flex w-fit gap-2 rounded-xl border p-2">
          <select value={type} onChange={onChangeType} className="text-sm text-gray-800">
            <option value="option">옵션형</option>
            <option value="description">설명형</option>
          </select>
          <PlusCircleIcon
            onClick={() => addTemplate()}
            className="cursor-pointer text-gray-800 hover:text-gray-500"
          />
        </div>
      </div>
      {templates?.map((template, index) => (
        <Template key={`${template.type}-${+index}`} type={template.type} index={index} />
      ))}
      <button
        type="button"
        className="m-2 rounded-lg border bg-blue-500 p-2 text-white hover:bg-blue-400"
      >
        저장하기
      </button>
    </div>
  )
}

export default EditTemplate
