import { AxiosError } from 'axios'
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
  const [value, setValue, refetch] = useLocalStorage('accessToken')

  const query = useQuery<User, RequestError>(
    'getUser',
    async () => {
      refetch()
      return getUser()
    },
    {
      ...options,
      enabled: value ? options?.enabled : false,
      onError: async (error) => {
        if (typeof options?.onError === 'function') {
          options?.onError(error)
        }
        if (error.response?.status === 401) {
          try {
            const res = await http.post<string>('/api/user-auth/refresh')
            setValue(res.data)
          } catch (err) {
            setValue('')
            throw new AxiosError()
          }
        } else {
          setValue('')
        }
        query.remove()
      },
      retry: 0,
    }
  )

  return query
}

export default useGetUser
