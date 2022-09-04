import { AxiosError } from 'axios'
import { postOrder } from '@/apis/service'
import { useMutation, UseMutationOptions } from 'react-query'

type Variables = {
  domain?: string
  templateId?: string
  orderId: string | undefined
  answers: string[]
}

type UseMutationOption = Omit<UseMutationOptions<any, AxiosError, Variables, unknown>, 'mutationFn'>

const usePostOrder = (options?: UseMutationOption) => {
  return useMutation(postOrder, { ...options })
}

export default usePostOrder
