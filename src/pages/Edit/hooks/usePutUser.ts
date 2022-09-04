import { putUser } from '@/apis/service'
import { User, RequestError } from '@/type'
import { AxiosResponse } from 'axios'
import { useMutation, UseMutationOptions } from 'react-query'

type PutUserAPIParams = {
  [key in keyof User]?: User[key]
}

type UseMutationOption = Omit<
  UseMutationOptions<AxiosResponse, RequestError, PutUserAPIParams, unknown>,
  'mutationFn'
>

const usePutUser = (option?: UseMutationOption) => {
  return useMutation<AxiosResponse, RequestError, PutUserAPIParams>(putUser, { ...option })
}

export default usePutUser
