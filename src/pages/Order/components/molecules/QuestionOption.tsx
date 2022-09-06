import { OptionQuestionDetailType } from '@/type'
import React from 'react'
import QuestionLayout from './QuestionLayout'

type Props = {
  questionTitle?: string
  answer: string
  options?: string[] | null
  handleChangeOption: React.ChangeEventHandler<HTMLInputElement>
  detailType: OptionQuestionDetailType
  checked: number[]
}

const QuestionOption = ({
  questionTitle,
  options,
  answer,
  detailType,
  handleChangeOption,
  checked,
}: Props) => {
  return (
    <QuestionLayout title={questionTitle}>
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
              checked={
                detailType === 'multiObjective' ? checked.includes(index) : answer.includes(option)
              }
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
