import { useCallback, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useImmer } from 'use-immer'
import usePostOrder from './usePostOrder'

const defaultOrder = {
  templateId: '',
  answers: [''],
}

const useHandleOrder = () => {
  const { id, domain } = useParams()
  const navigate = useNavigate()

  const [checked, setChecked] = useState<number[]>([])
  const [current, setCurrent] = useState(0)
  const [order, setOrder] = useImmer({ ...defaultOrder, templateId: id })

  const { mutate } = usePostOrder({
    onSuccess: () => {
      setCurrent(0)
      setOrder({ ...defaultOrder, templateId: id })
      navigate(`/${domain}`)
    },
  })
  const handleClickStep = useCallback(
    (step: number) => () => {
      setCurrent(step)
      navigate(`#${step}`)
    },
    []
  )

  const handleChangeValue: (index: number) => React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (index) => (e) => {
        if (e.target.type === 'checkbox') {
          const checkedIndex = e.target.dataset.id
          if (e.target.checked) {
            setOrder((draft) => {
              if (checkedIndex) {
                setChecked((prev) => [...prev, +checkedIndex])
              }
              if (draft.answers[index]) {
                draft.answers[index] = JSON.stringify([
                  ...JSON.parse(draft.answers[index]),
                  e.target.value,
                ])
              } else {
                draft.answers[index] = JSON.stringify([e.target.value])
              }
            })
          }

          if (!e.target.checked) {
            if (checkedIndex) {
              setChecked((prev) => prev.filter((v) => v !== +checkedIndex))
            }
            setOrder((draft) => {
              const options: string[] = JSON.parse(draft.answers[index])
              draft.answers[index] = JSON.stringify(
                options.filter((option) => option !== e.target.value)
              )
            })
          }
        } else {
          setOrder((draft) => {
            draft.answers[index] = e.target.value
          })
        }
      },
      [checked]
    )

  const handleClickBottomButton = useCallback(() => {
    if (current + 1 < order.answers.length) {
      setCurrent((prev) => prev + 1)
      navigate(`#${current}`)
    } else {
      mutate({ ...order })
    }
  }, [current, order])

  return {
    handleClickStep,
    handleChangeValue,
    handleClickBottomButton,
    setOrder,
    current,
    order,
    checked,
  }
}

export default useHandleOrder
