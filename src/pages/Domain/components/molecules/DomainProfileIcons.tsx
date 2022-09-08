import { InstagramIcon } from '@/components'
import { Anchor } from '@/components/atoms'
import InfoIcon from '@/components/molecules/icons/InfoIcon'
import KakaoIcon from '@/components/molecules/icons/KakaoIcon'
import { User } from '@/type'
import React from 'react'

type Props = {
  instagramLink?: string | null
  qnaLink?: string | null
  etcLinks?: User['etcLinks'] | null
}

const DomainProfileIcons = ({ instagramLink, qnaLink, etcLinks }: Props) => {
  return (
    <div className="mt-6 flex justify-center gap-3">
      <Anchor href={instagramLink ?? ''}>
        <InstagramIcon className="cursor-pointer" />
      </Anchor>
      <Anchor href={qnaLink ?? ''}>
        <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border">
          <KakaoIcon className="h-5 w-5" />
        </span>
      </Anchor>
      <span className="group relative" tabIndex={-1}>
        <InfoIcon className="cursor-pointer" />
        <div className="absolute left-[calc(100%+4px)] top-0 hidden w-[70px] animate-fade-in-down flex-col items-center justify-center gap-2 rounded-lg border bg-white p-3 text-xs opacity-95 group-hover:flex group-focus:flex group-active:flex">
          {etcLinks?.map(({ title, link }) => (
            <span key={title}>
              <Anchor className="w-fit" href={link ?? ''}>
                {title}
              </Anchor>
            </span>
          ))}
        </div>
      </span>
    </div>
  )
}

export default DomainProfileIcons
