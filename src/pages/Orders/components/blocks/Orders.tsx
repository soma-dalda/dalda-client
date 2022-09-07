import { Layout } from '@/components'
import { NavigationWithArrow } from '@/components/blocks'
import React from 'react'
import Message from '../molecules/Message'

const Orders = () => {
  return (
    <Layout navigtaion={<NavigationWithArrow>주문 요청</NavigationWithArrow>}>
      <ul className="w-[calc(100%+2rem)]">
        <Message
          orderStatus="주문 요청"
          orderTitle="2293 님이 주문 요청 하셨습니다"
          date="오늘"
          id="3"
        />
        <Message
          orderStatus="주문 요청"
          orderTitle="2293 님이 주문 요청 하셨습니다"
          date="오늘"
          id="4"
        />
        <Message
          orderStatus="주문 요청"
          orderTitle="2293 님이 주문 요청 하셨습니다"
          date="오늘"
          id="5"
        />
      </ul>
    </Layout>
  )
}

export default Orders
