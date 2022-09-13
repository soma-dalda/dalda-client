import { Anchor } from '@/components/atoms'
import React, { PropsWithChildren } from 'react'

type Props = {
  icon?: React.ReactNode
  to?: string | null
}

const MenuListItem = ({ icon, to, children }: PropsWithChildren<Props>) => {
  if (!to) {
    return null
  }

  return (
    <li className="w-full border-b py-4">
      <Anchor href={to} className="flex w-fit items-center gap-4">
        {icon}
        <span className="flex items-center text-sm text-grayScale-800 ">{children}</span>
      </Anchor>
    </li>
  )
}

export default MenuListItem
