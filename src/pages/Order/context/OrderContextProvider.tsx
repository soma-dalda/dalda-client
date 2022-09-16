import useGetTemplate from '@/hooks/useGetTemplate'
import useStatus from '@/hooks/useStatus'
import { Order } from '@/type'
import React, { PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useImmer } from 'use-immer'
import usePostOrder from '../hooks/usePostOrder'
import { defaultOrder, OrderAction, OrderActionContext, OrderValueContext } from './OrderContext'

const OrderContextProvider = ({ children }: PropsWithChildren) => {
  const { id, domain } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  const { dispatchUpdateError } = useStatus()
  const [checked, setChecked] = useState<number[]>([])
  const [current, setCurrent] = useState(+location.hash.replace(/#/g, '0'))
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

  const handlePickupdate = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setOrder((draft) => {
      draft.pickupDate = e.target.value
    })
  }, [])

  const handlePickupPhoneNumber = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setOrder((draft) => {
      draft.pickupNoticePhone = e.target.value
    })
  }, [])

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

  const handleSubmit = useCallback(() => {
    mutate(order)
  }, [order])

  useEffect(() => {
    setCurrent(+location.hash.slice(1))
  }, [location.hash])

  const value = useMemo(() => ({ current, order, checked }), [current, order, checked])
  const action: OrderAction = useMemo(
    () => ({
      handleClickStep,
      handleSubmit,
      handleChangeCheckbox,
      handleAddImage,
      handleChangeRadio,
      handlePickupPhoneNumber,
      handleChangeTextArea,
      handlePickupdate,
      setOrder,
    }),
    [
      handleClickStep,
      handlePickupdate,
      handleAddImage,
      handleSubmit,
      handleChangeCheckbox,
      handleChangeRadio,
      handleChangeTextArea,
      handlePickupPhoneNumber,
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
