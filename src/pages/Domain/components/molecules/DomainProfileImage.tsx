import { Image } from '@/components/atoms'
import LogoBlackIcon from '@/components/molecules/icons/LogoBlackIcon'
import React from 'react'

type Props = Omit<JSX.IntrinsicElements['img'], 'ref'>

const DomainProfileImage = ({ src, alt, ...props }: Props) => {
  return (
    <div className="flex aspect-square w-28 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-border-200">
      <Image src={src} alt={alt} logoPlaceholder={<LogoBlackIcon />} {...props} />
    </div>
  )
}

export default DomainProfileImage
