import React, { PropsWithChildren } from 'react'

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  active?: boolean
}

const getActiveStyle = (active?: boolean) => {
  return active ? 'bg-brand-500' : 'bg-brand-300'
}

const OrderBottom = ({ onClick, active, children }: PropsWithChildren<Props>) => {
  return (
    <button
      onClick={onClick}
      disabled={!active}
      className={`${getActiveStyle(
        active
      )} mt-5 w-full rounded-xl p-4 text-white hover:bg-brand-300`}
      type="button"
    >
      {children}
    </button>
  )
}

export default OrderBottom
