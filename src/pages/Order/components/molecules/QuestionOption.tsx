import { OptionQuestionDetailType } from '@/type'
import React from 'react'
import QuestionLayout from './QuestionLayout'

type Props = {
  questionTitle?: string
  answer: string[]
  options?: string[] | null
  handleChangeOption: React.ChangeEventHandler<HTMLInputElement>
  detailType: OptionQuestionDetailType
  img?: string
}

const QuestionOption = ({
  questionTitle,
  options,
  answer,
  img,
  detailType,
  handleChangeOption,
}: Props) => {
  return (
    <QuestionLayout title={questionTitle}>
      <img src={img} alt={`${questionTitle}이미지`} />
      {options?.map((option, index) => (
        <label
          key={`option-${+index}`}
          htmlFor={`option-${+index}`}
          className="flex w-full justify-between rounded-xl border bg-white p-3"
        >
          <div className="flex gap-3">
            <input
              name={questionTitle}
              type={detailType === 'singleObjective' ? 'radio' : 'checkbox'}
              id={`option-${+index}`}
              data-id={index}
              value={option}
              checked={answer.includes(option)}
              onChange={handleChangeOption}
            />
            <span>{option}</span>
          </div>
        </label>
      ))}
    </QuestionLayout>
  )
}

export default QuestionOption
