import { getTemplate } from '@/apis/service'
import { QueryKey, useQuery, UseQueryOptions } from 'react-query'
import { RequestError, Template } from '@/type'

type UseQueryOption = Omit<
  UseQueryOptions<Template, RequestError, Template, QueryKey>,
  'queryFn' | 'queryKey'
>

const useGetTemplate = (templateId: string, options?: UseQueryOption) => {
  return useQuery<Template, RequestError>(
    ['getTemplate', templateId],
    () => getTemplate({ templateId }),
    {
      ...options,
    }
  )
}

export default useGetTemplate
