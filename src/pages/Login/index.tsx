import useLogin from '@/hooks/useLogin'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Login = () => {
  const { sso } = useParams<{ sso: 'kakao' | 'google' | 'naver' }>()
  const navigate = useNavigate()

  useLogin(sso, {
    onSuccess: () => {
      navigate(-1)
    },
  })

  return <div>로그인중...</div>
}

export default Login
