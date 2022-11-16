import { useQuery, UseQueryOptions, QueryKey } from 'react-query'
import { getUser } from '@/apis/service'
import { RequestError, User } from '@/type'
import useLocalStorage from './useLocalStorage'
import useRefresh from './useRefresh'

type UseQueryOption = Omit<
  UseQueryOptions<User, RequestError, User, QueryKey>,
  'queryFn' | 'queryKey'
>

const useGetUser = (options?: UseQueryOption) => {
  const [value, , refetch] = useLocalStorage('accessToken')
  const { mutate } = useRefresh()

  const query = useQuery<User, RequestError>(
    'getUser',
    async () => {
      refetch()
      return getUser()
    },
    {
      ...options,
      enabled: value ? options?.enabled : false,
      onSuccess: (data) => {
        if (typeof options?.onSuccess === 'function') {
          options?.onSuccess(data)
        }
        refetch()
      },
      onError: (error) => {
        if (typeof options?.onError === 'function') {
          options?.onError(error)
        }
        if (error.response?.status === 401) {
          mutate()
        }
        query.remove()
      },
      retry: 0,
    }
  )

  return query
}

export default useGetUser
