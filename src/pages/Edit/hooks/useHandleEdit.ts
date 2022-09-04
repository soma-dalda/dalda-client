import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import useError from '@/hooks/useError'
import useCompanyEditValue from './useCompanyEditValue'
import usePutUser from './usePutUser'
import useEditMount from './useEditMount'

const useHandleEdit = () => {
  const company = useCompanyEditValue()
  const navigate = useNavigate()
  const { data: user, isLoading: getIsLoading } = useEditMount()
  const { dispatchUpdateError } = useError()

  const { mutate, isLoading: putIsLoading } = usePutUser({
    onSuccess: () => {
      if (company.companyDomain) {
        navigate(`/${company.companyDomain}`)
      }
    },
    onError: (err) => {
      dispatchUpdateError(err.response?.data.error.message)
    },
  })

  const handleSaveButtonClick = useCallback(
    (e: React.FormEvent<React.ElementType<any> | HTMLFormElement>) => {
      e.preventDefault()
      if (user && company) {
        mutate({
          ...company,
          id: user?.id,
        })
      }
    },
    [user, company]
  )

  return {
    handleSaveButtonClick,
    isLoading: getIsLoading || putIsLoading,
  }
}

export default useHandleEdit
