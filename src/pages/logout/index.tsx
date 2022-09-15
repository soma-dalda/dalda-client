import useGetUser from '@/hooks/useGetUser'
import { deleteCookie } from '@/utils'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigtae = useNavigate()
  const { remove } = useGetUser({ enabled: false })

  useEffect(() => {
    deleteCookie('access-token')
    navigtae('/')
    remove()
  }, [])

  return <div>로그인 아웃 중...</div>
}

export default Logout
