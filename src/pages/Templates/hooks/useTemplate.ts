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
  const template = useTemplateValueContext()
  const { handleUpdateTitle, handleAddQuestion, handleUpdateTemplate, handleResetTemplate } =
    useTemplateActionContext()

  const { mutate: putMutate, isLoading: putLoading } = usePutTemplate({
    onSettled: () => {
      handleResetTemplate()
      navigate(-1)
    },
  })

  const { mutate: postMutate, isLoading: postLoding } = usePostTemplates({
    onSettled: () => {
      handleResetTemplate()
      navigate(-1)
    },
  })

  const { isLoading: getLoading } = useGetTemplate(id ?? '', {
    onSuccess: (data) => {
      if (data) {
        handleUpdateTemplate(data)
      }
    },
    retry: false,
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
