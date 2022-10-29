import React, { ComponentType, useEffect } from 'react'
import useGetUser from '@/hooks/useGetUser'
import useGetCompanyRequest from '@/pages/Domain/hooks/useGetCompanyRequest'
import { useToast } from '@jaewoong2/toast'
import { useNavigate } from 'react-router-dom'

const withAuth = (Component: ComponentType) => {
  const Wrapper = <P extends {}>(props: P) => {
    const navigate = useNavigate()
    const { data: user } = useGetUser()
    const { data: company } = useGetCompanyRequest()
    const { show } = useToast('잘못된 접근 입니다', {
      color: 'white',
      backgroundColor: '#354898',
      borderRadius: 100,
    })

    /* 권한 분기 */
    useEffect(() => {
      if (user?.id && company?.id) {
        if (user?.id !== company?.id) {
          show()
          navigate('/')
        }
      }
    }, [user, company])

    useEffect(() => {
      if (!user?.id) {
        show()
        navigate('/')
      }
    }, [user])

    return <Component {...props} />
  }

  const HOC = <P extends {}>(props: P) => {
    return <Wrapper {...props} />
  }

  return HOC
}

export default withAuth
