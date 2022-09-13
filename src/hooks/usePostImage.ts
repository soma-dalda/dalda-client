import { postImage } from '@/apis/service'
import { RequestError } from '@/type'
import { useMutation, UseMutationOptions } from 'react-query'

type ResponseBody = { url: string }

type UseMutationOption = Omit<
  UseMutationOptions<ResponseBody, RequestError, FormData, unknown>,
  'mutationFn'
>

const usePostImage = (options?: UseMutationOption) => {
  return useMutation<ResponseBody, RequestError, FormData>(postImage, { ...options })
}

export default usePostImage
