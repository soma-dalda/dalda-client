import usePostImage from '@/hooks/usePostImage'
import React, { useCallback, useState } from 'react'
import DomainProfileImage from '../molecules/DomainProfileImage'

type Props = {
  src?: string
}

const DomainProfileImageUpload = ({ src }: Props) => {
  const { mutate } = usePostImage()
  const [image, setImage] = useState<FormData>()

  const onChangeImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (e.target.files) {
      const file: File = e.target.files[0]
      const formData = new FormData()
      formData.append('file', file)
      setImage(formData)
    }
  }, [])

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (image) {
        mutate(image)
      }
    },
    [image]
  )

  return (
    <form id="image" onSubmit={onSubmit}>
      <input className="w-full" type="file" accept="image/*" onChange={onChangeImage} />
      <button type="submit" form="image">
        저장
      </button>
      <DomainProfileImage src={src} />
    </form>
  )
}

export default DomainProfileImageUpload
