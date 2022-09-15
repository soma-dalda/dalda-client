import useStatus from '@/hooks/useStatus'
import useGetCompanyRequest from '@/pages/Domain/hooks/useGetCompanyRequest'
import useGetTemplates from '@/pages/Domain/hooks/useGetTemplates'
import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const useTemplates = () => {
  const { dispatchUpdateError } = useStatus()

  const { data: company } = useGetCompanyRequest({
    onError: (err) => {
      dispatchUpdateError({ message: err.response?.data.error.message, code: err.code })
    },
  })

  const { data: templates } = useGetTemplates(
    { companyId: company?.id },
    {
      onError: (err) => {
        dispatchUpdateError({ message: err.response?.data.error.message, code: err.code })
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
