import useGetOrders from '@/hooks/useGetOrders'
import { getOrderStatus, timeForToday } from '@/utils'
import React from 'react'
import Message from '../molecules/Message'

const OrdersCompanyList = () => {
  const { data } = useGetOrders('company', {
    select: (prev) => {
      return {
        ...prev,
        orderList: prev.orderList.sort((a, b) => {
          return new Date(b.orderDate ?? '').getTime() - new Date(a.orderDate ?? '').getTime()
        }),
      }
    },
  })

  return (
    <ul className="w-[calc(100%+2rem)]">
      {data?.orderList &&
        data?.orderList?.length > 0 &&
        data?.orderList?.map((order) => (
          <Message
            orderStatus={getOrderStatus(order.orderStatus ?? '') ?? '주문 요청'}
            orderTitle={`${order?.consumerName}님의 주문 요청 입니다`}
            date={order.orderDate ? timeForToday(order.orderDate) : '오늘'}
            id={`${order.id}` ?? '0'}
          />
        ))}
    </ul>
  )
}

export default OrdersCompanyList
