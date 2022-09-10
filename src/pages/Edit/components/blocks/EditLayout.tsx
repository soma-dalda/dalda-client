import { Layout } from '@/components'
import ActiveLink from '@/components/atoms/ActiveLink'
import { NavigationWithArrow } from '@/components/blocks'
import React, { PropsWithChildren } from 'react'
import { useParams } from 'react-router-dom'
import FormNavigationWithDivider from '../molecules/FormNavigationWithDivider'

type Props = {
  isLoading?: boolean
}

const EditLayout = ({ children, isLoading }: PropsWithChildren<Props>) => {
  const params = useParams()

  return (
    <Layout
      navigtaion={
        <NavigationWithArrow
          button={
            <button
              form="profile"
              type="submit"
              disabled={isLoading}
              className={`cursor-pointer ${
                isLoading ? 'cursor-not-allowed text-grayScale-400' : 'text-brand-500'
              }`}
            >
              {isLoading ? '진행중' : '저장'}
            </button>
          }
        >
          프로필 설정
        </NavigationWithArrow>
      }
    >
      <FormNavigationWithDivider
        buttons={[
          <ActiveLink active={params['*'] === ''} type="button" to="">
            프로필
          </ActiveLink>,
          <ActiveLink active={params['*'] === 'days'} type="button" to="days">
            날짜
          </ActiveLink>,
        ]}
      />
      {children}
    </Layout>
  )
}

export default EditLayout
