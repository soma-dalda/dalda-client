import { AxiosResponse } from 'axios'
import { useMutation, UseMutationOptions } from 'react-query'
import { RequestError, Template } from '@/type'
import { postTemplates } from '@/apis/service'

type UseMutationOption = Omit<
  UseMutationOptions<AxiosResponse, RequestError, Template, unknown>,
  'queryKey' | 'queryFn'
>

const usePostTemplates = (options?: UseMutationOption) => {
  return useMutation<AxiosResponse, RequestError, Template>(postTemplates, { ...options })
}

export default usePostTemplates
