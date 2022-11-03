import { ToastOptionType, useToast as usePreviousToast } from '@jaewoong2/toast'

const useToast = (message: string, options?: ToastOptionType) => {
  const suceess = usePreviousToast(message, {
    backgroundColor: '#354898',
    width: 200,
    color: 'white',
    borderRadius: 100,
    ...options,
  })

  const error = usePreviousToast(message, {
    backgroundColor: '#E56FB4',
    width: 200,
    color: 'white',
    borderRadius: 100,
    ...options,
  })

  return {
    suceess,
    error,
  }
}

export default useToast
