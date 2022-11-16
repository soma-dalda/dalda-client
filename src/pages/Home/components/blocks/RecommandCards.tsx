import useMounted from '@/hooks/useMounted'
import React, { useRef } from 'react'
import { useDraggable } from 'react-use-draggable-scroll'
import useGetCompanies from '../../hooks/useGetCompanies'
import Card from '../molecules/Card'

type Props = {
  title?: string
}

const RecommandCards = ({ title }: Props) => {
  const isMounted = useMounted()
  const { data: companies, isSuccess } = useGetCompanies()

  const ref = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>
  const { events } = useDraggable(ref, { isMounted: isMounted ? isSuccess : false })

  return (
    <div className="mt-7 flex w-full flex-col gap-5 p-3 text-xl font-semibold">
      <h3>{title}</h3>
      <div
        {...events}
        ref={ref}
        className="hidden-scroll relative flex w-full gap-4 overflow-x-scroll overflow-y-scroll pb-5"
      >
        {companies?.map((company) => (
          <Card
            key={company.companyName}
            companyDomain={encodeURIComponent(company.companyDomain ?? '')}
            companyName={company.companyName}
            profileImage={company.profileImage}
          />
        ))}
      </div>
    </div>
  )
}

export default RecommandCards
