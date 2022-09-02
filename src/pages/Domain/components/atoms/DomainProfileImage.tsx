import LogoBlackIcon from '@/components/icons/LogoBlackIcon'
import React from 'react'

type Props = Omit<JSX.IntrinsicElements['img'], 'src'> & { src?: string | null }

const DomainProfileImage = ({ src, alt, ...props }: Props) => {
  return (
    <div className="flex aspect-square w-28 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-border-200">
      {src ? <img src={src} alt={alt} {...props} /> : <LogoBlackIcon />}
    </div>
  )
}

export default DomainProfileImage
