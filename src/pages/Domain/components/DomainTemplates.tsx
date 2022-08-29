import { SliceCakeIcon } from '@/components'
import CakeIcon from '@/components/icons/CakeIcon'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  templates?: { id: string; title: string }[]
}

const DomainTemplates = ({ templates }: Props) => {
  if (!templates) {
    return null
  }

  if (templates?.length === 0) {
    return null
  }

  return (
    <div className="mt-6 flex w-full flex-col gap-[15px]">
      <Link
        to={templates?.[0]?.id ?? ''}
        className="flex w-full cursor-pointer gap-[15px] rounded-xl border bg-brand-500 p-4 text-white hover:bg-brand-300"
      >
        <span>
          <CakeIcon />
        </span>
        <span className="flex items-center text-sm font-semibold">{templates?.[0].title}</span>
      </Link>
      {templates?.slice(1)?.map((template) => (
        <Link
          to={template.id}
          className="flex w-full cursor-pointer gap-[15px] rounded-xl border border-brand-300 p-4 hover:bg-brand-300"
        >
          <span>
            <SliceCakeIcon />
          </span>
          <span className="flex items-center text-sm font-semibold text-brand-500">
            {template.title}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default DomainTemplates
