import React from 'react'
import QuestionLayout from './QuestionLayout'

type Props = {
  questionTitle?: string
  handleChangeDescription: React.ChangeEventHandler
  description: string
}

const QuestionDescription = ({ questionTitle, handleChangeDescription, description }: Props) => {
  return (
    <QuestionLayout title={questionTitle}>
      <div className="flex gap-3">
        <textarea
          className="w-full resize-none rounded-xl border border-grayScale-500 bg-gray-100 p-3 text-gray-800"
          name={questionTitle}
          rows={10}
          id="description"
          value={description}
          onChange={handleChangeDescription}
        />
      </div>
    </QuestionLayout>
  )
}

export default QuestionDescription
