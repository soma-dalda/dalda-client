import React from 'react'
import QuestionLayout from './QuestionLayout'

type Props = {
  questionTitle?: string
  handleChangeDescription: React.ChangeEventHandler
  description: string[]
  img?: string
  name: string
}

const QuestionDescription = ({
  questionTitle,
  handleChangeDescription,
  description,
  img,
  name,
}: Props) => {
  return (
    <QuestionLayout title={questionTitle}>
      <figure className="h-auto w-[200px]">
        {img && <img className="h-auto w-full" src={img} alt={`${questionTitle}이미지`} />}
        {!img && <div className="mt-20" />}
      </figure>
      <div className="flex w-full flex-col gap-3">
        <textarea
          className="w-full resize-none rounded-xl border border-grayScale-500 bg-gray-100 p-3 text-gray-800"
          name={name}
          rows={10}
          id="description"
          value={description[0]}
          onChange={handleChangeDescription}
        />
      </div>
    </QuestionLayout>
  )
}

export default QuestionDescription
