import React from 'react'
import { Layout } from '@/components'
import { NavigationWithArrow } from '@/components/blocks'
import useGetOrderByOrderId from '@/hooks/useGetOrderByOrderId'
import { Link } from 'react-router-dom'

const OrderResponse = () => {
  const { data: order } = useGetOrderByOrderId()

  return (
    <Layout navigtaion={<NavigationWithArrow>주문 요청</NavigationWithArrow>}>
      <section className="mt-3 w-full">
        <h2 className="mb-7 text-lg font-semibold">{order?.orderStatus ?? '확인 진행 중'}</h2>
        <div className="rounded-xl border bg-white p-3">메시지 메시지 메시지</div>
      </section>
      <Link
        to="/"
        className="mt-3 flex w-full items-center justify-center rounded-xl border bg-point-700 p-3 text-white"
      >
        확인
      </Link>
    </Layout>
  )
}

export default OrderResponse
