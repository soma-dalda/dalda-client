import React, { ComponentType, useEffect } from 'react'
import useGetUser from '@/hooks/useGetUser'
import useGetCompanyRequest from '@/pages/Domain/hooks/useGetCompanyRequest'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from '@/hooks/useLocalStorage'
import useToast from '@/hooks/useToast'

const withAuth = (Component: ComponentType) => {
  const Wrapper = <P extends {}>(props: P) => {
    const navigate = useNavigate()

    const { error } = useToast('잘못된 접근 입니다', {
      backgroundColor: '#354898',
    })

    const { error: errorNotLogin } = useToast('로그인 후 사용 해주세요', {
      backgroundColor: '#354898',
    })

    const [token, , , isLoading] = useLocalStorage('accessToken')
    const { data: user, isSuccess: userIsSuccess } = useGetUser()
    const { data: company, isSuccess: companyIsSuccess } = useGetCompanyRequest()

    /* 권한 분기 */
    useEffect(() => {
      if (userIsSuccess && companyIsSuccess) {
        if (user?.id && company?.id) {
          if (user?.id !== company?.id) {
            error.show()
            navigate('/')
          }
        }
      }
    }, [user, company, userIsSuccess, companyIsSuccess])

    useEffect(() => {
      if (userIsSuccess) {
        if (!user?.id) {
          error.show()
          navigate('/')
        }
      }
    }, [user, userIsSuccess])

    useEffect(() => {
      if (!isLoading && !token) {
        errorNotLogin.show()
        navigate('/')
      }
    }, [token])

    return <Component {...props} />
  }

  const HOC = <P extends {}>(props: P) => {
    return <Wrapper {...props} />
  }

  return HOC
}

export default withAuth
