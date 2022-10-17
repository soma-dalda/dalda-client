import React from 'react'
import { NavigationWithArrow } from '@/components/blocks'
import { Layout } from '@/components'
import useGetTemplate from '@/hooks/useGetTemplate'
import { useParams } from 'react-router-dom'
import LoadingPage from '@/components/molecules/LoadingPage'
import QuestionDescription from '../molecules/QuestionDescription'
import QuestionOption from '../molecules/QuestionOption'
import Stepper from '../molecules/Stepper'
import useOrderValueContext from '../../hooks/useOrderValueContext'
import useOrderActionContext from '../../hooks/useOrderActionContext'
import OrderBottomLink from '../molecules/OrderBottomLink'

const Order = () => {
  const { id } = useParams()
  const { order, current } = useOrderValueContext()
  const { handleChangeCheckbox, handleChangeRadio, handleChangeTextArea, handleClickStep } =
    useOrderActionContext()

  const { data: template, isLoading } = useGetTemplate(id ?? '', {
    enabled: false,
  })

  if (isLoading) {
    return <LoadingPage />
  }

  const content = template?.contentList[current]

  return (
    <Layout navigtaion={<NavigationWithArrow>{template?.title}</NavigationWithArrow>}>
      {template?.contentList && (
        <Stepper
          steps={template?.contentList?.length}
          current={current}
          handleClickStep={handleClickStep}
        />
      )}
      <form className="w-full">
        {content && content.type !== 'subjective' && (
          <QuestionOption
            img={content.img}
            detailType={content.type}
            answer={order.answers[current]}
            questionTitle={`${content?.required && '(*)'} ${content.question}`}
            options={content.options}
            handleChangeOption={
              content.type === 'multiObjective'
                ? handleChangeCheckbox(current)
                : handleChangeRadio(current)
            }
          />
        )}
        {content?.type === 'subjective' && (
          <QuestionDescription
            img={content.img}
            questionTitle={`${content?.required && '(*)'} ${content.question}`}
            handleChangeDescription={handleChangeTextArea(current)}
            description={order.answers[current]}
          />
        )}
      </form>
      {current + 1 === order.answers.length ? (
        <OrderBottomLink
          active={content?.required === false ? true : Boolean(order.answers[current])}
          to="../pickup"
        >
          픽업 날짜 설정하기
        </OrderBottomLink>
      ) : (
        <OrderBottomLink
          active={content?.required === false ? true : Boolean(order.answers[current])}
          to={`#${current + 1}`}
        >
          다음
        </OrderBottomLink>
      )}
    </Layout>
  )
}

export default Order
