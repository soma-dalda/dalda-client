import React from 'react'
import { Question } from '@/type'
import TemplateOptionQuestion from '../blocks/TemplateOptionQuestion'
import TemplateDescriptionQuestion from '../blocks/TemplateDescriptionQuestion'

const Questions = ({ content }: { content: Question[] }) => {
  return (
    <>
      {content.map((question, i) =>
        question.type === 'subjective' ? (
          <TemplateDescriptionQuestion index={i} key={`description-${+i}`} />
        ) : (
          <TemplateOptionQuestion index={i} key={`option-${+i}`} />
        )
      )}
    </>
  )
}

export default Questions
