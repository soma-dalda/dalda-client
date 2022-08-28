import React, { PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'
import LeftArrowIcon from '../icons/LeftArrowIcon'

const HeaderWithBackButton = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate()

  return (
    <div className="m-2 grid grid-cols-3 items-center">
      <LeftArrowIcon onClick={() => navigate(-1)} cursor="pointer" />
      <h1 className="flex justify-center">{children}</h1>
    </div>
  )
}

export default HeaderWithBackButton
