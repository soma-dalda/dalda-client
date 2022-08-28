import { MOCK_TEMPLATE } from '@/mocks/constant'
import axios, { AxiosError } from 'axios'
import { QueryKey, useQuery, UseQueryOptions } from 'react-query'

const templatesRequest = async (domain: string) => {
  const { data } = await axios.get<typeof MOCK_TEMPLATE[]>(`/${domain}/templates`)

  return data
}

type UseQueryOption = Omit<
  UseQueryOptions<
    typeof MOCK_TEMPLATE[],
    AxiosError<{ message: string }, any>,
    typeof MOCK_TEMPLATE[],
    QueryKey
  >,
  'queryKey' | 'queryFn'
>

const useTemplatesRequest = (domain?: string, options?: UseQueryOption) => {
  return useQuery<typeof MOCK_TEMPLATE[], AxiosError<{ message: string }>>(
    ['tempates', domain],
    () => templatesRequest(domain ?? ''),
    { ...options }
  )
}

export default useTemplatesRequest
