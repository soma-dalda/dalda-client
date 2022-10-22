import { patchProfileImage } from '@/apis/service'
import { RequestError } from '@/type'
import { AxiosResponse } from 'axios'
import { useMutation, UseMutationOptions } from 'react-query'

type UseMutationOption = Omit<
  UseMutationOptions<AxiosResponse, RequestError, { imageUrl: string }, unknown>,
  'mutationFn'
>

const usePatchProfileImage = (option?: UseMutationOption) => {
  return useMutation<AxiosResponse, RequestError, { imageUrl: string }>(patchProfileImage, {
    ...option,
  })
}

export default usePatchProfileImage
