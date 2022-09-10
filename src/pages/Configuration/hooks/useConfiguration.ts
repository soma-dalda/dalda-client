import useInput from '@/components/compounds/Form/hooks/useInput'
import useGetUser from '@/hooks/useGetUser'
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import usePatchUser from './usePatchUser'

const useConfiguration = () => {
  const [username, setUsername, onChangeUsername] = useInput()
  const [userPhone, setUserPhone, onChangeUserPhone] = useInput()
  const { isLoading: userLoading } = useGetUser({
    onSuccess: (user) => {
      setUsername(user.userName)
      setUserPhone(user.userPhone)
    },
  })
  const { mutate, isLoading } = usePatchUser()
  const navigate = useNavigate()

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      mutate({ username, userPhone })
      navigate(-1)
    },
    [username, userPhone]
  )

  return {
    username,
    onChangeUsername,
    onChangeUserPhone,
    isLoading: isLoading || userLoading,
    handleSubmit,
    userPhone,
  }
}

export default useConfiguration
