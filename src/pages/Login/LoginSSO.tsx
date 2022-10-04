import useLogin from '@/hooks/useLogin'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const LoginSSO = () => {
  const { sso } = useParams<{ sso: 'kakao' | 'google' | 'naver' }>()
  const navigate = useNavigate()

  useLogin(sso, {
    onSuccess: (data) => {
      navigate(`/login?accessToken=${data.id}`)
    },
  })

  return <div>로그인중...</div>
}

export default LoginSSO
