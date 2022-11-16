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
    const requiredAnswers = template?.contentList.map((templateContent, i) => {
      if (templateContent.required) {
        return order.answers[i]
      }
      return ['']
    })

    if (!requiredAnswers) {
      setIsAnswersFilled(true)
    } else {
      setIsAnswersFilled(
        !(
          requiredAnswers
            ?.map((answer) => Boolean(answer?.filter((ans) => ans?.trim() !== '')?.length > 0))
            ?.filter((answer) => answer === false)?.length > 0
        )
      )
    }
  }, [order, template])

  return isAnswersFilled
}

export default useIsAnswersFilled
