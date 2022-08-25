import { addTemplate, deleteTemplate } from '@/pages/Template/slice/templateSlice'
import { useAppSelector, useAppDispatch } from '@/store/config'
import { useState, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const useTemplates = () => {
  const { domain } = useParams()
  const templates = useAppSelector((state) => state.template)
  const dispatch = useAppDispatch()

  const navigate = useNavigate()
  const [templateId, setTemplateId] = useState('')

  const handleAddTemplateClick = useCallback(() => {
    const uuid =
      Math.floor(Math.random() * 10009) +
      Math.floor(Math.random() * 10009) * Math.floor(Math.random() * 10009)
    dispatch(
      addTemplate({
        uuid: `${uuid}`,
      })
    )
    navigate(`/${domain}/templates/${uuid}`)
  }, [])

  const handleUpdateTempalateClick = useCallback(() => {
    if (templateId) {
      navigate(`/${domain}/templates/${templateId}`)
    }
  }, [templateId, domain])

  const handleChangeTemplateId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTemplateId(e.target.id)
  }, [])

  const handleClickDeleteButton = useCallback((id: string) => {
    dispatch(deleteTemplate({ id }))
  }, [])

  return {
    templates,
    templateId,
    handleChangeTemplateId,
    handleClickDeleteButton,
    handleUpdateTempalateClick,
    handleAddTemplateClick,
  }
}

export default useTemplates
