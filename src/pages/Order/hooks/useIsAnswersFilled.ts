import useGetTemplate from '@/hooks/useGetTemplate'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useOrderValueContext from './useOrderValueContext'

const useIsAnswersFilled = () => {
  const { id } = useParams()
  const [isAnswersFilled, setIsAnswersFilled] = useState(false)
  const { order } = useOrderValueContext()

  const { data: template } = useGetTemplate(id ?? '', {
    enabled: false,
  })

  useEffect(() => {
    setIsAnswersFilled(
      order.answers.map((answer) => answer.map((v) => v.trim() !== '').filter((v) => !!v))
        .length === order.answers.length
    )
  }, [order, template])

  return isAnswersFilled
}

export default useIsAnswersFilled
