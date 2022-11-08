import React, { useEffect, useRef, useState } from 'react'
import LogoColorIcon from '@/components/molecules/icons/LogoColorIcon'
import { Company } from '@/type'
import { Link } from 'react-router-dom'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'

type Props = Pick<Company, 'companyDomain' | 'companyName' | 'profileImage'>

const Card = ({ companyDomain, companyName, profileImage }: Props) => {
  const [src, setSrc] = useState<string>('')
  const ref = useRef<HTMLImageElement | null>(null)
  const [entry, observer] = useIntersectionObserver(ref, {})

  useEffect(() => {
    if (entry?.isIntersecting) {
      setSrc(profileImage ?? '')
      observer.unobserve(entry.target)
    }
  }, [entry, observer, ref])

  return (
    <Link
      to={companyDomain ?? ''}
      className="flex w-32 cursor-pointer flex-col items-center gap-4 rounded-2xl bg-white p-5 shadow-md"
    >
      <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full border p-3">
        {profileImage ? (
          <img
            src={src}
            alt={`${companyName}`}
            ref={ref}
            className="flex items-center text-center align-middle text-sm"
            width="80px"
            height="80px"
          />
        ) : (
          <LogoColorIcon className="h-[50px] w-[50px]" />
        )}
      </div>
      <h4 className="text-base font-normal">{companyName}</h4>
    </Link>
  )
}

export default Card
