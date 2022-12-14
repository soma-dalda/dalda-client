import React from 'react'
import { Layout } from '@/components'
import { ActiveLink } from '@/components/atoms'
import { NavigationWithArrow } from '@/components/blocks'
import useGetUser from '@/hooks/useGetUser'
import { COMPANY, MEMBER } from '@/type'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import NavigationWithDivider from '../molecules/NavigationWithDivider'

const Orders = () => {
  const navigate = useNavigate()
  const params = useParams()

  const { data: user } = useGetUser({
    onSuccess: (data) => {
      if (params['*'] === '') {
        if (data.role === COMPANY) {
          navigate('company')
        }
        if (data.role === MEMBER) {
          navigate('consumer')
        }
      }
    },
  })

  return (
    <Layout navigtaion={<NavigationWithArrow to="/">주문 요청</NavigationWithArrow>}>
      {user?.role === COMPANY && (
        <NavigationWithDivider
          buttons={[
            <ActiveLink active={params['*'] === 'company'} type="button" to="company">
              내 가게 주문
            </ActiveLink>,
            <ActiveLink active={params['*'] === 'consumer'} type="button" to="consumer">
              요청한 주문
            </ActiveLink>,
          ]}
        />
      )}
      {user?.role === MEMBER && (
        <NavigationWithDivider
          buttons={[
            <ActiveLink active={params['*'] === 'consumer'} type="button" to="consumer">
              요청한 주문
            </ActiveLink>,
          ]}
        />
      )}
      <Outlet />
    </Layout>
  )
}

export default Orders
