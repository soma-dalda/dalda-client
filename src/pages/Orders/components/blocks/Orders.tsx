import { Layout } from '@/components'
import { NavigationWithArrow } from '@/components/blocks'
import useGetOrders from '@/hooks/useGetOrders'
import React from 'react'
import Message from '../molecules/Message'

const Orders = () => {
  const { data: orders } = useGetOrders('company')

  return (
    <Layout navigtaion={<NavigationWithArrow>주문 요청</NavigationWithArrow>}>
      <ul className="w-[calc(100%+2rem)]">
        {orders?.map((order) => (
          <Message
            orderStatus={order.orderStatus ?? '주문 요청'}
            orderTitle={`${order.consumerId}님의 주문 요청 입니다`}
            date={order.orderDate ?? '오늘'}
            id={order.id ?? '0'}
          />
        ))}
      </ul>
    </Layout>
  )
}

export default Orders
