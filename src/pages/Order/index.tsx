import axios from 'axios'
import React, { useCallback, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import TemplateHeader from '../Template/components/TemplateHeader'
import OrderBottom from './components/OrderBottom'
import QuestionDescription from './components/QuestionDescription'
import QuestionOption from './components/QuestionOption'
import Stepper from './components/Stepper'

/** 주문서 접근
 * 1. orderId => 주문서 정보 받아오기
 * 2. 각 주문서 배열요소 1개 => Step 1개
 * 3. options O => 선택 값으로
 * 4. options X => 입력 값으로
 * 5. answer 는 배열로 담아서 [[""], [""], [""]] 로 POST 요청
 * 6. oreder = { templateId: 0, answers = [[""]] }
 */

//   type: 'description'
//   question: string
//   detailType: 'shortSubjective' | 'longSubjective'
//   images: string[]

const getOrder = async ({ domain, id }: { domain?: string; id?: string }) => {
  const { data } = await axios.get(`/${domain}/order/${id}`)

  return data
}

const postOrder = async (order: {
  domain?: string
  templateId?: string
  orderId: string | undefined
  answers: string[]
}) => {
  const { data } = await axios.post(`/${order.domain}/order/${order.templateId}`, { ...order })

  return data
}

const Order = () => {
  const { id, domain } = useParams()
  const [current, setCurrent] = useState(0)
  const navigate = useNavigate()
  const [order, setOrder] = useState({
    templateId: id,
    orderId: (Math.random() * 19232913921).toString(),
    answers: [''],
  })

  const { data: template } = useQuery(['getOrder', id], () => getOrder({ id, domain }), {
    onSuccess: (data) => {
      setOrder((prev) => ({
        ...prev,
        templateId: data?.id,
        answers: Array(data?.content.length).fill(''),
      }))
    },
  })

  const { mutate } = useMutation(postOrder, {
    onSuccess: () => {
      navigate(`/${domain}`)
    },
  })

  const handleClickStep = useCallback(
    (step: number) => () => {
      setCurrent(step)
    },
    []
  )

  const handleChangeValue: (
    index: number
  ) => React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = useCallback(
    (index) => (e) => {
      setOrder((prev) => {
        return {
          ...prev,
          answers: prev.answers.map((answer, i) => (i === index ? e.target.value : answer)),
        }
      })
    },
    []
  )

  const handleClickBottomButton = useCallback(() => {
    if (current + 1 < order.answers.length) {
      setCurrent((prev) => prev + 1)
    } else {
      mutate({ ...order, domain })
    }
  }, [current, order, domain])

  return (
    <div key={id} className="relative flex min-h-screen w-full flex-col justify-between pt-4">
      <main className="px-2">
        <TemplateHeader save={false}>{template?.title}</TemplateHeader>
        <Stepper
          steps={template?.content.length}
          current={current}
          handleClickStep={handleClickStep}
        />
        {template?.content[current].type === 'option' && (
          <QuestionOption
            questionTitle={template?.content[current].question}
            options={template?.content[current].options}
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
      <OrderBottom onClick={handleClickBottomButton} actvie={Boolean(order.answers[current])}>
        {current + 1 === order.answers.length ? '주문서 보내기' : '다음'}
      </OrderBottom>
    </div>
  )
}

export default Order
