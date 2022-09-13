import { patchUser } from '@/apis/service'
import { useMutation, UseMutationOptions } from 'react-query'

type UserMutationOption = Omit<
  UseMutationOptions<any, unknown, { username: string; userPhone: string }, unknown>,
  'mutationFn'
>

const usePatchUser = (option?: UserMutationOption) => {
  return useMutation(patchUser, { ...option })
}

export default usePatchUser
