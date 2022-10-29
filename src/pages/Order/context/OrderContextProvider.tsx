import useGetTemplate from '@/hooks/useGetTemplate'
import useStatus from '@/hooks/useStatus'
import { Order } from '@/type'
import { useModal } from '@jaewoong2/modal'
import { AxiosError } from 'axios'
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
  const [current, setCurrent] = useState(+location.hash.replace(/#/g, '0'))
  const [order, setOrder] = useImmer<Order & { answers: string[][] }>({
    ...defaultOrder,
    templateId: id,
  })

  useGetTemplate(id ?? '', {
    onSuccess: (data) => {
      setOrder((prev) => ({
        ...prev,
        companyId: data.userId,
        templateId: id,
        answers: Array(data?.contentList.length).fill(''),
      }))
    },
    onError: (err) => {
      if (err.status === AxiosError.ECONNABORTED) {
        dispatchUpdateError({ code: 400, message: err.message })
      } else {
        dispatchUpdateError({ code: err.code, message: err.response?.data.error.message })
      }
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
      if (err.status === AxiosError.ECONNABORTED) {
        dispatchUpdateError({ code: 400, message: err.message })
      } else {
        dispatchUpdateError({ code: err.code, message: err.response?.data.error.message })
      }
    },
  })

  const { show, hide } = useModal('text', {
    message: '제출 하시겠습니까?',
    header: null,
    description: null,
    modalWidth: '300px',
    buttonText: '제출',
    buttonType: 'primary',
    onClickButton: () => {
      const { companyId, templateId, image, templateResponses, pickupDate, pickupNoticePhone } =
        order
      mutate({ companyId, templateId, image, templateResponses, pickupDate, pickupNoticePhone })
      hide()
    },
  })

  const setTemplateResponse = ({
    question,
    answer,
    index,
  }: {
    question: string
    answer: string[]
    index: number
  }) => {
    setOrder((draft) => {
      if (draft.templateResponses) {
        if (draft.templateResponses[index]) {
          draft.templateResponses[index] = { question, answer }
        } else {
          draft.templateResponses.push({ question, answer })
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
      draft.image = url
    })
  }, [])

  const handleChangeTextArea: (index: number) => React.ChangeEventHandler<HTMLTextAreaElement> =
    useCallback(
      (index) => (e) => {
        setOrder((draft) => {
          draft.answers[index] = [e.target.value]
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
            if (draft.answers[index]) {
              draft.answers[index] = [...draft.answers[index], e.target.value]
            } else {
              draft.answers[index] = [e.target.value]
            }
            setTemplateResponse({ question: e.target.name, answer: draft.answers[index], index })
          })
        }

        if (!e.target.checked) {
          setOrder((draft) => {
            const options: string[] = draft.answers[index]
            draft.answers[index] = options.filter((option) => option !== e.target.value)

            setTemplateResponse({ question: e.target.name, answer: draft.answers[index], index })
          })
        }
      },
      []
    )

  const handleChangeRadio = useCallback(
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setOrder((draft) => {
        draft.answers[index] = [e.target.value]
        setTemplateResponse({ question: e.target.name, answer: draft.answers[index], index })
      })
    },
    []
  )

  const handleSubmit = useCallback(() => {
    show()
  }, [order])

  useEffect(() => {
    setCurrent(+location.hash.slice(1))
  }, [location.hash])

  const value = useMemo(() => ({ current, order }), [current, order])
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
