import { getLogout } from '@/apis/service'
import { useQuery, UseQueryOptions } from 'react-query'

const useGetLogout = (
  option?: Omit<UseQueryOptions<any, unknown, any, 'logout'>, 'queryKey' | 'queryFn'>
) => {
  return useQuery('logout', getLogout, { ...option })
}

export default useGetLogout
