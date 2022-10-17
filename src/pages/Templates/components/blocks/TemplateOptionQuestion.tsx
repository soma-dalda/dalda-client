import { CancleButton } from '@/components/atoms'
import React from 'react'
import useTemplateActionContext from '../../hooks/useTemplateActionContext'
import useTemplateValueContext from '../../hooks/useTemplateValueContext'
import CheckBox from '../atoms/CheckBox'
import QuestionOption from '../molecules/QuestionOption'
import QuestionImageUpload from './QuestionImageUpload'

type Props = {
  index: number
}

const TemplateOptionQuestion = ({ index }: Props) => {
  const { contentList: content } = useTemplateValueContext()
  const {
    handleUpdateQuestionTitle,
    handleDeleteQuestion,
    handleUpdateOption,
    handleDeleteOption,
    handleAddOption,
    handleUpdateImage,
    handleUpdateDetailType,
    handleUpdateRequired,
  } = useTemplateActionContext()

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      handleUpdateDetailType({ contentIndex: index, detailType: 'singleObjective' })
    } else {
      handleUpdateDetailType({ contentIndex: index, detailType: 'multiObjective' })
    }
  }

  return (
    <section className="mt-8 flex w-full flex-col">
      <span className="flex justify-between px-2.5 py-1 text-[0.9rem] text-gray-700">
        <p>선택 사항</p>
        <QuestionImageUpload
          id={`Option-${index}-image`}
          handleContentImageUpdate={handleUpdateImage(index)}
        />
      </span>
      <div className="relative flex w-full flex-col gap-6 rounded-xl border bg-white p-3">
        {/* 질문 삭제 버튼 */}
        <CancleButton className="-top-3" onClick={() => handleDeleteQuestion(index)} />
        {/* 선택사항 타이틀 */}
        <input
          required
          className="w-[90%] border-b p-2"
          placeholder="제목을 작성해주세요."
          onChange={handleUpdateQuestionTitle(index)}
          value={content[index]?.question}
        />
        {/* 선택사항 옵션 */}
        <div className="flex flex-col gap-3 text-[0.9rem]">
          {/* 개별 옵션 */}
          {content[index]?.options?.map((option, i) => (
            <QuestionOption
              required
              key={`-option-${+i}`}
              id={`옵션${i + 1}`}
              data-id={i}
              placeholder={`옵션${i + 1}`}
              value={option}
              onChange={handleUpdateOption({ contentIndex: index, optionIndex: i })}
            >
              <button
                onClick={handleDeleteOption({ contentIndex: index, optionIndex: i })}
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
          onClick={() => handleAddOption(index)}
          type="button"
          className="rounded-xl border p-3 hover:bg-gray-50"
        >
          옵션 추가
        </button>
      </div>
      <div className="flex w-full justify-end">
        <CheckBox
          id={`필수값-${index}`}
          checked={content[index]?.required}
          onChange={handleUpdateRequired(index)}
        >
          필수 질문
        </CheckBox>
        <CheckBox
          id={`옵션타입-${index}`}
          checked={content[index]?.type === 'singleObjective'}
          onChange={handleCheckboxChange}
        >
          단일선택
        </CheckBox>
      </div>
    </section>
  )
}

export default React.memo(TemplateOptionQuestion)
