import { updateError } from '@/pages/slice/errorSlice'
import { useAppDispatch, useAppSelector } from '@/store/config'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const useError = () => {
  const { error } = useAppSelector((state) => state.error)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const dispatchUpdateError = useCallback((message?: string) => {
    dispatch(updateError({ error: { message } }))
    navigate('/error')
  }, [])

  return {
    error,
    dispatchUpdateError,
  }
}

export default useError
