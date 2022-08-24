import { useState, useCallback } from 'react'
import { useRecoilState } from 'recoil'
import TemplateState from '../recoil/atoms/templatesState'

const useHandleTemplates = () => {
  const [templates, setTemplates] = useRecoilState(TemplateState)
  const [type, setType] = useState<'option' | 'description' | string>('option')

  const addTemplate = useCallback(() => {
    if (type === 'option') {
      setTemplates((prev) =>
        prev
          ? [...prev, { type: 'MultiOption', payload: { images: [], options: [] } }]
          : [{ type: 'MultiOption', payload: { images: [], options: [] } }]
      )
    }

    if (type === 'description') {
      setTemplates((prev) =>
        prev
          ? [...prev, { type: 'ShortDescription', payload: { images: [], description: '' } }]
          : [{ type: 'ShortDescription', payload: { images: [], description: '' } }]
      )
    }
  }, [type])

  const deleteTemplate = useCallback((index: number) => {
    setTemplates((prev) => (prev ? prev.filter((_, i) => i !== index) : null))
  }, [])

  const onChangeType: React.ChangeEventHandler<HTMLSelectElement> = useCallback((e) => {
    setType(e.target.value)
  }, [])

  const updateDetailType: (index: number) => React.ChangeEventHandler<HTMLSelectElement> =
    useCallback(
      (index: number) => (e) => {
        setTemplates((prev) => {
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

  return { templates, addTemplate, deleteTemplate, onChangeType, type, updateDetailType }
}

export default useHandleTemplates
