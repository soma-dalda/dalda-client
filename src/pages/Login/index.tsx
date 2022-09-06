import useLogin from '@/hooks/useLogin'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  useLogin({
    onSuccess: () => {
      navigate(-1)
    },
  })

  return <div>로그인중...</div>
}

export default Login
