import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  active?: boolean
  to: string
}

const getActiveStyle = (active?: boolean) => {
  return active ? 'bg-brand-500' : 'bg-brand-300'
}

const OrderBottomLink = ({ to, active, children }: PropsWithChildren<Props>) => {
  return (
    <Link
      to={active ? to : ''}
      className={`${getActiveStyle(
        active
      )} mt-5 flex w-full items-center justify-center rounded-xl p-4 text-white hover:bg-brand-300`}
    >
      {children}
    </Link>
  )
}

export default OrderBottomLink
