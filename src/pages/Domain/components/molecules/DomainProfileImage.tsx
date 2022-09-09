import { Image } from '@/components/atoms'
import LogoBlackIcon from '@/components/molecules/icons/LogoBlackIcon'
import LogoColorIcon from '@/components/molecules/icons/LogoColorIcon'
import React from 'react'

type Props = Omit<JSX.IntrinsicElements['img'], 'ref'> & {
  isLoading?: boolean
}

const DomainProfileImage = ({ src, alt, isLoading, ...props }: Props) => {
  return (
    <div className="flex aspect-square w-28 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-border-200">
      {!isLoading && <Image src={src} alt={alt} logoPlaceholder={<LogoBlackIcon />} {...props} />}
      {isLoading && <LogoColorIcon className="animate-pulse" />}
    </div>
  )
}

export default DomainProfileImage
