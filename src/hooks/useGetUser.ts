import { useQuery, UseQueryOptions, QueryKey } from 'react-query'
import { getUser } from '@/apis/service'
import { RequestError, User } from '@/type'

type UseQueryOption = Omit<
  UseQueryOptions<User, RequestError, User, QueryKey>,
  'queryFn' | 'queryKey'
>

const useGetUser = (options?: UseQueryOption) => {
  return useQuery<User, RequestError>('getUser', getUser, {
    ...options,
    enabled: options?.enabled,
  })
}

export default useGetUser
