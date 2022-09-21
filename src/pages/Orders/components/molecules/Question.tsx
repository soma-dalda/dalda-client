import { FormControl, FormLabel } from '@/components/compounds/Form/components'
import React from 'react'

type Props = {
  question: string
  answer?: string[]
}

const Question = ({ question, answer }: Props) => {
  return (
    <FormControl isDisabled as="div" className="flex w-full flex-col ">
      <FormLabel className="cursor-text py-2 disabled:cursor-text">{question}</FormLabel>
      {answer?.map((ans) => (
        <div className="rounded-xl border bg-white p-3">{ans}</div>
      ))}
    </FormControl>
  )
}

export default Question
