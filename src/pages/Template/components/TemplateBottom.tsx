import React, { useCallback, useState } from 'react'

type Props = {
  handleClickAddButton: <T extends 'description' | 'option'>(type: T) => void
}

const TemplateBottom = ({ handleClickAddButton }: Props) => {
  const [type, setType] = useState<'description' | 'option'>('option')

  const handleSelectChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement> & { target: { value: 'description' | 'option' } }) => {
      setType(e.target.value)
    },
    []
  )

  return (
    <section className="flex w-full gap-5 border-t bg-white px-5 pb-2 pt-2">
      <select value={type} onChange={handleSelectChange} className="w-full rounded-xl border">
        <option value="option">선택형</option>
        <option value="description">입력형</option>
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

export default TemplateBottom
