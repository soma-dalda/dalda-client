import React, { useEffect } from 'react'
import PlusCircleIcon from '@/components/icons/PlusCircleIcon'
import useHandleTemplate from '@/features/EditTemplate/hooks/useHandleTemplate'
import HeaderWithBackButton from '@/components/HeaderWithBackButton'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import TemplatesState from '@/features/EditTemplate/recoil/atoms/templatesState'
import Question from './components/Question'

const EditTemplate = () => {
  const { onChangeType, addTemplate, template, type } = useHandleTemplate()
  const setTemplates = useSetRecoilState(TemplatesState)
  const templates = useRecoilValue(TemplatesState)

  useEffect(() => {
    console.log(templates)
  }, [templates])

  return (
    <div className="flex w-full flex-col">
      <HeaderWithBackButton>내 주문서 관리</HeaderWithBackButton>
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
      {template?.map((question, index) => (
        <Question key={`${question.type}-${+index}`} type={question.type} index={index} />
      ))}
      <button
        onClick={() => {
          setTemplates((prev) => [...prev, template])
        }}
        type="button"
        className="m-2 rounded-lg border bg-blue-500 p-2 text-white hover:bg-blue-400"
      >
        저장하기
      </button>
    </div>
  )
}

export default EditTemplate
