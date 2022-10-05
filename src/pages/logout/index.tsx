import React from 'react'
import useGetUser from '@/hooks/useGetUser'
import useLocalStorage from '@/hooks/useLocalStorage'
import { useNavigate } from 'react-router-dom'
import useGetLogout from './hooks/useGetLogout'

const Logout = () => {
  const navigtae = useNavigate()
  const { remove } = useGetUser({ enabled: false })
  const [, setToken] = useLocalStorage('accessToken')

  useGetLogout({
    onSuccess: () => {
      setToken('')
      navigtae('/')
      remove()
    },
  })

  return <div>로그인 아웃 중...</div>
}

export default Logout
