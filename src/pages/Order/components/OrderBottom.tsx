import React, { PropsWithChildren } from 'react'

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  actvie?: boolean
}

const OrderBottom = ({ onClick, actvie, children }: PropsWithChildren<Props>) => {
  return (
    <section className="flex w-full gap-5 border-t bg-white px-2 pb-2 pt-2">
      <button
        onClick={onClick}
        className={`${
          actvie ? 'bg-brand-500' : 'bg-brand-300'
        } w-full rounded-xl p-4 text-white hover:bg-brand-300`}
        type="button"
      >
        {children}
      </button>
    </section>
  )
}

export default OrderBottom
