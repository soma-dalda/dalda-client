import { getLogin } from '@/apis/service'
import { RequestError, User } from '@/type'
import { QueryKey, useQuery, UseQueryOptions } from 'react-query'

type UseQueryOption = Omit<
  UseQueryOptions<User, RequestError, User, QueryKey>,
  'queryKey' | 'queryFn'
>

const useLogin = <T extends 'google' | 'naver' | 'kakao'>(
  registrationId: T | undefined,
  options: UseQueryOption
) => {
  return useQuery<User, RequestError>('login', () => getLogin({ registrationId }), {
    ...options,
  })
}

export default useLogin
