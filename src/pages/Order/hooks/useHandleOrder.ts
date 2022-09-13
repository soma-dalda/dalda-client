import useError from '@/hooks/useStatus'
import { Order } from '@/type'
import { useCallback, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useImmer } from 'use-immer'
import usePostOrder from './usePostOrder'

const defaultOrder: Order & { answers: string[] } = {
  templateId: '',
  answers: [''],
  templateResponse: [],
}

const useHandleOrder = () => {
  const { id, domain } = useParams()
  const navigate = useNavigate()
  const { dispatchUpdateError } = useError()
  const [checked, setChecked] = useState<number[]>([])
  const [current, setCurrent] = useState(0)
  const [order, setOrder] = useImmer({ ...defaultOrder, templateId: id })

  const { mutate } = usePostOrder({
    onSuccess: () => {
      setCurrent(0)
      setOrder({ ...defaultOrder, templateId: id })
      navigate(`/${domain}`)
    },
    onError: (err) => {
      dispatchUpdateError({ code: err.code, message: err.response?.data.error.message })
    },
  })

  const setTemplateResponse = ({
    question,
    answer,
    index,
  }: {
    question: string
    answer: string
    index: number
  }) => {
    setOrder((draft) => {
      if (draft.templateResponse) {
        if (draft.templateResponse[index]) {
          draft.templateResponse[index] = { question, answer }
        } else {
          draft.templateResponse.push({ question, answer })
        }
      }
    })
  }

  const handleClickStep = useCallback(
    (step: number) => () => {
      setCurrent(step)
      navigate(`#${step}`)
    },
    []
  )

  const handleChangeTextArea: (index: number) => React.ChangeEventHandler<HTMLTextAreaElement> =
    useCallback(
      (index) => (e) => {
        setOrder((draft) => {
          draft.answers[index] = e.target.value
          setTemplateResponse({ question: e.target.name, answer: draft.answers[index], index })
        })
      },
      []
    )

  const handleChangeCheckbox: (index: number) => React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (index) => (e) => {
        const checkedIndex = e.target.dataset.id
        if (!checkedIndex) {
          return
        }
        if (e.target.checked) {
          setOrder((draft) => {
            setChecked((prev) => [...prev, +checkedIndex])
            if (draft.answers[index]) {
              draft.answers[index] = JSON.stringify([
                ...JSON.parse(draft?.answers?.[index]),
                e.target.value,
              ])
            } else {
              draft.answers[index] = JSON.stringify([e.target.value])
            }
            setTemplateResponse({ question: e.target.name, answer: draft.answers[index], index })
          })
        }

        if (!e.target.checked) {
          setChecked((prev) => prev.filter((v) => v !== +checkedIndex))
          setOrder((draft) => {
            const options: string[] = JSON.parse(draft.answers[index])
            draft.answers[index] = JSON.stringify(
              options.filter((option) => option !== e.target.value)
            )
            setTemplateResponse({ question: e.target.name, answer: draft.answers[index], index })
          })
        }
      },
      []
    )

  const handleChangeRadio = useCallback(
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setOrder((draft) => {
        draft.answers[index] = e.target.value
        setTemplateResponse({ question: e.target.name, answer: draft.answers[index], index })
      })
    },
    []
  )

  const handleClickBottomButton = useCallback(() => {
    if (current + 1 < order.answers.length) {
      setCurrent((prev) => prev + 1)
      navigate(`#${current}`)
    } else {
      mutate({ templateId: order.templateId, templateResponse: order.templateResponse })
    }
  }, [current, order])

  return {
    handleClickStep,
    handleChangeCheckbox,
    handleClickBottomButton,
    handleChangeRadio,
    handleChangeTextArea,
    setOrder,
    current,
    order,
    checked,
  }
}

export default useHandleOrder
