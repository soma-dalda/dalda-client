import CakeCircleIcon from '@/components/molecules/icons/CakeCircleIcon'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  orderStatus: string
  orderTitle: string
  date: string
  id: string
}

const Message = ({ orderStatus, orderTitle, date, id }: Props) => {
  return (
    <Link
      to={id}
      className="group flex cursor-pointer items-center justify-between border-b border-dotted py-4 px-4 visited:text-gray-500 hover:bg-gray-200"
    >
      <div className="flex w-full items-center gap-5">
        <CakeCircleIcon className="h-8 w-8 group-visited:fill-gray-500" />
        <div>
          <h4 className="font-medium text-brand-500 group-visited:text-gray-500">{orderStatus}</h4>
          <p className="text-sm">{orderTitle}</p>
        </div>
      </div>
      <p className="w-[40px] text-sm">{date}</p>
    </Link>
  )
}

export default Message
