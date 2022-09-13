import { useQuery, UseQueryOptions, QueryKey } from 'react-query'
import { getUser } from '@/apis/service'
import { RequestError, User } from '@/type'
import { getCookie } from '@/utils'

type UseQueryOption = Omit<
  UseQueryOptions<User, RequestError, User, QueryKey>,
  'queryFn' | 'queryKey'
>

const useGetUser = (options?: UseQueryOption) => {
  const token = getCookie('access-token')

  return useQuery<User, RequestError>('getUser', getUser, {
    ...options,
    enabled: Boolean(token) && options?.enabled,
  })
}

export default useGetUser
