import { RequestError } from '@/type'
import { useCallback, useState } from 'react'
import { UseMutationOptions } from 'react-query'
import usePostImage from './usePostImage'

type ResponseBody = { url: string }

type UseMutationOption = Omit<
  UseMutationOptions<ResponseBody, RequestError, FormData, unknown>,
  'mutationFn'
>

const useHandleImage = (options?: UseMutationOption) => {
  const [name, setName] = useState<string>()
  const { mutate, reset, ...rest } = usePostImage({
    ...options,
    onSettled: () => {
      reset()
    },
  })

  const handleChangeImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (e.target.files) {
      const file: File = e.target.files[0]
      const formData = new FormData()
      formData.append('file', file)
      setName(file.name)
      mutate(formData)
    }
  }, [])

  return {
    handleChangeImage,
    name,
    ...rest,
  }
}

export default useHandleImage
