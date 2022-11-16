import { getCompany } from '@/apis/service'
import { Company, RequestError } from '@/type'
import { QueryKey, useQuery, UseQueryOptions } from 'react-query'
import { useParams } from 'react-router-dom'

type UseQueryOption = Omit<
  UseQueryOptions<Company, RequestError, Company, QueryKey>,
  'queryKey' | 'queryFn'
>

const useGetCompanyRequest = (options?: UseQueryOption) => {
  const { domain } = useParams()

  return useQuery<Company, RequestError>(`${domain}`, () => getCompany({ companyDomain: domain }), {
    ...options,
    enabled: domain ? options?.enabled : false,
  })
}

export default useGetCompanyRequest
