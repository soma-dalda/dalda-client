import React, { useMemo } from 'react'
import { NavigationWithArrow } from '@/components/blocks'
import { Layout } from '@/components'
import useGetTemplate from '@/hooks/useGetTemplate'
import { useParams } from 'react-router-dom'
import useBeforeunload from '@/hooks/useBeforeunload'
import QuestionDescription from '../molecules/QuestionDescription'
import QuestionOption from '../molecules/QuestionOption'
import Stepper from '../molecules/Stepper'
import useOrderValueContext from '../../hooks/useOrderValueContext'
import useOrderActionContext from '../../hooks/useOrderActionContext'
import OrderBottomLink from '../molecules/OrderBottomLink'
import useIsAnswersFilled from '../../hooks/useIsAnswersFilled'

const isAnswerFilled = (answer: string[]) => {
  return Boolean(answer?.filter((ans) => ans?.trim() !== '')?.length > 0)
}

const Order = () => {
  const { id } = useParams()
  const { order, current } = useOrderValueContext()
  const { handleChangeCheckbox, handleChangeRadio, handleChangeTextArea, handleClickStep } =
    useOrderActionContext()
  const isAnswersFilled = useIsAnswersFilled()

  const { data: template } = useGetTemplate(id ?? '', {
    enabled: false,
  })

  const content = useMemo(() => template?.contentList[current], [current, template])

  useBeforeunload()

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
            name={content.question}
            img={content.img}
            detailType={content.type}
            answer={order.answers[current]}
            questionTitle={`${content?.required ? '(*)' : ''} ${content.question}`}
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
            name={content.question}
            img={content.img}
            questionTitle={`${content?.required ? '(*)' : ''} ${content.question}`}
            handleChangeDescription={handleChangeTextArea(current)}
            description={order.answers[current]}
          />
        )}
      </form>
      {current + 1 === order?.answers?.length ? (
        <OrderBottomLink active={isAnswersFilled} to="../pickup">
          {isAnswersFilled ? '픽업 날짜 설정하기' : '필수 항목을 확인 해주세요'}
        </OrderBottomLink>
      ) : (
        <OrderBottomLink
          active={content?.required === false ? true : isAnswerFilled(order.answers[current])}
          to={`#${current + 1}`}
        >
          다음
        </OrderBottomLink>
      )}
    </Layout>
  )
}

export default Order
