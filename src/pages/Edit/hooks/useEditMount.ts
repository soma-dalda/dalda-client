import useGetUser from '@/hooks/useGetUser'
import useToast from '@/hooks/useToast'
import { useNavigate } from 'react-router-dom'
import useCompanyEditAction from './useCompanyEditAction'

const useEditMount = () => {
  const navigate = useNavigate()

  const { error } = useToast('로그인 후 이용하세요', {
    position: 'top',
    subPosition: 'right',
  })

  const { hanldeComapny } = useCompanyEditAction()

  return useGetUser({
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    onSuccess: (data) => {
      hanldeComapny({ ...data })
    },
    onError: () => {
      error.show()
      navigate(-1)
    },
  })
}

export default useEditMount
