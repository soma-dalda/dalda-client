import React from 'react'

type Props = {
  title: string
  onChangeTitle: React.ChangeEventHandler<HTMLInputElement>
  isOpen: boolean
  toggleOpen: () => void
}

const TemplateHeader = ({ isOpen, toggleOpen, title, onChangeTitle }: Props) => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex">
        <input
          className="m-2 border-b-[1px] p-2 text-sm text-gray-900 outline-gray-300"
          placeholder="타이틀"
          value={title}
          onChange={onChangeTitle}
        />
        <button className="text-xs text-gray-500" type="button" onClick={toggleOpen}>
          {isOpen ? '접기' : '열기'}
        </button>
      </div>
      <button type="button" className="m-2 text-xs text-gray-900 hover:text-gray-500">
        저장하기
      </button>
    </div>
  )
}

export default TemplateHeader
