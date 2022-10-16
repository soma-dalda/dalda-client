import React from 'react'
import useGetCompanies from '../../hooks/useGetCompanies'
import Card from '../molecules/Card'

type Props = {
  title?: string
}

const RecommandCards = ({ title }: Props) => {
  const { data: companies } = useGetCompanies()

  return (
    <div className="mt-7 flex w-full flex-col gap-5 p-3 text-xl font-semibold">
      <h3>{title}</h3>
      <div className="flex w-full gap-4 overflow-y-scroll pb-5">
        {companies?.map((company) => (
          <Card
            key={company.id}
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
