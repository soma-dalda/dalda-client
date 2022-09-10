import { getTemplates } from '@/apis/service'
import { Template, RequestError } from '@/type'
import { UseQueryOptions, QueryKey, useQuery } from 'react-query'

type UseQueryOption = Omit<
  UseQueryOptions<Template[], RequestError, Template[], QueryKey>,
  'queryKey' | 'queryFn'
>

const useGetTemplates = ({ companyId }: { companyId?: string }, options?: UseQueryOption) => {
  return useQuery<Template[], RequestError>(
    `templates/${companyId}`,
    () => getTemplates({ companyId }),
    {
      ...options,
    }
  )
}

export default useGetTemplates
