import { updateError } from '@/slice/statusSlice'
import { useAppDispatch, useAppSelector } from '@/store/config'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const useStatus = () => {
  const status = useAppSelector((state) => state.status)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const dispatchUpdateError = useCallback(
    ({ message, code }: { message?: string | { message: string }; code?: string | number }) => {
      if (typeof message === 'string') {
        dispatch(updateError({ message: message ?? '', code: code ?? '200' }))
      } else {
        dispatch(updateError({ message: message?.message ?? '', code: code ?? '200' }))
      }
      navigate('/error')
    },
    []
  )

  return {
    status,
    dispatchUpdateError,
  }
}

export default useStatus
