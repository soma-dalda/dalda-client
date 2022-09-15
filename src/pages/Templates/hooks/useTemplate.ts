import useStatus from '@/hooks/useStatus'
import { useCallback, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useGetTemplate from '../../../hooks/useGetTemplate'
import usePostTemplates from './usePostTemplates'
import usePutTemplate from './usePutTemplate'
import useTemplateActionContext from './useTemplateActionContext'
import useTemplateValueContext from './useTemplateValueContext'

const useTemplate = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { dispatchUpdateError } = useStatus()
  const template = useTemplateValueContext()
  const { handleUpdateTitle, handleAddQuestion, handleUpdateTemplate, handleResetTemplate } =
    useTemplateActionContext()

  const { mutate: putMutate, isLoading: putLoading } = usePutTemplate({
    onSettled: () => {
      handleResetTemplate()
      navigate(-1)
    },
    onError: (err) => {
      dispatchUpdateError({ message: '주문서 폼 수정을 실패 하였습니다', code: err.code })
    },
  })

  const { mutate: postMutate, isLoading: postLoding } = usePostTemplates({
    onSettled: () => {
      handleResetTemplate()
      navigate(-1)
    },
    onError: (err) => {
      dispatchUpdateError({ message: '주문서 폼 등록을 실패 하였습니다', code: err.code })
    },
  })

  const { remove, isLoading: getLoading } = useGetTemplate(id ?? '', {
    onSuccess: (data) => {
      if (data) {
        handleUpdateTemplate(data)
      }
    },
    retry: false,
    onError: (err) => {
      dispatchUpdateError({ message: '존재 하지 않는 주문서', code: err.code })
    },
    enabled: Boolean(id !== 'post') && Boolean(id),
  })

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (template.id) {
        putMutate({ ...template })
      } else {
        postMutate({ ...template })
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
