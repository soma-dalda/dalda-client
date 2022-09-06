import useError from '@/hooks/useError'
import { useCallback, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useGetTemplate from './useGetTemplate'
import usePostTemplates from './usePostTemplates'
import usePutTemplate from './usePutTemplate'
import useTemplateActionContext from './useTemplateActionContext'
import useTemplateValueContext from './useTemplateValueContext'

const useTemplate = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { dispatchUpdateError } = useError()
  const template = useTemplateValueContext()
  const { handleUpdateTitle, handleAddQuestion, handleUpdateTemplate, handleResetTemplate } =
    useTemplateActionContext()
  const { mutate: putMutate, isLoading: putLoading } = usePutTemplate({
    onSettled: () => {
      handleResetTemplate()
      navigate(-1)
    },
    onError: () => {
      dispatchUpdateError('주문서 폼 수정을 실패 하였습니다')
    },
  })

  const { mutate: postMutate, isLoading: postLoding } = usePostTemplates({
    onSettled: () => {
      handleResetTemplate()
      navigate(-1)
    },
    onError() {
      dispatchUpdateError('주문서 폼 등록을 실패 하였습니다')
    },
  })

  const { remove, isLoading: getLoading } = useGetTemplate(id ?? '', {
    onSuccess: (data) => {
      if (data) {
        handleUpdateTemplate(data)
      }
    },
    retry: false,
    onError() {
      dispatchUpdateError('존재 하지 않는 주문서 입니다')
    },
  })

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (template.id) {
        putMutate(template)
      } else {
        postMutate(template)
      }
    },
    [template]
  )

  useEffect(() => {
    handleResetTemplate()
    return () => {
      remove()
    }
  }, [])

  return {
    template,
    handleUpdateTitle,
    handleAddQuestion,
    handleSubmit,
    isLoading: putLoading || postLoding || getLoading,
  }
}

export default useTemplate
