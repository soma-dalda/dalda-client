import useInput from '@/components/compounds/Form/hooks/useInput'
import useGetUser from '@/hooks/useGetUser'
import { useToast } from '@jaewoong2/toast'
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import usePatchUser from './usePatchUser'

const useConfiguration = () => {
  const [username, setUsername, onChangeUsername] = useInput()
  const [userPhone, setUserPhone, onChangeUserPhone] = useInput()
  const { show: successShow } = useToast('변경 완료', {
    backgroundColor: '#354898',
    width: 200,
    color: 'white',
    borderRadius: 100,
  })

  const { show: errorShow } = useToast('휴대폰 번호 양식을 지켜주세요 :)', {
    backgroundColor: '#E56FB4',
    width: 300,
    color: 'white',
    borderRadius: 100,
  })

  const { isLoading: userLoading } = useGetUser({
    onSuccess: (user) => {
      setUsername(user.username)
      setUserPhone(user.userPhone)
    },
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    retry: false,
  })
  const { mutate, isLoading } = usePatchUser()
  const navigate = useNavigate()

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (userPhone.length === 11) {
        mutate({ username, userPhone })
        navigate('/')
        successShow()
      } else {
        errorShow()
      }
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
