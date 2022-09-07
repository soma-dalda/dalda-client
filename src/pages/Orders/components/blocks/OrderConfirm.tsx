import React from 'react'
import { Layout } from '@/components'
import { NavigationWithArrow } from '@/components/blocks'
import { Link } from 'react-router-dom'
import Question from '../molecules/Question'

const OrderConfirm = () => {
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
        <h2 className="mb-7 text-lg font-semibold">2295님의 주문요청</h2>
        <section className="flex flex-col gap-7">
          <Question question="케이크 호수" answer="1호" />
          <Question
            question="어떤 케이크 디자인을 원하시는지 작성해주세요 :)"
            answer="Can we take this offline we need to think big start small and scale fast to energize our clients or the last person we talked to said this would be ready nor get buy-in.Can we take this offline we need to think big start small and scale fast to energize our clients or the last person we talked to said this would be ready nor get buy-in.Can we take this offline we need to think big start small and scale fast to energize our clients or the last pe"
          />
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
