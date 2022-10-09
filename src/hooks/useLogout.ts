import { useCallback } from 'react'
import useGetUser from './useGetUser'
import useLocalStorage from './useLocalStorage'

const useLogout = () => {
  const { remove } = useGetUser({ enabled: false })
  const [, setToken] = useLocalStorage('accessToken')

  const handlelogout = useCallback(() => {
    setToken('')
    remove()
  }, [])

  return handlelogout
}

export default useLogout
