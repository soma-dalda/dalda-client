import { updateHelmet } from '@/slice/helmetSlice'
import { useAppDispatch, useAppSelector } from '@/store/config'
import { useCallback } from 'react'

type HelmetState = {
  title: string
  description: string
  keywords: (string | null)[]
  thumbnail: string
  url: string
}

const useHelmet = () => {
  const helmet = useAppSelector((state) => state.helmet)
  const dispatch = useAppDispatch()

  const dispatchUpdateHelmet = useCallback(
    (state: { [key in keyof HelmetState]?: HelmetState[key] | null }) => {
      dispatch(updateHelmet(state))
    },
    []
  )

  return {
    helmet,
    dispatchUpdateHelmet,
  }
}

export default useHelmet
