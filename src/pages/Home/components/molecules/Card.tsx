import React from 'react'
import { Image } from '@/components/atoms'
import LogoColorIcon from '@/components/molecules/icons/LogoColorIcon'
import { Company } from '@/type'
import { Link } from 'react-router-dom'

type Props = Pick<Company, 'companyDomain' | 'companyName' | 'profileImage'>

const Card = ({ companyDomain, companyName, profileImage }: Props) => {
  return (
    <Link
      to={companyDomain ?? ''}
      className="flex w-32 cursor-pointer flex-col items-center gap-4 rounded-2xl bg-white p-5 shadow-md"
    >
      <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full border p-3">
        <Image
          src={profileImage}
          alt={`${companyName}-로고`}
          logoPlaceholder={<LogoColorIcon className="h-[50px] w-[50px]" />}
        />
      </div>
      <h4 className="text-base font-normal">{companyName}</h4>
    </Link>
  )
}

export default Card
