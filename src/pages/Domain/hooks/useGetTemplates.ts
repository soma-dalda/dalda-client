import { getTemplates } from '@/apis/service'
import { Template } from '@/type'
import { AxiosError } from 'axios'
import { UseQueryOptions, QueryKey, useQuery } from 'react-query'

type UseQueryOption = Omit<
  UseQueryOptions<Template[], AxiosError<unknown, any>, Template[], QueryKey>,
  'queryKey' | 'queryFn'
>

const useGetTemplates = ({ companyId }: { companyId?: string }, options?: UseQueryOption) => {
  return useQuery<Template[], AxiosError>(
    `templates/${companyId}`,
    () => getTemplates({ companyId }),
    {
      ...options,
    }
  )
}

export default useGetTemplates
