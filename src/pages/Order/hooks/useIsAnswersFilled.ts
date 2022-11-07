import useGetTemplate from '@/hooks/useGetTemplate'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import useOrderValueContext from './useOrderValueContext'

const useIsAnswersFilled = () => {
  const { id } = useParams()
  const { order } = useOrderValueContext()

  const { data: template } = useGetTemplate(id ?? '', {
    enabled: false,
  })

  const isAnswersFilled = useMemo(() => {
    const requiredAnswers = template?.contentList.map((templateContent, i) => {
      if (templateContent.required) {
        return order.answers[i]
      }
      return ['']
    })

    if (!requiredAnswers) {
      return true
    }

    return !(
      requiredAnswers
        ?.map((answer) => Boolean(answer?.filter((ans) => ans?.trim() !== '')?.length > 0))
        ?.filter((answer) => answer === false)?.length > 0
    )
  }, [order.answers, template?.contentList])

  return isAnswersFilled
}

export default useIsAnswersFilled
