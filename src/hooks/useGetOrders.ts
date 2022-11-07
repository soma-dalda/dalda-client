import { QueryKey, useQuery, UseQueryOptions } from 'react-query'
import { Order, RequestError } from '@/type'
import { getCompanyOrdersByUserId, getConsumerOrdersByUserId } from '@/apis/service'
import useGetUser from './useGetUser'

type OrderListsResponse = { orderList: Order[] }

type UseQueryOption = Omit<
  UseQueryOptions<OrderListsResponse, RequestError, OrderListsResponse, QueryKey>,
  'queryKey' | 'queryFn'
>

const useGetOrders = (type: 'company' | 'consumer', options?: UseQueryOption) => {
  const { data: user } = useGetUser()
  if (type === 'company') {
    return useQuery<OrderListsResponse, RequestError>(
      ['getOrder', user?.id, 'company'],
      () => getCompanyOrdersByUserId(),
      {
        ...options,
        enabled: user?.id ? options?.enabled : false,
      }
    )
  }

  return useQuery<OrderListsResponse, RequestError>(
    ['getOrder', user?.id, 'consumer'],
    () => getConsumerOrdersByUserId(),
    {
      ...options,
      enabled: user?.id ? options?.enabled : false,
    }
  )
}

export default useGetOrders
