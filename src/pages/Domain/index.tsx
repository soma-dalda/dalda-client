import React from 'react'
import { Layout } from '@/components'
import { Navigation } from '@/components/blocks'

import { useModal } from '@jaewoong2/modal'
import { Link } from 'react-router-dom'
import useGetUser from '@/hooks/useGetUser'
import LoadingPage from '@/components/molecules/LoadingPage'
import useStatus from '@/hooks/useStatus'
import { AxiosError } from 'axios'
import useGetCompanyRequest from './hooks/useGetCompanyRequest'
import DomainProfileTitle from './components/molecules/DomainProfileTitle'
import DomainProfileDescription from './components/molecules/DomainProfileDescription'
import DomainProfileLocation from './components/molecules/DomainProfileLocation'
import DomainProfileIcons from './components/molecules/DomainProfileIcons'
import DomainProfileHours from './components/molecules/DomainProfileHours'
import useGetTemplates from './hooks/useGetTemplates'
import DomainTemplates from './components/molecules/DomainTemplates'
import BusinessHourMessage from './components/molecules/BusinessHourMessage'
import DomainProfileImageUpload from './components/blocks/DomainProfileImageUpload'
import DomainProfileImage from './components/molecules/DomainProfileImage'

const Domain = () => {
  const { data: user } = useGetUser()
  const { dispatchUpdateError } = useStatus()

  const { data: company, isLoading: companyLoading } = useGetCompanyRequest({
    onError: (err) => {
      if (err.status === AxiosError.ECONNABORTED) {
        dispatchUpdateError({ code: 400, message: err?.message })
      } else {
        dispatchUpdateError({ code: err?.code, message: err.response?.data?.error?.message })
      }
    },
  })

  const { data: templates, isLoading: templateLoading } = useGetTemplates(
    { companyId: company?.id },
    {
      onError: (err) => {
        if (err.status === AxiosError.ECONNABORTED) {
          dispatchUpdateError({ code: 400, message: err?.message })
        } else {
          dispatchUpdateError({ code: err?.code, message: err.response?.data?.error?.message })
        }
      },
      enabled: Boolean(company?.id),
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

  if (companyLoading || templateLoading) {
    return <LoadingPage />
  }

  return (
    <Layout
      navigtaion={<Navigation />}
      bottom={
        user?.id &&
        company?.id &&
        user.id === company?.id && (
          <div className="flex w-full items-center justify-center px-4">
            <Link
              to="templates"
              className="w-full rounded-xl bg-point-700 p-4 text-white hover:bg-point-500"
            >
              주문서 수정하기
            </Link>
          </div>
        )
      }
    >
      {company?.id === user?.id && <DomainProfileImageUpload src={company?.profileImage ?? ''} />}
      {company?.id !== user?.id && <DomainProfileImage src={company?.profileImage ?? ''} />}
      <DomainProfileTitle>{company?.companyName}</DomainProfileTitle>
      <DomainProfileDescription>{company?.companyIntroduction}</DomainProfileDescription>
      <DomainProfileLocation>{company?.companyLocation}</DomainProfileLocation>
      <DomainProfileIcons
        etcLinks={company?.etcLinks}
        instagramLink={company?.instaLink}
        qnaLink={company?.qnaLink}
      />
      <DomainProfileHours onClick={show}>영업시간 확인하기</DomainProfileHours>
      <DomainTemplates templateList={templates?.templateList} />
    </Layout>
  )
}

export default Domain
