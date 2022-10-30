import { Question } from '@/type'
import React from 'react'
import QuestionLayout from './QuestionLayout'

type Props = {
  name: string
  questionTitle?: string
  answer: string[]
  options?: string[] | null
  handleChangeOption: React.ChangeEventHandler<HTMLInputElement>
  detailType: Question['type']
  img?: string
}

const QuestionOption = ({
  name,
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
              name={name}
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
