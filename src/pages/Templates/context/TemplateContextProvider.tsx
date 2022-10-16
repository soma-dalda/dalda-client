import React, { PropsWithChildren, useCallback, useMemo } from 'react'
import { useImmer } from 'use-immer'
import { OptionQuestion, DescriptionQuestion, Question, Template } from '@/type'
import useGetCompanyRequest from '@/pages/Domain/hooks/useGetCompanyRequest'
import useStatus from '@/hooks/useStatus'
import { AxiosError } from 'axios'
import { TemplateValueContext, defaultValue, TemplateActionContext } from './TemplateContext'

export const defaultOptionQuestion: OptionQuestion = {
  type: 'singleObjective',
  question: '',
  options: [],
  img: '',
}
export const defaultDescriptionQuestion: DescriptionQuestion = {
  type: 'subjective',
  question: '',
  options: null,
  img: '',
}

const TemplateContextProvider = ({ children }: PropsWithChildren) => {
  const [template, setTemplate] = useImmer(defaultValue)
  const { dispatchUpdateError } = useStatus()
  const { refetch } = useGetCompanyRequest({
    onSuccess: (data) => {
      setTemplate((draft) => {
        draft.userId = data.id
      })
    },
    onError: (err) => {
      if (err.status === AxiosError.ECONNABORTED) {
        dispatchUpdateError({ code: 400, message: err.message })
      } else {
        dispatchUpdateError({ code: err.code, message: err.response?.data.error.message })
      }
    },
  })

  const handleUpdateImage = useCallback(
    (index: number) => (imageUrl: string) => {
      setTemplate((draft) => {
        draft.content[index].img = imageUrl
      })
    },
    []
  )

  const handleResetTemplate = useCallback(() => {
    setTemplate(defaultValue)
    refetch()
  }, [])

  const handleUpdateTemplate = useCallback((newTemplate: Template) => {
    setTemplate((draft) => ({ ...draft, ...newTemplate }))
  }, [])

  const handleUpdateTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTemplate((draft) => {
      draft.title = e.target.value
    })
  }, [])

  const handleAddQuestion = useCallback((type: Question['type']) => {
    setTemplate((draft) => {
      if (type === 'multiObjective' || type === 'singleObjective') {
        draft.content = [...draft.content, defaultOptionQuestion]
      }
      if (type === 'subjective') {
        draft.content = [...draft.content, defaultDescriptionQuestion]
      }
    })
  }, [])
  const handleDeleteQuestion = useCallback((index: number) => {
    setTemplate((draft) => {
      draft.content = draft.content.filter((_, i) => i !== index)
    })
  }, [])
  const handleUpdateQuestionTitle = useCallback(
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setTemplate((draft) => {
        draft.content[index].question = e.target.value
      })
    },
    []
  )
  const handleAddOption = useCallback((index: number) => {
    setTemplate((draft) => {
      const content = draft.content[index]
      if (content.type === 'multiObjective' || content.type === 'singleObjective') {
        content.options = [...content.options, '']
      }
    })
  }, [])
  const handleUpdateOption = useCallback(
    ({ contentIndex, optionIndex }: { contentIndex: number; optionIndex: number }) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setTemplate((draft) => {
          const content = draft.content[contentIndex]
          if (content.type === 'multiObjective' || content.type === 'singleObjective') {
            content.options[optionIndex] = e.target.value
          }
        })
      },
    []
  )
  const handleDeleteOption = useCallback(
    ({ contentIndex, optionIndex }: { contentIndex: number; optionIndex: number }) =>
      () => {
        setTemplate((draft) => {
          const content = draft.content[contentIndex]
          if (content.type === 'multiObjective' || content.type === 'singleObjective') {
            content.options = content.options.filter((_, i) => i !== optionIndex)
          }
        })
      },
    []
  )
  const handleUpdateDetailType = useCallback(
    ({ contentIndex, detailType }: { contentIndex: number; detailType: Question['type'] }) => {
      setTemplate((draft) => {
        const content = draft.content[contentIndex]
        content.type = detailType
      })
    },
    []
  )

  const action = useMemo(
    () => ({
      handleUpdateTitle,
      handleAddQuestion,
      handleDeleteQuestion,
      handleUpdateQuestionTitle,
      handleAddOption,
      handleUpdateOption,
      handleDeleteOption,
      handleUpdateDetailType,
      handleUpdateTemplate,
      handleResetTemplate,
      handleUpdateImage,
    }),
    [
      handleUpdateTitle,
      handleAddQuestion,
      handleDeleteQuestion,
      handleUpdateQuestionTitle,
      handleAddOption,
      handleUpdateOption,
      handleDeleteOption,
      handleUpdateDetailType,
      handleUpdateTemplate,
      handleResetTemplate,
      handleUpdateImage,
    ]
  )

  return (
    <TemplateValueContext.Provider value={template}>
      <TemplateActionContext.Provider value={action}>{children}</TemplateActionContext.Provider>
    </TemplateValueContext.Provider>
  )
}

export default TemplateContextProvider
