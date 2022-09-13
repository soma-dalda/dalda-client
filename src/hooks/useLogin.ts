import { getLogin } from '@/apis/service'
import { RequestError, User } from '@/type'
import { QueryKey, useQuery, UseQueryOptions } from 'react-query'
import useGetUser from './useGetUser'

type UseQueryOption = Omit<
  UseQueryOptions<User, RequestError, User, QueryKey>,
  'queryKey' | 'queryFn'
>

const useLogin = <T extends 'google' | 'naver' | 'kakao'>(
  registrationId: T | undefined,
  options: UseQueryOption
) => {
  const { refetch } = useGetUser({ enabled: false })

  return useQuery<User, RequestError>('login', () => getLogin({ registrationId }), {
    ...options,
    onSuccess: (data) => {
      if (options.onSuccess) {
        options.onSuccess(data)
      }
      refetch()
    },
  })
}

export default useLogin
