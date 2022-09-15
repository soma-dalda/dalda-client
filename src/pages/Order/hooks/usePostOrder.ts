import { postOrder } from '@/apis/service'
import { useMutation, UseMutationOptions } from 'react-query'
import { Order, RequestError } from '@/type'

type Variables = Order

type UseMutationOption = Omit<
  UseMutationOptions<any, RequestError, Variables, unknown>,
  'mutationFn'
>

const usePostOrder = (options?: UseMutationOption) => {
  return useMutation(postOrder, { ...options })
}

export default usePostOrder
