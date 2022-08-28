import React from 'react'

type Props = {
  questionTitle: string
  handleChangeDescription: React.ChangeEventHandler<HTMLTextAreaElement>
  description: string
}

const QuestionDescription = ({ questionTitle, handleChangeDescription, description }: Props) => {
  return (
    <div className="mt-10 flex flex-col gap-4">
      <h2 className="mb-20 text-xl font-semibold">{questionTitle}</h2>
      <div className="flex gap-3">
        <textarea
          className="w-full resize-none rounded-xl border border-grayScale-500 bg-gray-100 p-3 text-gray-800"
          name="form"
          rows={10}
          id="description"
          value={description}
          onChange={handleChangeDescription}
        />
      </div>
    </div>
  )
}

export default QuestionDescription
