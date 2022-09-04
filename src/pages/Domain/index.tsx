import React from 'react'
import { Layout } from '@/components'
import { Navigation } from '@/components/blocks'

import useError from '@/hooks/useError'
import { useModal } from '@jaewoong2/modal'
import useGetCompanyRequest from './hooks/useGetCompanyRequest'
import DomainProfileImage from './components/atoms/DomainProfileImage'
import DomainProfileTitle from './components/atoms/DomainProfileTitle'
import DomainProfileDescription from './components/atoms/DomainProfileDescription'
import DomainProfileLocation from './components/atoms/DomainProfileLocation'
import DomainProfileIcons from './components/atoms/DomainProfileIcons'
import DomainProfileHours from './components/atoms/DomainProfileHours'
import useGetTemplates from './hooks/useGetTemplates'
import DomainTemplates from './components/atoms/DomainTemplates'
import BusinessHourMessage from './components/atoms/BusinessHourMessage'

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

  const { show, hide } = useModal('text', {
    header: null,
    description: null,
    modalWidth: '300px',
    message: <BusinessHourMessage businessHours={company?.businessHours} />,
    buttonText: '확인',
    buttonType: 'normal',
    onClickButton: () => {
      hide()
    },
  })

  return (
    <Layout
      navigtaion={<Navigation />}
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
      <DomainProfileImage src={company?.profileImage ?? ''} />
      <DomainProfileTitle>{company?.companyName}</DomainProfileTitle>
      <DomainProfileDescription>{company?.companyIntroduction}</DomainProfileDescription>
      <DomainProfileLocation>{company?.companyLocation}</DomainProfileLocation>
      <DomainProfileIcons
        etcLinks={company?.etcLinks}
        instagramLink={company?.instagramLink}
        qnaLink={company?.qnaLink}
      />
      <DomainProfileHours onClick={show}>영업시간 확인하기</DomainProfileHours>
      <DomainTemplates templates={templates} />
    </Layout>
  )
}

export default Domain
