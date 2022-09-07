import useError from '@/hooks/useError'
import useGetCompanyRequest from '@/pages/Domain/hooks/useGetCompanyRequest'
import useGetTemplates from '@/pages/Domain/hooks/useGetTemplates'
import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const useTemplates = () => {
  const { dispatchUpdateError } = useError()

  const { data: company } = useGetCompanyRequest({
    onError: (err) => {
      dispatchUpdateError(err.response?.data.error.message)
    },
  })

  const { data: templates } = useGetTemplates(
    { companyId: company?.id },
    {
      onError: (err) => {
        dispatchUpdateError(err.response?.data.error.message)
      },
    }
  )

  const navigate = useNavigate()
  const [templateId, setTemplateId] = useState('')

  const handleAddTemplateClick = useCallback(() => {
    navigate(`/post`)
  }, [])

  const handleUpdateTempalateClick = useCallback(() => {
    if (templateId) {
      navigate(`${templateId}`)
    }
  }, [templateId])

  const handleChangeTemplateId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTemplateId(e.target.id)
  }, [])

  return {
    templates,
    templateId,
    handleChangeTemplateId,
    handleUpdateTempalateClick,
    handleAddTemplateClick,
  }
}

export default useTemplates
