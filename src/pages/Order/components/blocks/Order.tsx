import React from 'react'
import { NavigationWithArrow } from '@/components/blocks'
import { Layout } from '@/components'
import { Template } from '@/type'
import QuestionDescription from '../molecules/QuestionDescription'
import QuestionOption from '../molecules/QuestionOption'
import Stepper from '../molecules/Stepper'
import OrderBottom from '../molecules/OrderBottom'
import useOrderValueContext from '../../hooks/useOrderValueContext'
import useOrderActionContext from '../../hooks/useOrderActionContext'

type Props = {
  template?: Template
}

const Order = ({ template }: Props) => {
  const { order, current, checked } = useOrderValueContext()
  const {
    handleChangeCheckbox,
    handleChangeRadio,
    handleChangeTextArea,
    handleClickStep,
    handleClickBottomButton,
  } = useOrderActionContext()

  const content = template?.content[current]

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
            img={content.img}
            checked={checked}
            detailType={content.detailType}
            answer={order.answers[current]}
            questionTitle={content.question}
            options={content.options}
            handleChangeOption={
              content.detailType === 'multiObjective'
                ? handleChangeCheckbox(current)
                : handleChangeRadio(current)
            }
          />
        )}
        {content?.type === 'description' && (
          <QuestionDescription
            img={content.img}
            questionTitle={content?.question}
            handleChangeDescription={handleChangeTextArea(current)}
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
