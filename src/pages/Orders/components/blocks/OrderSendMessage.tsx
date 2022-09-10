import { Layout } from '@/components'
import { NavigationWithArrow } from '@/components/blocks'
import { FormControl, FormLabel, FormTextArea } from '@/components/compounds/Form/components'
import React from 'react'
import { useParams } from 'react-router-dom'

const OrderSendMessage = () => {
  const { status } = useParams()

  return (
    <Layout navigtaion={<NavigationWithArrow>주문 요청</NavigationWithArrow>}>
      <section className="mt-3 w-full">
        <h2 className="mb-7 text-lg font-semibold">고객님에게 전달될 {status} 메시지 에요</h2>
        <section className="flex flex-col gap-7">
          <FormControl className="flex flex-col gap-2" as="form" id="sendMessage">
            <FormLabel>{status} 메시지</FormLabel>
            <FormTextArea rows={5} />
          </FormControl>
        </section>
        <button
          form="sendMessage"
          type="submit"
          className="mt-4 w-full rounded-xl bg-point-700 p-3 text-white hover:bg-point-500"
        >
          {status}
        </button>
      </section>
    </Layout>
  )
}

export default OrderSendMessage
