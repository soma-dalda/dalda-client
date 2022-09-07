import { AxiosResponse } from 'axios'
import { useMutation, UseMutationOptions } from 'react-query'
import { RequestError, Template } from '@/type'
import { putTemplate } from '@/apis/service'

type UseMutationOption = Omit<
  UseMutationOptions<AxiosResponse, RequestError, Template, unknown>,
  'queryKey' | 'queryFn'
>

const usePutTemplate = (options?: UseMutationOption) => {
  return useMutation<AxiosResponse, RequestError, Template>(putTemplate, { ...options })
}

export default usePutTemplate
