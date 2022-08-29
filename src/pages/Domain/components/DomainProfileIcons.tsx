import { InstagramIcon } from '@/components'
import InfoIcon from '@/components/icons/InfoIcon'
import KakaoIcon from '@/components/icons/KakaoIcon'
import React from 'react'

type Props = {
  instagramLink?: string | null
  qnaLink?: string | null
  etcLinks?: { [key: string]: string }[] | null
}

const DomainProfileIcons = ({ instagramLink, qnaLink, etcLinks }: Props) => {
  return (
    <div className="mt-6 flex justify-center gap-3">
      <a href={instagramLink ?? ''} target="_blank" rel="noreferrer">
        <InstagramIcon className="cursor-pointer" />
      </a>
      <a href={qnaLink ?? ''} target="_blank" rel="noreferrer">
        <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border">
          <KakaoIcon className="h-5 w-5" />
        </span>
      </a>
      <span className="group relative" tabIndex={-1}>
        <InfoIcon className="cursor-pointer" />
        <div className="absolute left-[calc(100%+4px)] top-0 hidden w-[70px] animate-fade-in-down flex-col items-center justify-center gap-2 rounded-lg border bg-white p-3 text-xs opacity-95 group-hover:flex group-focus:flex group-active:flex">
          {etcLinks?.map((value) =>
            Object.keys(value).map((key) => (
              <span>
                <a className="w-fit" href={qnaLink ?? ''} target="_blank" rel="noreferrer">
                  {key}
                </a>
              </span>
            ))
          )}
        </div>
      </span>
    </div>
  )
}

export default DomainProfileIcons
