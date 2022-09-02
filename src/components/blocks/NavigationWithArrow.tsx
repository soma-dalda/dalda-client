import LeftArrowTailIcon from '@/components/icons/LeftArrowTailIcon'
import React, { PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  save?: boolean
  onClickSaveButton?: () => void
  isLoading?: boolean
}

const NavigationWithArrow = ({
  children,
  onClickSaveButton,
  save = true,
  isLoading,
}: PropsWithChildren<Props>) => {
  const navigate = useNavigate()
  return (
    <nav className="flex w-full justify-between">
      <div className="flex items-center gap-[10px]">
        <LeftArrowTailIcon className="h-5 w-5 cursor-pointer" onClick={() => navigate(-1)} />
        <div className="font-bold">{children}</div>
      </div>
      {save && (
        <button
          type="button"
          onClick={onClickSaveButton}
          disabled={isLoading}
          className={`cursor-pointer ${
            isLoading ? 'cursor-not-allowed text-grayScale-400' : 'text-brand-500'
          }`}
        >
          {isLoading ? '진행중' : '저장'}
        </button>
      )}
    </nav>
  )
}

export default NavigationWithArrow
