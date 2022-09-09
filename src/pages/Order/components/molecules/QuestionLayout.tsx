import React, { PropsWithChildren } from 'react'

type Props = {
  title?: string
}

const QuestionLayout = ({ title, children }: PropsWithChildren<Props>) => {
  return (
    <div className="mt-10 flex w-full flex-col gap-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      {children}
    </div>
  )
}

export default QuestionLayout
