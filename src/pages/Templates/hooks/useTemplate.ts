import useStatus from '@/hooks/useStatus'
import { useToast } from '@jaewoong2/toast'
import { AxiosError } from 'axios'
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

  const { show } = useToast('성공')

  const { handleUpdateTitle, handleAddQuestion, handleUpdateTemplate, handleResetTemplate } =
    useTemplateActionContext()

  const { mutate: putMutate, isLoading: putLoading } = usePutTemplate({
    onSettled: () => {
      handleResetTemplate()
      navigate(-1)
    },
    onSuccess: () => {
      show()
    },
    onError: (err) => {
      if (err.status === AxiosError.ECONNABORTED) {
        dispatchUpdateError({ code: 400, message: err.message })
      } else {
        dispatchUpdateError({ code: err.code, message: err.response?.data.error.message })
      }
    },
  })

  const { mutate: postMutate, isLoading: postLoding } = usePostTemplates({
    onSettled: () => {
      handleResetTemplate()
      navigate(-1)
    },
    onSuccess: () => {
      show()
    },
    onError: (err) => {
      if (err.status === AxiosError.ECONNABORTED) {
        dispatchUpdateError({ code: 400, message: err.message })
      } else {
        dispatchUpdateError({ code: err.code, message: err.response?.data.error.message })
      }
    },
  })

  const {
    remove,
    isLoading: getLoading,
    refetch,
  } = useGetTemplate(id ?? '', {
    onSuccess: (data) => {
      if (data) {
        handleUpdateTemplate(data)
      }
    },
    onError: (err) => {
      if (err.status === AxiosError.ECONNABORTED) {
        dispatchUpdateError({ code: 400, message: err.message })
      } else {
        dispatchUpdateError({ code: err.code, message: err.response?.data.error.message })
      }
    },
    enabled: false,
  })

  useEffect(() => {
    if (id) {
      refetch()
    }
  }, [id])

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
