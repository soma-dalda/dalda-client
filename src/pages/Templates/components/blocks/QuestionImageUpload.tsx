import React from 'react'
import useHandleImage from '@/hooks/useHandleImage'

type Props = {
  handleContentImageUpdate: (imgUrl: string) => void
  id?: string
}

const QuestionImageUpload = ({ handleContentImageUpdate, id }: Props) => {
  const {
    handleChangeImage,
    data: img,
    name,
  } = useHandleImage({
    onSuccess: ({ url }) => {
      handleContentImageUpdate(url)
    },
  })

  return (
    <label htmlFor={id} className="flex cursor-pointer items-center justify-center">
      <input type="file" id={id} className="sr-only" onChange={handleChangeImage} />
      {img?.url && <p>+ {name}</p>}
      {!img?.url && <p>+ 이미지 추가</p>}
    </label>
  )
}

export default QuestionImageUpload
