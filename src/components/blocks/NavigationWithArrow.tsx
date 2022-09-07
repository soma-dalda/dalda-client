import LeftArrowTailIcon from '@/components/molecules/icons/LeftArrowTailIcon'
import React, { PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  button?: React.ReactNode
}

const NavigationWithArrow = ({ children, button }: PropsWithChildren<Props>) => {
  const navigate = useNavigate()
  return (
    <nav className="flex w-full justify-between">
      <div className="flex items-center gap-[10px]">
        <LeftArrowTailIcon className="h-5 w-5 cursor-pointer" onClick={() => navigate(-1)} />
        <div className="font-bold">{children}</div>
      </div>
      {button}
    </nav>
  )
}

export default NavigationWithArrow
