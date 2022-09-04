import useGetCompanyRequest from '@/pages/Domain/hooks/useGetCompanyRequest'
import useError from '@/hooks/useError'
import useCompanyEditAction from './useCompanyEditAction'

const useEditMount = () => {
  const { dispatchUpdateError } = useError()
  const { setCompany } = useCompanyEditAction()

  return useGetCompanyRequest({
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
}

export default useEditMount
