import { COMPANY } from '@/mocks/constant'
import axios, { AxiosError } from 'axios'
import { QueryKey, useQuery, UseQueryOptions } from 'react-query'

const domainRequest = async (domain: string) => {
  const { data } = await axios.get<typeof COMPANY>(`/${domain}`)

  return data
}

type UseQueryOption = Omit<
  UseQueryOptions<typeof COMPANY, AxiosError<{ message: string }, any>, typeof COMPANY, QueryKey>,
  'queryKey' | 'queryFn'
>

const useDomainRequest = (domain?: string, options?: UseQueryOption) => {
  return useQuery<typeof COMPANY, AxiosError<{ message: string }>>(
    `${domain}`,
    () => domainRequest(domain ?? ''),
    { ...options }
  )
}

export default useDomainRequest
