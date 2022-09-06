import useGetUser from '@/hooks/useGetUser'
import useCompanyEditAction from './useCompanyEditAction'

const useEditMount = () => {
  const { setCompany } = useCompanyEditAction()

  return useGetUser({
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    onSuccess: (data) => {
      setCompany(data)
    },
  })
}

export default useEditMount
