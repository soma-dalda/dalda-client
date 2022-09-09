import { Layout } from '@/components'
import { ActiveLink } from '@/components/atoms'
import { NavigationWithArrow } from '@/components/blocks'
import useGetUser from '@/hooks/useGetUser'
import React from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import NavigationWithDivider from '../molecules/NavigationWithDivider'

const Orders = () => {
  const navigate = useNavigate()
  const params = useParams()

  const { data: user } = useGetUser({
    onSuccess: (data) => {
      if (params['*'] === '') {
        if (data.role === 'company') {
          navigate('company')
        }
        if (data.role === 'consumer') {
          navigate('consumer')
        }
      }
    },
  })

  return (
    <Layout navigtaion={<NavigationWithArrow to="/">주문 요청</NavigationWithArrow>}>
      {user?.role === 'company' && (
        <NavigationWithDivider
          buttons={[
            <ActiveLink active={params['*'] === 'company'} type="button" to="company">
              요청
            </ActiveLink>,
            <ActiveLink active={params['*'] === 'consumer'} type="button" to="consumer">
              응답
            </ActiveLink>,
          ]}
        />
      )}
      <Outlet />
    </Layout>
  )
}

export default Orders
