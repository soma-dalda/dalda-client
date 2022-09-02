import { Layout } from '@/components'
import ActiveLink from '@/components/atoms/ActiveLink'
import { NavigationWithArrow } from '@/components/blocks'
import React, { PropsWithChildren } from 'react'
import { useParams } from 'react-router-dom'
import useCompany from '../../hooks/useCompany'
import FormNavigationWithDivider from '../molecules/FormNavigationWithDivider'

const EditLayout = ({ children }: PropsWithChildren) => {
  const params = useParams()
  const { handleSaveButtonClick, isLoading } = useCompany()

  return (
    <Layout
      navigateion={
        <NavigationWithArrow isLoading={isLoading} onClickSaveButton={handleSaveButtonClick}>
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
