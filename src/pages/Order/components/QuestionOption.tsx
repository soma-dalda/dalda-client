import React from 'react'

type Props = {
  questionTitle: string
  options?: string[]
  handleChangeOption: React.ChangeEventHandler<HTMLInputElement>
}

const QuestionOption = ({ questionTitle, options, handleChangeOption }: Props) => {
  return (
    <div className="mt-10 flex flex-col gap-4">
      <h2 className="mb-20 text-xl font-semibold">{questionTitle}</h2>
      {options?.map((option, index) => (
        <label
          key={`option-${+index}`}
          htmlFor={`option-${+index}`}
          className="flex w-full justify-between rounded-xl border bg-white p-3"
        >
          <div className="flex gap-3">
            <input
              name="form"
              type="radio"
              id={`option-${+index}`}
              value={option}
              onChange={handleChangeOption}
            />
            <span>{option}</span>
          </div>
        </label>
      ))}
    </div>
  )
}

export default QuestionOption
