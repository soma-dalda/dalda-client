import useGetTemplate from '@/hooks/useGetTemplate'
import useStatus from '@/hooks/useStatus'
import useToast from '@/hooks/useToast'
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
  const { suceess } = useToast('제출 완료')

  useGetTemplate(id ?? '', {
    onSuccess: (data) => {
      setOrder((draft) => {
        draft.companyId = data.userId
        draft.templateId = id
        draft.answers = Array(data?.contentList.length).fill([''])
        draft.templateResponses = Array(data?.contentList.length).fill({
          question: '',
          answer: [''],
        })
      })
    },
    onError: (err) => {
      if (err.status === AxiosError.ECONNABORTED) {
        dispatchUpdateError({ code: 400, message: err.message })
      } else {
        dispatchUpdateError({ code: err.code, message: err.response?.data.message })
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
      suceess.show()
    },
    onError: (err) => {
      if (err.status === AxiosError.ECONNABORTED) {
        dispatchUpdateError({ code: 400, message: err.message })
      } else {
        dispatchUpdateError({ code: err.code, message: err.response?.data.message })
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
    },
  })

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
      navigate({ hash: `${step}` })
    },
    [location]
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
          draft.templateResponses[index].question = e.target.name
          draft.templateResponses[index].answer = [e.target.value]
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
            draft.templateResponses[index].question = e.target.name
            draft.templateResponses[index].answer = [e.target.value]
          })
        }

        if (!e.target.checked) {
          setOrder((draft) => {
            const options: string[] = draft.answers[index]
            draft.answers[index] = options.filter((option) => option !== e.target.value)
            draft.templateResponses[index].question = e.target.name
            draft.templateResponses[index].answer = [e.target.value]
          })
        }
      },
      []
    )

  const handleChangeRadio = useCallback(
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setOrder((draft) => {
        draft.answers[index] = [e.target.value]
        draft.templateResponses[index].question = e.target.name
        draft.templateResponses[index].answer = [e.target.value]
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

  useEffect(() => {
    return () => {
      hide()
    }
  }, [])

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
