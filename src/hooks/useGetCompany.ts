import { getCompany } from '@/apis/service'
import { Company, RequestError } from '@/type'
import { useState } from 'react'
import { QueryKey, useQuery, UseQueryOptions } from 'react-query'

type UseQueryOption = Omit<
  UseQueryOptions<Company, RequestError, Company, QueryKey>,
  'queryKey' | 'queryFn'
>

const useGetCompany = (options?: UseQueryOption) => {
  const [domain, setDomain] = useState('')

  const query = useQuery<Company, RequestError>(
    `${domain}`,
    () => getCompany({ companyDomain: domain }),
    {
      ...options,
      enabled: Boolean(domain) && options?.enabled,
    }
  )

  return {
    setDomain,
    ...query,
  }
}

export default useGetCompany
