import useStatus from '@/hooks/useStatus'
import useGetCompanyRequest from '@/pages/Domain/hooks/useGetCompanyRequest'
import useGetTemplates from '@/pages/Domain/hooks/useGetTemplates'
import { AxiosError } from 'axios'
import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const useTemplates = () => {
  const { dispatchUpdateError } = useStatus()

  const { data: company } = useGetCompanyRequest({
    onError: (err) => {
      if (err.status === AxiosError.ECONNABORTED) {
        dispatchUpdateError({ code: 400, message: err.message })
      } else {
        dispatchUpdateError({ code: err.code, message: err.response?.data.message })
      }
    },
  })

  const { data: templates } = useGetTemplates(
    { companyId: company?.id },
    {
      onError: (err) => {
        if (err.status === AxiosError.ECONNABORTED) {
          dispatchUpdateError({ code: 400, message: err.message })
        } else {
          dispatchUpdateError({ code: err.code, message: err.response?.data.message })
        }
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
