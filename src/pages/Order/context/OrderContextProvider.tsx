import useGetTemplate from '@/hooks/useGetTemplate'
import useStatus from '@/hooks/useStatus'
import { Order } from '@/type'
import React, { PropsWithChildren, useCallback, useMemo, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useImmer } from 'use-immer'
import usePostOrder from '../hooks/usePostOrder'
import { defaultOrder, OrderAction, OrderActionContext, OrderValueContext } from './OrderContext'

const OrderContextProvider = ({ children }: PropsWithChildren) => {
  const { id, domain } = useParams()
  const navigate = useNavigate()
  const { dispatchUpdateError } = useStatus()
  const [checked, setChecked] = useState<number[]>([])
  const [current, setCurrent] = useState(0)
  const [order, setOrder] = useImmer<Order & { answers: string[] }>({
    ...defaultOrder,
    templateId: id,
  })

  useGetTemplate(id ?? '', {
    onSuccess: (data) => {
      setOrder((prev) => ({
        ...prev,
        companyId: data.companyId,
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

  const handleAddImage = useCallback((url: string) => {
    setOrder((draft) => {
      draft.imgUrl = url
    })
  }, [])

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

  const value = useMemo(() => ({ current, order, checked }), [current, order, checked])
  const action: OrderAction = useMemo(
    () => ({
      handleClickStep,
      handleChangeCheckbox,
      handleAddImage,
      handleClickBottomButton,
      handleChangeRadio,
      handleChangeTextArea,
      setOrder,
    }),
    [
      handleClickStep,
      handleAddImage,
      handleChangeCheckbox,
      handleClickBottomButton,
      handleChangeRadio,
      handleChangeTextArea,
      setOrder,
    ]
  )
  return (
    <OrderValueContext.Provider value={value}>
      <OrderActionContext.Provider value={action}>{children}</OrderActionContext.Provider>
    </OrderValueContext.Provider>
  )
}

export default OrderContextProvider
