import { useCallback, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import usePostOrder from './usePostOrder'

const useHandleOrder = () => {
  const { id, domain } = useParams()
  const navigate = useNavigate()

  const { mutate } = usePostOrder({
    onSuccess: () => {
      navigate(`/${domain}`)
    },
  })

  const [current, setCurrent] = useState(0)
  const [order, setOrder] = useState({
    templateId: id,
    orderId: (Math.random() * 19232913921).toString(),
    answers: [''],
  })

  const handleClickStep = useCallback(
    (step: number) => () => {
      setCurrent(step)
      navigate(`#${step}`)
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
      navigate(`#${current}`)
    } else {
      mutate({ ...order, domain })
    }
  }, [current, order, domain])

  return {
    handleClickStep,
    handleChangeValue,
    handleClickBottomButton,
    setOrder,
    current,
    order,
  }
}

export default useHandleOrder
