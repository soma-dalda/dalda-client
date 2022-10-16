import { getTemplates } from '@/apis/service'
import { Templates, RequestError } from '@/type'
import { UseQueryOptions, QueryKey, useQuery } from 'react-query'

type UseQueryOption = Omit<
  UseQueryOptions<Templates, RequestError, Templates, QueryKey>,
  'queryKey' | 'queryFn'
>

const useGetTemplates = ({ companyId }: { companyId?: string }, options?: UseQueryOption) => {
  return useQuery<Templates, RequestError>(
    `templates/${companyId}`,
    () => getTemplates({ companyId }),
    {
      ...options,
    }
  )
}

export default useGetTemplates
