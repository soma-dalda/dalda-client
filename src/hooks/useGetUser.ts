import { useQuery, UseQueryOptions, QueryKey } from 'react-query'
import { getUser } from '@/apis/service'
import { RequestError, User } from '@/type'
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
  })
}

export default useGetUser
