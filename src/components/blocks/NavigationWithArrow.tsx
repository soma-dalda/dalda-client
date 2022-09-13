import LeftArrowTailIcon from '@/components/molecules/icons/LeftArrowTailIcon'
import React, { PropsWithChildren } from 'react'
import { To, useNavigate } from 'react-router-dom'

type Props = {
  button?: React.ReactNode
  to?: To
}

const NavigationWithArrow = ({ children, button, to }: PropsWithChildren<Props>) => {
  const navigate = useNavigate()
  return (
    <nav className="flex w-full justify-between">
      <div className="flex items-center gap-[10px]">
        <LeftArrowTailIcon
          className="h-5 w-5 cursor-pointer"
          onClick={() => (to ? navigate(to) : navigate(-1))}
        />
        <div className="font-bold">{children}</div>
      </div>
      {button}
    </nav>
  )
}

export default NavigationWithArrow
