import { getLogin } from '@/apis/service'
import { RequestError, User } from '@/type'
import { QueryKey, useQuery, UseQueryOptions } from 'react-query'

type UseQueryOption = Omit<
  UseQueryOptions<User, RequestError, User, QueryKey>,
  'queryKey' | 'queryFn'
>

const useLogin = (options: UseQueryOption) => {
  return useQuery<User, RequestError>('login', () => getLogin({ registrationId: 'kakao' }), {
    ...options,
  })
}

export default useLogin
