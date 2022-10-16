import useGetUser from '@/hooks/useGetUser'
import { useToast } from '@jaewoong2/toast'
import { useNavigate } from 'react-router-dom'
import useCompanyEditAction from './useCompanyEditAction'

const useEditMount = () => {
  const navigate = useNavigate()
  const { show } = useToast('로그인 후 이용하세요', {
    type: 'warn',
    position: 'top',
    subPosition: 'right',
    color: 'white',
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
      show()
      navigate(-1)
    },
  })
}

export default useEditMount
