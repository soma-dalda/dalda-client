import { Question } from '@/type'
import React, { useCallback, useState } from 'react'
import QuestionOption from '../atoms/Option'

type Props = {
  handleClickAddButton: <T extends Question['type']>(type: T) => void
}

const QuestionAddForm = ({ handleClickAddButton }: Props) => {
  const [type, setType] = useState<Question['type']>('singleObjective')

  const handleSelectChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement> & { target: { value: Question['type'] } }) => {
      setType(e.target.value)
    },
    []
  )

  return (
    <section className="flex w-full gap-5 pt-4">
      <select value={type} onChange={handleSelectChange} className="w-full rounded-xl border">
        <QuestionOption value="singleObjective">선택형</QuestionOption>
        <QuestionOption value="subjective">입력형</QuestionOption>
      </select>
      <button
        onClick={() => handleClickAddButton(type)}
        className="w-24 rounded-xl bg-point-700 p-3 text-white"
        type="button"
      >
        추가
      </button>
    </section>
  )
}

export default QuestionAddForm
