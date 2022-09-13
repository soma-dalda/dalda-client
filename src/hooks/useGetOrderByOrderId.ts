import { getOrderByOrderId } from '@/apis/service'
import { Order, RequestError } from '@/type'
import { QueryKey, useQuery, UseQueryOptions } from 'react-query'
import { useParams } from 'react-router-dom'

type UseQueryOption = Omit<
  UseQueryOptions<Order, RequestError, Order, QueryKey>,
  'queryKey' | 'queryFn'
>

const useGetOrderByOrderId = (options?: UseQueryOption) => {
  const { id } = useParams()

  return useQuery<Order, RequestError>(
    ['getOrderByOrderId', id],
    () => getOrderByOrderId({ orderId: id }),
    {
      ...options,
      enabled: options?.enabled && Boolean(id),
    }
  )
}

export default useGetOrderByOrderId
