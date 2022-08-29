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
    <section className="flex w-full gap-5 border-t bg-white px-2 pb-2 pt-2">
      <button
        onClick={onClick}
        className={`${getActiveStyle(active)} w-full rounded-xl p-4 text-white hover:bg-brand-300`}
        type="button"
      >
        {children}
      </button>
    </section>
  )
}

export default OrderBottom
