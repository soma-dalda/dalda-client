import React, { ComponentType, useEffect } from 'react'
import useGetUser from '@/hooks/useGetUser'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from '@/hooks/useLocalStorage'
import useToast from '@/hooks/useToast'

const withLogin = (Component: ComponentType) => {
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

export default withLogin
