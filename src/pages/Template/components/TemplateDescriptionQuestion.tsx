import React from 'react'
import useDescriptionQuestion from '../hooks/useDescriptionQuestion'
import QuestionDeleteButton from './QuestionDeleteButton'
// import QuestionDeleteButton from './QuestionDeleteButton'

type Props = {
  index: number
  id: string
}

const TemplateDescriptionQuestion = ({ id, index }: Props) => {
  const {
    descriptionQuestion,
    handleChangeQuestionTitle,
    handleCheckboxChange,
    handleDeleteButtonClick,
  } = useDescriptionQuestion({ index, id })

  return (
    <section className="mt-8 flex w-full flex-col">
      <span className="px-2.5 py-1 text-[0.9rem] text-gray-700">입력 사항</span>
      <div className="w-full rounded-xl border bg-white">
        <form className="relative flex w-full flex-col gap-6 p-3">
          {/* 질문 삭제 버튼 */}
          <QuestionDeleteButton onClick={handleDeleteButtonClick} />
          {/* 입력사항 타이틀 */}
          <input
            className="w-[90%] border-b p-2"
            placeholder="제목을 작성해주세요."
            value={descriptionQuestion?.question}
            onChange={handleChangeQuestionTitle}
          />
        </form>
      </div>
      <label
        htmlFor={`설명타입-${index}`}
        className="flex items-center justify-end gap-1 p-2 text-xs"
      >
        <input
          id={`설명타입-${index}`}
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={descriptionQuestion?.detailType === 'shortSubjective'}
        />
        <p>단답형</p>
      </label>
    </section>
  )
}

export default React.memo(TemplateDescriptionQuestion)
