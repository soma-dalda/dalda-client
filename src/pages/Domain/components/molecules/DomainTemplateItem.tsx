import { SliceCakeIcon } from '@/components'
import CakeIcon from '@/components/molecules/icons/CakeIcon'
import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  to: string
  variant?: 'special' | 'normal'
  title?: string
}

const getVariantItemStyle = (variant: Props['variant']) => {
  if (variant === 'special') {
    return 'bg-brand-500 text-white'
  }
  return 'border border-brand-300'
}

const getVariantTitleStyle = (variant: Props['variant']) => {
  if (variant === 'special') {
    return ''
  }
  return 'text-brand-500'
}

const DomainTemplateItem = ({ to, variant, title }: Props) => {
  return (
    <Link
      to={to}
      className={clsx(
        'flex w-full cursor-pointer gap-[15px] rounded-xl p-4 hover:bg-brand-300',
        getVariantItemStyle(variant)
      )}
    >
      <span>{variant === 'special' ? <CakeIcon /> : <SliceCakeIcon />}</span>
      <span
        className={clsx('flex items-center text-sm font-semibold', getVariantTitleStyle(variant))}
      >
        {title}
      </span>
    </Link>
  )
}

export default DomainTemplateItem
