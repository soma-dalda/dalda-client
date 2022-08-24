import React from 'react'

type Props = {
  title: string
  onChangeTitle: React.ChangeEventHandler<HTMLInputElement>
  isOpen: boolean
  toggleOpen: () => void
}

const TemplateHeader = ({ isOpen, toggleOpen, title, onChangeTitle }: Props) => {
  return (
    <div className="flex w-full justify-between gap-1">
      <input
        className="m-2 w-full border-b-[1px] p-2 text-sm text-gray-900 outline-gray-300"
        placeholder="타이틀"
        value={title}
        onChange={onChangeTitle}
      />
      <button className="mr-2 w-[40px] text-xs text-gray-500" type="button" onClick={toggleOpen}>
        {isOpen ? '접기' : '열기'}
      </button>
    </div>
  )
}

export default TemplateHeader
