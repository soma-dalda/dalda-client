import { postRefresh } from '@/apis/service'
import { RequestError } from '@/type'
import { useMutation, UseMutationOptions } from 'react-query'

type ResponseBody = string

type UseMutationOption = Omit<
  UseMutationOptions<ResponseBody, RequestError, unknown, unknown>,
  'mutationFn'
>

const usePostRefresh = (options?: UseMutationOption) => {
  return useMutation<ResponseBody, RequestError>(postRefresh, { ...options })
}

export default usePostRefresh
