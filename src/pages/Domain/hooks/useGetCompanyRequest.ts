import { getCompany } from '@/apis/service'
import { Company } from '@/type'
import { AxiosError } from 'axios'
import { QueryKey, useQuery, UseQueryOptions } from 'react-query'
import { useParams } from 'react-router-dom'

type UseQueryOption = Omit<
  UseQueryOptions<Company, AxiosError, Company, QueryKey>,
  'queryKey' | 'queryFn'
>

const useGetCompanyRequest = (options?: UseQueryOption) => {
  const { domain } = useParams()

  return useQuery<Company, AxiosError>(`${domain}`, () => getCompany({ companyDomain: domain }), {
    ...options,
  })
}

export default useGetCompanyRequest
