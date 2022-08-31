import React from 'react'
import { Layout } from '@/components'
import { Navigation } from '@/components/blocks'

import useError from '@/hooks/useError'
import useGetCompanyRequest from './hooks/useGetCompanyRequest'
import DomainProfileImage from './components/DomainProfileImage'
import DomainProfileTitle from './components/DomainProfileTitle'
import DomainProfileDescription from './components/DomainProfileDescription'
import DomainProfileLocation from './components/DomainProfileLocation'
import DomainProfileIcons from './components/DomainProfileIcons'
import DomainProfileHours from './components/DomainProfileHours'
import useGetTemplates from './hooks/useGetTemplates'
import DomainTemplates from './components/DomainTemplates'

const Domain = () => {
  const { dispatchUpdateError } = useError()

  const { data: company } = useGetCompanyRequest({
    onError: (err) => {
      dispatchUpdateError(err.response?.data.error.message)
    },
  })

  const { data: templates } = useGetTemplates(
    { companyId: company?.id },
    {
      onError: (err) => {
        dispatchUpdateError(err.response?.data.error.message)
      },
    }
  )

  return (
    <Layout
      navigateion={<Navigation />}
      bottom={
        <div className="flex w-full items-center justify-center px-4">
          <button
            type="button"
            className="w-full rounded-xl bg-point-700 p-4 text-white hover:bg-point-500"
          >
            주문서 수정하기
          </button>
        </div>
      }
    >
      <DomainProfileImage src={company?.profileImage} />
      <DomainProfileTitle>{company?.companyName}</DomainProfileTitle>
      <DomainProfileDescription>{company?.companyIntroduction}</DomainProfileDescription>
      <DomainProfileLocation>{company?.companyLocation}</DomainProfileLocation>
      <DomainProfileIcons
        etcLinks={company?.etcLinks}
        instagramLink={company?.instagramLink}
        qnaLink={company?.qnaLink}
      />
      <DomainProfileHours
        onClick={() => {
          console.log(company?.businessHours)
        }}
      >
        영업시간 확인하기
      </DomainProfileHours>
      <DomainTemplates templates={templates} />
    </Layout>
  )
}

export default Domain
