import React from 'react'
import useOptionQuestion from '../hooks/useOptionQuestion'
import QuestionDeleteButton from './QuestionDeleteButton'

import QuestionOption from './QuestionOption'

type Props = {
  index: number
  id: string
}

const TemplateOptionQuestion = ({ id, index }: Props) => {
  const {
    handleChangeOption,
    handleChangeQuestionTitle,
    handleClickOptionDeleteButton,
    handleClickAddOptionButton,
    optionQuestion,
    handleDeleteButtonClick,
    handleCheckboxChange,
  } = useOptionQuestion({ index, id })

  return (
    <section className="mt-8 flex w-full flex-col">
      <span className="px-2.5 py-1 text-[0.9rem] text-gray-700">선택 사항</span>
      <div className="w-full rounded-xl border bg-white">
        <form className="relative flex w-full flex-col gap-6 p-3">
          {/* 질문 삭제 버튼 */}
          <QuestionDeleteButton onClick={handleDeleteButtonClick} />
          {/* 선택사항 타이틀 */}
          <input
            className="w-[90%] border-b p-2"
            placeholder="제목을 작성해주세요."
            onChange={handleChangeQuestionTitle}
            value={optionQuestion?.question}
          />
          {/* 선택사항 옵션 */}
          <div className="flex flex-col gap-3 text-[0.9rem]">
            {/* 개별 옵션 */}
            {optionQuestion?.options.map((option, i) => (
              <QuestionOption
                key={`-option-${+i}`}
                id={`옵션${i + 1}`}
                data-id={i}
                placeholder={`옵션${i + 1}`}
                value={option}
                onChange={handleChangeOption(i)}
              >
                <button
                  onClick={() => handleClickOptionDeleteButton(i)}
                  type="button"
                  className="text-brand-500"
                >
                  &times;
                </button>
              </QuestionOption>
            ))}
          </div>
          {/* 선택사항 옵션 추가 */}
          <button
            onClick={handleClickAddOptionButton}
            type="button"
            className="rounded-xl border p-3 hover:bg-gray-50"
          >
            옵션 추가
          </button>
        </form>
      </div>
      <label
        htmlFor={`옵션타입-${index}`}
        className="flex items-center justify-end gap-1 p-2 text-xs"
      >
        <input
          id={`옵션타입-${index}`}
          type="checkbox"
          checked={optionQuestion?.detailType === 'singleObjective'}
          onChange={handleCheckboxChange}
        />
        <p>단일선택</p>
      </label>
    </section>
  )
}

export default React.memo(TemplateOptionQuestion)
