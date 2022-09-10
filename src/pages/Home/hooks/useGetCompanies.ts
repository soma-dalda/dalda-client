import { getCompanies } from '@/apis/service'
import { RequestError, User } from '@/type'
import { QueryKey, useQuery, UseQueryOptions } from 'react-query'

type UseQueryOption = Omit<
  UseQueryOptions<User[], RequestError, User[], QueryKey>,
  'queryFn' | 'queryKey'
>

const useGetCompanies = (options?: UseQueryOption) => {
  return useQuery<User[], RequestError, User[]>('getComapnies', getCompanies, {
    ...options,
  })
}

export default useGetCompanies
