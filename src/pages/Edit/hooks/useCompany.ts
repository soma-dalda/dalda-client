import useGetCompanyRequest from '@/pages/Domain/hooks/useGetCompanyRequest'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import useError from '@/hooks/useError'
import useCompanyEditAction from './useCompanyEditAction'
import useCompanyEditValue from './useCompanyEditValue'
import usePutUser from './usePutUser'

const useCompany = () => {
  const company = useCompanyEditValue()
  const { dispatchUpdateError } = useError()
  const navigate = useNavigate()
  const { setCompany } = useCompanyEditAction()
  const { data: user } = useGetCompanyRequest({
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    onSuccess: (data) => {
      setCompany(data)
    },
    onError: (err) => {
      dispatchUpdateError(err.response?.data.error.message)
    },
  })

  const { mutate, isLoading } = usePutUser({
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
    isLoading,
    handleSaveButtonClick,
  }
}

export default useCompany
