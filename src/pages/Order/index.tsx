import { NavigationWithArrow } from '@/components/blocks'
import React from 'react'
import OrderBottom from './components/OrderBottom'
import QuestionDescription from './components/QuestionDescription'
import QuestionOption from './components/QuestionOption'
import Stepper from './components/Stepper'
import useGetTemplateById from './hooks/useGetTemplateById'
import useHandleOrder from './hooks/useHandleOrder'

const Order = () => {
  const { setOrder, current, order, handleChangeValue, handleClickBottomButton, handleClickStep } =
    useHandleOrder()

  const { data: template } = useGetTemplateById(['getOrder'], {
    onSuccess: (data) => {
      setOrder((prev) => ({
        ...prev,
        templateId: data?.id,
        answers: Array(data?.content.length).fill(''),
      }))
    },
  })

  return (
    <div className="relative flex min-h-screen w-full flex-col justify-between pt-4">
      <main className="px-2">
        <NavigationWithArrow>{template?.title}</NavigationWithArrow>
        {template?.content && (
          <Stepper
            steps={template?.content?.length}
            current={current}
            handleClickStep={handleClickStep}
          />
        )}
        {template?.content[current] && template?.content[current].type === 'option' && (
          <QuestionOption
            questionTitle={template?.content[current].question}
            options={template?.content?.[current]?.options}
            handleChangeOption={handleChangeValue(current)}
          />
        )}
        {template?.content[current].type === 'description' && (
          <QuestionDescription
            questionTitle={template?.content[current].question}
            handleChangeDescription={handleChangeValue(current)}
            description={order.answers[current]}
          />
        )}
      </main>
      <OrderBottom onClick={handleClickBottomButton} active={Boolean(order.answers[current])}>
        {current + 1 === order.answers.length ? '주문서 보내기' : '다음'}
      </OrderBottom>
    </div>
  )
}

export default Order
