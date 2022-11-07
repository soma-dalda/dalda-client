import useLocalStorage from './useLocalStorage'
import usePostRefresh from './usePostRefresh'

const useRefresh = () => {
  const [, setValue] = useLocalStorage('accessToken')
  const mutation = usePostRefresh({
    onSuccess: (token) => {
      setValue(token)
    },
    onError: () => {
      setValue('')
    },
  })

  return { ...mutation }
}

export default useRefresh
