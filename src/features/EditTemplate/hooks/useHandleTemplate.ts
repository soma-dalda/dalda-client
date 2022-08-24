import { useState, useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { DescriptionTemplate, OptionTemplate } from '../types/index'

import TemplateState from '../recoil/atoms/templateState'

const defaultOptionQuestion = {
  question: '',
  type: 'multiObjective',
  images: [],
  options: [],
}

const defaultDescriptionQuestion = {
  question: '',
  type: 'shortSubjective',
  options: null,
  images: [],
}

const useHandleTemplate = () => {
  const [template, setTemplate] = useRecoilState(TemplateState)
  const [type, setType] = useState<'option' | 'description' | string>('option')

  const addTemplate = useCallback(() => {
    if (type === 'option') {
      setTemplate((prev) => (prev ? [...prev, defaultOptionQuestion] : [defaultOptionQuestion]))
    }

    if (type === 'description') {
      setTemplate((prev) =>
        prev ? [...prev, defaultDescriptionQuestion] : [defaultDescriptionQuestion]
      )
    }
  }, [type])

  const deleteTemplate = useCallback((index: number) => {
    setTemplate((prev) => (prev ? prev.filter((_, i) => i !== index) : null))
  }, [])

  const onChangeType: React.ChangeEventHandler<HTMLSelectElement> = useCallback((e) => {
    setType(e.target.value)
  }, [])

  const updateDetailType: (index: number) => React.ChangeEventHandler<HTMLSelectElement> =
    useCallback(
      (index: number) => (e) => {
        setTemplate((prev) => {
          if (prev) {
            return prev.map((value, i) =>
              i === index ? { ...value, type: e.target.value } : value
            )
          }
          return prev
        })
      },
      []
    )

  const setQuestion = (
    index: number,
    callback: <T extends OptionTemplate | DescriptionTemplate>(parmas: T) => T
  ) => {
    setTemplate((prevTemplate) => {
      if (prevTemplate) {
        return prevTemplate.map((question, i) => (i === index ? callback(question) : question))
      }
      return prevTemplate
    })
  }

  return {
    template,
    addTemplate,
    deleteTemplate,
    onChangeType,
    type,
    updateDetailType,
    setQuestion,
  }
}

export default useHandleTemplate
