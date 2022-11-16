import React from 'react'
import { Layout } from '@/components'
import { NavigationWithArrow } from '@/components/blocks'
import { Link } from 'react-router-dom'
import useGetOrderByOrderId from '@/hooks/useGetOrderByOrderId'
import useGetTemplate from '@/hooks/useGetTemplate'
import Question from '../molecules/Question'

const OrderConfirm = () => {
  const { data: order } = useGetOrderByOrderId()
  const { data: template } = useGetTemplate(order?.templateId ?? '', {
    enabled: Boolean(order?.templateId),
  })

  return (
    <Layout
      navigtaion={
        <NavigationWithArrow
          button={
            <Link
              to="거절"
              className="rounded-xl bg-danger-500 px-5 py-2 text-sm text-white hover:bg-danger-300"
            >
              거절
            </Link>
          }
        >
          주문 요청
        </NavigationWithArrow>
      }
    >
      <section className="mt-3 w-full">
        <h2 className="mb-7 text-lg font-semibold">{order?.id}님의 주문요청</h2>
        <section className="flex flex-col gap-7">
          {template?.contentList.map((question, index) => (
            <Question
              question={question?.question}
              answer={order?.templateResponses?.[index]?.answer}
            />
          ))}
          <Link
            to="승인"
            className="flex w-full items-center justify-center rounded-xl bg-point-700 py-3 text-white hover:bg-point-500"
          >
            승인
          </Link>
        </section>
      </section>
    </Layout>
  )
}

export default OrderConfirm
