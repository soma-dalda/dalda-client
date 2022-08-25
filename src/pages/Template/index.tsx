import { useAppDispatch, useAppSelector } from '@/store/config'
import React, { useCallback } from 'react'
import { useParams } from 'react-router-dom'

import TemplateBottom from './components/TemplateBottom'
import TemplateDescriptionQuestion from './components/TemplateDescriptionQuestion'
import TemplateHeader from './components/TemplateHeader'
import TemplateHeaderInput from './components/TemplateHeaderInput'
import TemplateOptionQuestion from './components/TemplateOptionQuestion'
import { addQuestion, updateTitle } from './slice/templateSlice'
import { Question } from './types'

const Questions = React.memo(({ content, id }: { content: Question[]; id: string }) => {
  return (
    <>
      {content.map((question, i) =>
        question.type === 'option' ? (
          <TemplateOptionQuestion id={id} index={i} key={`option-${+i}`} />
        ) : (
          <TemplateDescriptionQuestion id={id} index={i} key={`description-${+i}`} />
        )
      )}
    </>
  )
})

const Template = () => {
  const { id } = useParams()
  const templates = useAppSelector((state) => state.template)
  const template = templates.find((v) => v.id === id)
  const dispatch = useAppDispatch()

  if (!id) {
    return null
  }

  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateTitle({ id, title: e.target.value }))
    },
    [id]
  )

  const handleClickAddButton = useCallback(
    (type: 'option' | 'description') => {
      dispatch(addQuestion({ id, type }))
    },
    [id]
  )

  console.log(template)

  return (
    <div className="relative flex min-h-screen w-full flex-col justify-between pt-4">
      <main className="px-2">
        {/* 주문서 헤더 */}
        <TemplateHeader>{template?.title}</TemplateHeader>
        {/* 주문서 이름 작성 */}
        <TemplateHeaderInput
          value={template?.title}
          onChange={handleTitleChange}
          placeholder="작성중인 주문서 이름을 정해주세요"
        >
          주문서 이름
        </TemplateHeaderInput>
        {/* 질문 들 */}
        <Questions id={id} content={template?.content ?? []} />
      </main>
      {/* 주문서 바텀 */}
      <TemplateBottom handleClickAddButton={handleClickAddButton} />
    </div>
  )
}

export default Template
