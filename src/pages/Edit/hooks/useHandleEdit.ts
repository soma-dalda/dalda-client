import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import useCompanyEditValue from './useCompanyEditValue'
import usePatchUser from './usePatchCompany'
import useEditMount from './useEditMount'

const useHandleEdit = () => {
  const company = useCompanyEditValue()
  const navigate = useNavigate()
  const { isLoading: getIsLoading } = useEditMount()

  const { mutate, isLoading: putIsLoading } = usePatchUser({
    onSuccess: () => {
      if (company.companyDomain) {
        navigate(`/${company.companyDomain}`)
      }
    },
  })

  const handleSaveButtonClick = useCallback(
    (e: React.FormEvent<React.ElementType<any> | HTMLFormElement>) => {
      e.preventDefault()
      if (company) {
        mutate({
          ...company,
        })
      }
    },
    [company]
  )

  return {
    handleSaveButtonClick,
    isLoading: getIsLoading || putIsLoading,
  }
}

export default useHandleEdit
