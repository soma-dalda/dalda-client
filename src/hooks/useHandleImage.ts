import useGetCompanyRequest from '@/pages/Domain/hooks/useGetCompanyRequest'
import usePatchUser from '@/pages/Edit/hooks/usePatchCompany'
import { RequestError } from '@/type'
import { ChangeEvent, DragEvent, useCallback, useState } from 'react'
import { UseMutationOptions } from 'react-query'
import usePostImage from './usePostImage'

type ResponseBody = { url: string }

type UseMutationOption = Omit<
  UseMutationOptions<ResponseBody, RequestError, FormData, unknown>,
  'mutationFn'
>

const useHandleImage = (options?: UseMutationOption) => {
  const [name, setName] = useState<string>()
  const [isDragging, setIsDragging] = useState(false)

  const { mutate: patchCompany } = usePatchUser()
  const { refetch } = useGetCompanyRequest({ enabled: false })

  const { mutate, reset, ...rest } = usePostImage({
    ...options,
    onSuccess: (data) => {
      patchCompany({
        profileImage: data.url,
      })
      refetch()
    },
    onSettled: () => {
      reset()
    },
  })

  const handleDragIn = useCallback((e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleDragOut = useCallback((e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const handleDragOver = useCallback((e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.dataTransfer?.files) {
      setIsDragging(true)
    }
  }, [])

  const handleChangeDropImage = useCallback((e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault()

    if (e.dataTransfer?.files) {
      const file = e.dataTransfer?.files[0]
      const formData = new FormData()
      formData.append('file', file)
      setName(file.name)
      mutate(formData)
    }
  }, [])

  const handleChangeImage = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (e.target?.files) {
      const file = e.target?.files[0]
      const formData = new FormData()
      formData.append('file', file)
      setName(file.name)
      mutate(formData)
    }
  }, [])

  const handleDrop = useCallback((e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    e.stopPropagation()

    setIsDragging(false)
    handleChangeDropImage(e)
  }, [])

  return {
    isDragging,
    handleDragIn,
    handleDragOver,
    handleDrop,
    handleDragOut,
    handleChangeImage,
    name,
    ...rest,
  }
}

export default useHandleImage
