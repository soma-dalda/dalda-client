import { patchCompany } from '@/apis/service'
import useGetUser from '@/hooks/useGetUser'
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

const usePatchUser = (option?: UseMutationOption) => {
  const { data } = useGetUser()

  return useMutation<AxiosResponse, RequestError, PutUserAPIParams>(patchCompany({ ...data }), {
    ...option,
  })
}

export default usePatchUser
