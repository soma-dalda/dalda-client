import useGetCompanyRequest from '@/pages/Domain/hooks/useGetCompanyRequest'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import useError from '@/hooks/useError'
import useCompanyEditAction from './useCompanyEditAction'
import useCompanyEditValue from './useCompanyEditValue'
import usePutUser from './usePutUser'
import { validateBlank } from '../utils'

const useCompany = () => {
  const company = useCompanyEditValue()
  const { dispatchUpdateError } = useError()
  const navigate = useNavigate()
  const { setCompany, handleUpdateError } = useCompanyEditAction()
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

  const checkCompanyBlank = useCallback(() => {
    if (!validateBlank(company?.companyDomain)) {
      handleUpdateError('companyDomain')
      return false
    }
    if (!validateBlank(company?.companyIntroduction)) {
      handleUpdateError('companyIntroduction')
      return false
    }
    if (!validateBlank(company?.companyLocation)) {
      handleUpdateError('companyLocation')
      return false
    }
    if (!validateBlank(company?.companyName)) {
      handleUpdateError('companyName')
      return false
    }
    handleUpdateError(null)
    return true
  }, [company])

  const handleSaveButtonClick = useCallback(() => {
    if (user && company) {
      if (checkCompanyBlank()) {
        mutate({
          ...company,
          id: user?.id,
        })
      }
    }
  }, [user, company])

  return {
    isLoading,
    handleSaveButtonClick,
  }
}

export default useCompany
