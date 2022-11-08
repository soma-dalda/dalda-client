import useGetOrders from '@/hooks/useGetOrders'
import useGetUser from '@/hooks/useGetUser'
import { getOrderStatus, timeForToday } from '@/utils'
import React from 'react'
import Message from '../molecules/Message'

const OrdersConsumerList = () => {
  const { data: user } = useGetUser()
  const { data } = useGetOrders('consumer')

  return (
    <ul className="w-[calc(100%+2rem)]">
      {data?.orderList &&
        data?.orderList?.length > 0 &&
        data?.orderList?.map((order) => (
          <Message
            id={order.id}
            key={order.id}
            orderStatus={getOrderStatus(order.orderStatus) ?? '주문 확인 중'}
            orderTitle={`${user?.username}님의 주문서 "${
              getOrderStatus(order.orderStatus) ?? '확인 중 '
            }" 입니다`}
            date={order.orderDate ? timeForToday(order.orderDate) : '오늘'}
          />
        ))}
    </ul>
  )
}

export default OrdersConsumerList
