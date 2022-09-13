import React, { PropsWithChildren, useCallback, useMemo } from 'react'
import { useImmer } from 'use-immer'
import {
  OptionQuestion,
  DescriptionQuestion,
  Question,
  OptionQuestionDetailType,
  DescriptionQuestionDetailType,
  Template,
} from '@/type'
import useGetCompanyRequest from '@/pages/Domain/hooks/useGetCompanyRequest'
import useError from '@/hooks/useError'
import { TemplateValueContext, defaultValue, TemplateActionContext } from './TemplateContext'

export const defaultOptionQuestion: OptionQuestion = {
  type: 'option',
  question: '',
  detailType: 'multiObjective',
  options: [],
  images: [],
}
export const defaultDescriptionQuestion: DescriptionQuestion = {
  type: 'description',
  detailType: 'longSubjective',
  question: '',
  options: null,
  images: [],
}

const TemplateContextProvider = ({ children }: PropsWithChildren) => {
  const [template, setTemplate] = useImmer(defaultValue)
  const { dispatchUpdateError } = useError()
  const { refetch } = useGetCompanyRequest({
    onSuccess: (data) => {
      setTemplate((draft) => {
        draft.companyId = data.id
      })
    },
    onError: () => {
      dispatchUpdateError('존재하지 않는 업체 입니다')
    },
  })

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
      if (type === 'option') {
        draft.content = [...draft.content, defaultOptionQuestion]
      }
      if (type === 'description') {
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
      if (content.type === 'option') {
        content.options = [...content.options, '']
      }
    })
  }, [])
  const handleUpdateOption = useCallback(
    ({ contentIndex, optionIndex }: { contentIndex: number; optionIndex: number }) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setTemplate((draft) => {
          const content = draft.content[contentIndex]
          if (content.type === 'option') {
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
          if (content.type === 'option') {
            content.options = content.options.filter((_, i) => i !== optionIndex)
          }
        })
      },
    []
  )
  const handleUpdateDetailType = useCallback(
    ({
      contentIndex,
      detailType,
    }: {
      contentIndex: number
      detailType: OptionQuestionDetailType | DescriptionQuestionDetailType
    }) => {
      setTemplate((draft) => {
        const content = draft.content[contentIndex]
        content.detailType = detailType
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
    }),
    []
  )

  return (
    <TemplateValueContext.Provider value={template}>
      <TemplateActionContext.Provider value={action}>{children}</TemplateActionContext.Provider>
    </TemplateValueContext.Provider>
  )
}

export default TemplateContextProvider
