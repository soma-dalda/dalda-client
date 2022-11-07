import { Anchor } from '@/components/atoms'
import React, { PropsWithChildren } from 'react'

type Props = {
  icon?: React.ReactNode
  to?: string | null
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

const MenuListItem = ({ icon, to, children, onClick }: PropsWithChildren<Props>) => {
  if (!to) {
    return null
  }

  return (
    <li className="w-full border-b py-4 hover:bg-gray-100">
      <Anchor onClick={onClick} href={to} className="flex w-fit items-center gap-4">
        {icon}
        <span className="flex items-center text-sm text-grayScale-800 ">{children}</span>
      </Anchor>
    </li>
  )
}

export default MenuListItem
