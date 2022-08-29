import React from 'react'
import QuestionLayout from './QuestionLayout'

type Props = {
  questionTitle?: string
  options?: string[] | null
  handleChangeOption: React.ChangeEventHandler<HTMLInputElement>
}

const QuestionOption = ({ questionTitle, options, handleChangeOption }: Props) => {
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
              type="radio"
              id={`option-${+index}`}
              value={option}
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
