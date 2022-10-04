import useGetUser from '@/hooks/useGetUser'
import useLocalStorage from '@/hooks/useLocalStorage'
import { useCurrentQueryString } from '@/utils'
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ACCESS_TOKEN = 'accessToken'

const LoginRoute = () => {
  const location = useLocation()
  const naivgate = useNavigate()
  const { getCurrentQueryString } = useCurrentQueryString(location.search)
  const [, setToken] = useLocalStorage(ACCESS_TOKEN)
  const { refetch } = useGetUser({ enabled: false })

  useEffect(() => {
    const token = getCurrentQueryString(ACCESS_TOKEN)
    if (token) {
      setToken(token)
      refetch()
      naivgate('/')
    }
  }, [location])

  return <div>로딩중...</div>
}

export default LoginRoute
