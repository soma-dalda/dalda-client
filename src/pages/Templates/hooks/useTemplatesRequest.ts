import axios, { AxiosError } from 'axios'
import { QueryKey, useQuery, UseQueryOptions } from 'react-query'
import { PATH } from '@/apis/paths'
import { Templates, Company } from '@/type'

const templatesRequest = async (domain?: string) => {
  const { data } = await axios.get<Company>(PATH.getCompany({ companyDomain: domain }))
  return data.templates
}

type UseQueryOption = Omit<
  UseQueryOptions<Templates, AxiosError<{ message: string }, any>, Templates, QueryKey>,
  'queryKey' | 'queryFn'
>

const useTemplatesRequest = (domain?: string, options?: UseQueryOption) => {
  return useQuery<Templates, AxiosError<{ message: string }>>(
    ['tempates', domain],
    () => templatesRequest(domain),
    { ...options }
  )
}

export default useTemplatesRequest
