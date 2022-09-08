import { QueryKey, useQuery, UseQueryOptions } from 'react-query'
import { Order, RequestError } from '@/type'
import { getCompanyOrdersByUserId, getConsumerOrdersByUserId } from '@/apis/service'
import useGetUser from './useGetUser'

type UseQueryOption = Omit<
  UseQueryOptions<Order[], RequestError, Order[], QueryKey>,
  'queryKey' | 'queryFn'
>

const useGetOrders = (type: 'company' | 'consumer', options?: UseQueryOption) => {
  const { data: user } = useGetUser()
  if (type === 'company') {
    return useQuery<Order[], RequestError>(
      ['getOrder', user?.id, 'company'],
      () => getCompanyOrdersByUserId({ userId: user?.id }),
      {
        ...options,
        enabled: options?.enabled && Boolean(user?.id),
      }
    )
  }

  return useQuery<Order[], RequestError>(
    ['getOrder', user?.id, 'consumer'],
    () => getConsumerOrdersByUserId({ userId: user?.id }),
    {
      ...options,
      enabled: options?.enabled && Boolean(user?.id),
    }
  )
}

export default useGetOrders