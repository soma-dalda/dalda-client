import React from 'react'
import { NavigationWithArrow } from '@/components/blocks'
import useGetTemplate from '@/hooks/useGetTemplate'
import { useParams } from 'react-router-dom'
import { Layout } from '@/components'
import LoadingPage from '@/components/molecules/LoadingPage'
import useHandleOrder from '../../hooks/useHandleOrder'
import QuestionDescription from '../molecules/QuestionDescription'
import QuestionOption from '../molecules/QuestionOption'
import Stepper from '../molecules/Stepper'
import OrderBottom from '../molecules/OrderBottom'

const Order = () => {
  const { id } = useParams()
  const {
    setOrder,
    current,
    order,
    handleChangeValue,
    checked,
    handleClickStep,
    handleClickBottomButton,
  } = useHandleOrder()

  const { data: template, isLoading } = useGetTemplate(id ?? '', {
    onSuccess: (data) => {
      setOrder((prev) => ({
        ...prev,
        templateId: id,
        answers: Array(data?.content.length).fill(''),
      }))
    },
    enabled: Boolean(id),
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    retry: false,
  })

  const content = template?.content[current]

  if (isLoading) {
    return <LoadingPage />
  }

  return (
    <Layout navigtaion={<NavigationWithArrow>{template?.title}</NavigationWithArrow>}>
      {template?.content && (
        <Stepper
          steps={template?.content?.length}
          current={current}
          handleClickStep={handleClickStep}
        />
      )}
      <form className="w-full">
        {content && content.type === 'option' && (
          <QuestionOption
            checked={checked}
            detailType={content.detailType}
            answer={order.answers[current]}
            questionTitle={content.question}
            options={content.options}
            handleChangeOption={handleChangeValue(current)}
          />
        )}
        {content?.type === 'description' && (
          <QuestionDescription
            questionTitle={content?.question}
            handleChangeDescription={handleChangeValue(current)}
            description={order.answers[current]}
          />
        )}
      </form>
      <OrderBottom active={Boolean(order.answers[current])} onClick={handleClickBottomButton}>
        {current + 1 === order.answers.length ? '제출하기' : '다음'}
      </OrderBottom>
    </Layout>
  )
}

export default Order
