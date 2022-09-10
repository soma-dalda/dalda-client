import React from 'react'
import { Question } from '@/type'
import TemplateOptionQuestion from '../blocks/TemplateOptionQuestion'
import TemplateDescriptionQuestion from '../blocks/TemplateDescriptionQuestion'

const Questions = ({ content }: { content: Question[] }) => {
  return (
    <>
      {content.map((question, i) =>
        question.type === 'option' ? (
          <TemplateOptionQuestion index={i} key={`option-${+i}`} />
        ) : (
          <TemplateDescriptionQuestion index={i} key={`description-${+i}`} />
        )
      )}
    </>
  )
}

export default Questions
