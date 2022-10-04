import useGetUser from '@/hooks/useGetUser'
import useGetCompanyRequest from '@/pages/Domain/hooks/useGetCompanyRequest'
import React, { ComponentType, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const withAuth = (Component: ComponentType) => {
  const HOC = <P extends {}>(props: P) => {
    const navigate = useNavigate()
    const { data: user } = useGetUser()
    const { data: company } = useGetCompanyRequest()

    /* 권한 분기 */
    useEffect(() => {
      if (user?.id && company?.id) {
        if (user?.id !== company?.id) {
          navigate('/')
          window.alert('잘못된 접근')
        }
      }
    }, [user, company])

    return <Component {...props} />
  }

  return HOC
}

export default withAuth
