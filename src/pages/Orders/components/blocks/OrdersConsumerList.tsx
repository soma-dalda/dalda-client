import useGetOrders from '@/hooks/useGetOrders'
import React from 'react'
import Message from '../molecules/Message'

const OrdersConsumerList = () => {
  const { data: orders } = useGetOrders('consumer')

  return (
    <ul className="w-[calc(100%+2rem)]">
      {orders &&
        orders.length > 0 &&
        orders?.map((order) => (
          <Message
            orderStatus={order.orderStatus ?? '주문 확인 중'}
            orderTitle={`${order.consumerId}님의 주문 요청을 ${
              order.orderStatus ?? '확인 중 '
            } 입니다`}
            date={order.orderDate ?? '오늘'}
            id={order.id ?? '0'}
          />
        ))}
    </ul>
  )
}

export default OrdersConsumerList
