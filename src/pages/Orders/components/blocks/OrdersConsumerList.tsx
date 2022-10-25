import useGetOrders from '@/hooks/useGetOrders'
import { timeForToday } from '@/utils'
import React from 'react'
import Message from '../molecules/Message'

const OrdersConsumerList = () => {
  const { data } = useGetOrders('consumer')

  return (
    <ul className="w-[calc(100%+2rem)]">
      {data?.orderList &&
        data?.orderList?.length > 0 &&
        data?.orderList?.map((order) => (
          <Message
            orderStatus={order.orderStatus ?? '주문 확인 중'}
            orderTitle={`${order?.consumerName}님의 주문 요청을 ${
              order.orderStatus ?? '확인 중 '
            } 입니다`}
            date={order.orderDate ? timeForToday(order.orderDate) : '오늘'}
            id={order.id ?? '0'}
          />
        ))}
    </ul>
  )
}

export default OrdersConsumerList
