import { AxiosError } from 'axios'
import { useParams } from 'react-router-dom'
import { getTemplate } from '@/apis/service'
import { QueryKey, useQuery, UseQueryOptions } from 'react-query'
import { Template } from '@/type'

type UseQuetyOption = Omit<
  UseQueryOptions<Template, AxiosError, Template, QueryKey>,
  'queryKey' | 'queryFn'
>

const useGetTemplateById = (key: QueryKey, options: UseQuetyOption) => {
  const { id: templateId } = useParams()
  return useQuery(key, () => getTemplate({ templateId }), { ...options })
}

export default useGetTemplateById
