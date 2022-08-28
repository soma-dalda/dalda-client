import LeftArrowTailIcon from '@/components/icons/LeftArrowTailIcon'
import React, { PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  save?: boolean
  onClickSaveButton?: () => void
}

const TemplateHeader = ({ children, onClickSaveButton, save = true }: PropsWithChildren<Props>) => {
  const navigate = useNavigate()
  return (
    <nav className="flex w-full justify-between">
      <div className="flex items-center gap-[10px]">
        <LeftArrowTailIcon className="h-5 w-5 cursor-pointer" onClick={() => navigate(-1)} />
        <div className="font-bold">{children}</div>
      </div>
      {save && (
        <button type="button" onClick={onClickSaveButton} className="cursor-pointer text-brand-500">
          저장
        </button>
      )}
    </nav>
  )
}

export default TemplateHeader
