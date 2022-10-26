import { useQuery, UseQueryOptions, QueryKey } from 'react-query'
import { getUser } from '@/apis/service'
import { RequestError, User } from '@/type'
import { http } from '@/apis/https'
import useLocalStorage from './useLocalStorage'

type UseQueryOption = Omit<
  UseQueryOptions<User, RequestError, User, QueryKey>,
  'queryFn' | 'queryKey'
>

const useGetUser = (options?: UseQueryOption) => {
  const [value] = useLocalStorage('accessToken')

  return useQuery<User, RequestError>('getUser', getUser, {
    ...options,
    enabled: options?.enabled && Boolean(value),
    onError: async (error) => {
      if (typeof options?.onError === 'function') {
        options?.onError(error)
      }
      if (error.response?.status === 401) {
        const res = await http.post<string>('/api/user-auth/refresh')
        window.localStorage.setItem('accessToken', res.data)
      }
    },
  })
}

export default useGetUser
